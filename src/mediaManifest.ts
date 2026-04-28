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
    "UNIQLO_Entrance.png",
    "Care Bears.jpeg",
    "Disney, Pixar, Marvel and Star wars.jpeg",
    "Floor layout 2F.jpeg",
    "Floor layout 3F.jpeg",
    "Floor layout Entrance.jpeg",
    "Free Items.jpeg",
    "Human display female.jpeg",
    "Human display.jpeg",
    "Limited Offer.jpeg",
    "Manga and Rani.jpeg",
    "Manga.jpeg",
    "Member Benefits.jpeg",
    "Mickey Mouse in Singapore.jpeg",
    "Micky Mouse In Singapore.jpeg",
    "New Arrival.jpeg",
    "Old Chang Kee.jpeg",
    "Online.jpeg",
    "Peanuts and Let me sleep on it.jpeg",
    "Peanuts playful times.jpeg",
    "Pixar and Rani.jpeg",
    "Pokemon.jpeg",
    "Pop Mart UT.jpeg",
    "PopMart.jpeg",
    "Rani and Kitten.jpeg",
    "Recycle bins Uniqlo.jpeg",
    "Recycle.jpeg",
    "Self checkout Uniqlo.jpeg",
    "Shin and Star War.jpeg",
    "The Super Mario Galaxy.jpeg",
    "IMG_2453.JPG",
    "IMG_2454.JPG",
    "IMG_2455.JPG",
    "IMG_2456.JPG",
    "IMG_2457.JPG",
    "IMG_2458.JPG",
    "IMG_2459.JPG",
    "IMG_2461.JPG",
    // Add your UNIQLO image filenames here
    // e.g. 'entrance.jpg', 'new-arrivals.jpg', 'self-checkout.jpg'
  ] as string[],

  uniqloVideos: [
    "IMG_2460.MOV",
    "IMG_2462.MOV",
    // Add your UNIQLO video filenames here
    // e.g. 'store-tour.mp4', 'self-checkout.mp4'
  ] as string[],

  // ── IKEA ─────────────────────────────────────────────────
  ikeaImages: [
    "IKEA1.jpg",
    "IKEA2.jpg",
    "IKEA3.jpg",
    "IKEA4.jpg",
    "IKEA5.jpg",
    "IKEA6.jpg",
    "IKEA7.jpg",
    "IKEA8.jpg",
    "IKEA9.jpg",
    "IKEA10.jpg",
    "IKEA11.jpg",
    "IKEA12.jpg",
    "IKEA13.jpg",
    "IKEA14.jpg",
    "IKEA15.jpg",
    "IKEA16.jpg",
    "IKEA17.jpg",
    "IKEA18.jpg",
    "IKEA19.jpg",
    "IKEA20.jpg",
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
    "Bhuvana_Senthil.png",
    "Rani.png",
    "Shin_Thant_Aung.png",
    "Shweta.png",
    "Su_Sandy_Myint.png",
    // Add your member/group photo filenames here
    // e.g. 'group-photo.jpg', 'member1.jpg'
  ] as string[],
};

// ─────────────────────────────────────────────────────────────
// Helper to build public URLs
// ─────────────────────────────────────────────────────────────
export const buildUrl = (folder: string, filename: string) =>
  `/${folder}/${filename}`;
