<p align="center">
    <img src="https://user-images.githubusercontent.com/45073703/171428440-f585da14-197a-4708-a6a1-240eff2e3fb0.png" alt="wallpaper.js" >
</p>
<p align="center">
  <b>Get wallpapers on browser/server.</b>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@arifszn/wallpaper-js">
    <img src="https://img.shields.io/npm/v/@arifszn/wallpaper-js"/>
  </a>
  <a href="https://github.com/arifszn/wallpaper.js/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/arifszn/wallpaper.js"/>
  </a>
  <a href="https://github.com/arifszn/wallpaper.js/actions/workflows/test.yml">
    <img src="https://github.com/arifszn/wallpaper.js/actions/workflows/test.yml/badge.svg"/>
  </a>
  <a href="https://twitter.com/intent/tweet?text=JavaScript%20package%20to%20get%20wallpapers%20on%20browser/server.&url=https://github.com/arifszn/wallpaper-js&hashtags=javascript,opensource,js,webdev,developers">
    <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Farifszn%2Fwallpaper-js"/>
  </a>
</p>

## Description

**wallpaper.js** is a JavaScript package to get bulk wallpapers. Supports both browser and server.

## Installation

Install via <a href="https://www.npmjs.com/package/@arifszn/wallpaper-js">NPM</a>.

```
npm install @arifszn/wallpaper-js
```

Or install via <a href="https://yarnpkg.com/package/@arifszn/wallpaper-js">Yarn</a>.

```
yarn add @arifszn/wallpaper-js
```

You can also try it [online](https://stackblitz.com/edit/wallpaper-js).

## Usage

### Import

```js
const { getWallpaper } = require('@arifszn/wallpaper-js');
```

Or

```js
import { getWallpaper } from '@arifszn/wallpaper-js';
```

### Get 1 wallpaper

```js
getWallpaper().then((result) => {
  console.log(result);
});
```

### Get 20 wallpapers

```js
getWallpaper({
  total: 20,
}).then((result) => {
  console.log(result);
});
```

## Options

|  Property   |  Type   | Description                           | Default |
| :---------: | :-----: | :------------------------------------ | :-----: |
|   `total`   | number  | How many wallpapers to get. Max is 20 |    1    |
| `allowNSFW` | boolean | Allow NSFW content in results         |  true   |

## Sample Response

```js
[
  {
    id: 'abcxyz',
    title: 'Wallpaper title',
    postLink: 'https://redd.it/abcxyz',
    image: 'https://i.redd.it/example.jpg',
    thumbnail: 'https://a.thumbs.redditmedia.com/example.jpg',
    subreddit: 'example',
    NSFW: false,
    spoiler: false,
    createdUtc: 1644549590,
    upVotes: 464,
    upVoteRatio: 1.0,
  },
];
```

## Contribute

To contribute, see the [Contributing guide](https://github.com/arifszn/wallpaper.js/blob/main/CONTRIBUTING.md).

## Support

<a href="https://www.buymeacoffee.com/arifszn" target="_blank">
  <img
    src="https://raw.githubusercontent.com/arifszn/arifszn/main/assets/bmc-button.png"
    alt="Buy Me A Coffee"
    height="60" 
    width="217"
  >
</a>

## License

**wallpaper.js** is licensed under the [MIT License](https://github.com/arifszn/wallpaper.js/blob/main/LICENSE).
