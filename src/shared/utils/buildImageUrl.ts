type ImageSize = 
  | 'cover_small'     // 90x128 
  | 'cover_big'       // 264x374
  | 'cover_big_2x'    // 528x704
  | 'screenshot_med'  // 569x320 
  | 'screenshot_big'  // 889x500
  | 'screenshot_huge' // 1280x720
  | '1080p'           // 1920x1080
  | '720p'            // 1280x720
  | 'thumb';          // 90x90

export function buildImageUrl(imageId: string, size: ImageSize = 'cover_big'): string {
  return `https://images.igdb.com/igdb/image/upload/t_${size}/${imageId}.jpg`;
}
