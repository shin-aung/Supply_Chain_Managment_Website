// ─────────────────────────────────────────────────────────────
// MEDIA MANIFEST
// Add your file names to each array below.
// All files should be placed in the public/ folder.
//
// IMAGES → public/images/UNIQLO/, public/images/IKEA/, etc.
// VIDEOS → public/videos/UNIQLO/, public/videos/IKEA/, etc.
//
// Example:
//   uniqloImages: ['entrance.jpg', 'new-arrivals.jpg', 'self-checkout.jpg']
// ─────────────────────────────────────────────────────────────

export const mediaManifest = {
  // ── UNIQLO ────────────────────────────────────────────────
  uniqloImages: [
    'UNIQLO_Entrance.png',
    // Add your UNIQLO image filenames here
    // e.g. 'entrance.jpg', 'new-arrivals.jpg', 'self-checkout.jpg'
  ] as string[],

  uniqloVideos: [
    // Add your UNIQLO video filenames here
    // e.g. 'store-tour.mp4', 'self-checkout.mp4'
  ] as string[],

  // ── IKEA ─────────────────────────────────────────────────
  ikeaImages: [
    // Add your IKEA image filenames here
    // e.g. 'showroom.jpg', 'warehouse.jpg', 'food-court.jpg'
  ] as string[],

  ikeaVideos: [
    // Add your IKEA video filenames here
    // e.g. 'showroom-walk.mp4', 'warehouse.mp4'
  ] as string[],

  // ── ZARA ─────────────────────────────────────────────────
  zaraImages: [
    // Add your ZARA image filenames here
  ] as string[],

  zaraVideos: [
    // Add your ZARA video filenames here
  ] as string[],

  // ── MEMBERS ──────────────────────────────────────────────
  memberImages: [
    // Add your member/group photo filenames here
    // e.g. 'group-photo.jpg', 'member1.jpg'
  ] as string[],
}

// ─────────────────────────────────────────────────────────────
// Helper to build public URLs
// ─────────────────────────────────────────────────────────────
export const buildUrl = (folder: string, filename: string) =>
  `/${folder}/${filename}`
