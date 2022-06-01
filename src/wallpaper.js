const { subreddit, searchType } = require('./lib/subreddit');
const {
  randomNumber,
  getRequest,
  isImageUrl,
  formatPost,
  shuffleArray,
} = require('./utils');

const maxRetry = 50;
const postLimit = 75;

/**
 * Get n random wallpaper where n = total.
 *
 * @param {object} obj
 * @param {number} obj.total
 * @param {number} obj.retryCounter
 * @param {array} obj.fetchedWallpaper
 * @param {boolean} obj.allowNSFW
 * @returns {array}
 */
const getRandomWallpaper = async ({
  total,
  retryCounter = 0,
  fetchedWallpaper = [],
  allowNSFW,
}) => {
  // check retry limit
  retryCounter++;

  if (retryCounter == maxRetry) {
    throw Error('Maximum retry limit exceeded');
  }

  let response;

  try {
    let rand = randomNumber(0, subreddit.length);

    response = await getRequest(
      'https://api.reddit.com/r/' +
        subreddit[rand] +
        '/' +
        getRandomSearchType() +
        '?limit=' +
        postLimit
    );
  } catch (error) {
    // retry if error occurs
    return await getRandomWallpaper({
      total: total,
      retryCounter: retryCounter,
      fetchedWallpaper: fetchedWallpaper,
      allowNSFW: allowNSFW,
    });
  }

  response.data.data.children.forEach((rawPost) => {
    if (
      typeof rawPost.data !== 'undefined' &&
      typeof rawPost.data.url !== 'undefined' &&
      isImageUrl(rawPost.data.url, false) &&
      (!allowNSFW ? !rawPost.data.over_18 : true) &&
      !isDuplicate(fetchedWallpaper, rawPost)
    ) {
      fetchedWallpaper.push(formatPost(rawPost.data));
    }
  });

  // if total is not satisfied, retry with already fetched data
  if (fetchedWallpaper.length < total)
    fetchedWallpaper = await getRandomWallpaper({
      total: total,
      retryCounter: retryCounter,
      fetchedWallpaper: fetchedWallpaper,
      allowNSFW: allowNSFW,
    });

  return shuffleArray(fetchedWallpaper).slice(0, total);
};

const getRandomSearchType = () => {
  let index = randomNumber(0, searchType.length);

  return searchType[index];
};

const isDuplicate = (fetchedWallpaper, wallpaper) => {
  return fetchedWallpaper.filter((item) => item.id === wallpaper.id).length
    ? true
    : false;
};

module.exports.getRandomWallpaper = getRandomWallpaper;
