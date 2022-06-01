const { getRandomWallpaper } = require('./wallpaper');

/**
 * Get wallpaper.
 *
 * @param {object} obj
 * @param {number} obj.total
 * @param {boolean} obj.allowNSFW
 * @returns {array}
 */
const getWallpaper = async ({ total = 1, allowNSFW = true } = {}) => {
  try {
    if (total > 20) {
      throw Error('max value of total is 20');
    } else if (total < 1) {
      throw Error('min value of total is 1');
    }

    return await getRandomWallpaper({
      total: parseInt(total),
      allowNSFW: allowNSFW,
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports.getWallpaper = getWallpaper;
