// Type definitions for wallpaper.js
// Project https://github.com/arifszn/wallpaper.js
// Author: Ariful Alam

export interface options {
  /**
   * How many wallpapers to get.
   *
   * Default: 1
   *
   * Max: 20
   */
  total?: number;

  /**
   * Allow NSFW content in results.
   *
   * Default: true
   */
  allowNSFW?: boolean;
}

/**
 * Get wallpaper.
 */
declare function getWallpaper(options?: options): Promise<any>;

export { getWallpaper };
