# Field Exploration — Group 1 SCM

A React + TypeScript website documenting the site visits to Uniqlo, IKEA, and Zara at Tampines.

---

## 📁 Folder Structure

```
public/
  images/
    UNIQLO/      ← Drop your Uniqlo photos here (.jpg, .png, .webp)
    IKEA/        ← Drop your IKEA photos here
    ZARA/        ← Drop your Zara photos here
    members/     ← Drop your group/member photos here
  videos/
    UNIQLO/      ← Drop your Uniqlo video clips here (.mp4, .webm, .mov)
    IKEA/        ← Drop your IKEA video clips here
    ZARA/        ← Drop your Zara video clips here
src/
  mediaManifest.ts  ← Edit this file to register your media
```

---

## 🚀 Setup

### 1. Install Node.js
Download from https://nodejs.org (v18 or newer)

### 2. Install dependencies
```bash
npm install
```

### 3. Add your media files
- Copy your photos into `public/images/UNIQLO/`, `public/images/IKEA/`, etc.
- Copy your videos into `public/videos/UNIQLO/`, `public/videos/IKEA/`, etc.

### 4. Register your files in the manifest
Open `src/mediaManifest.ts` and add your filenames:

```typescript
export const mediaManifest = {
  uniqloImages: [
    'entrance.jpg',
    'new-arrivals.jpg',
    'self-checkout.jpg',
    'recycling-bin.jpg',
  ],
  uniqloVideos: [
    'store-tour.mp4',
  ],
  ikeaImages: [
    'showroom.jpg',
    'warehouse.jpg',
    'food-court.jpg',
    'rotating-chair.mp4',
  ],
  ikeaVideos: [
    'digital-kiosk.mp4',
    'warehouse-walk.mp4',
  ],
  zaraImages: [
    'storefront.jpg',
    'display.jpg',
  ],
  zaraVideos: [],
  memberImages: [
    'group-photo.jpg',
    'member1.jpg',
    'member2.jpg',
  ],
}
```

### 5. Start the development server
```bash
npm run dev
```

Open your browser at **http://localhost:5173**

### 6. Build for production
```bash
npm run build
```

This creates a `dist/` folder you can host anywhere.

---

## 🎨 Design Features

- **Dark editorial aesthetic** with orange accents matching your group presentation
- **Scroll progress bar** at the top
- **Mosaic hero** using your photos
- **Photo gallery** with click-to-enlarge lightbox for each company
- **Video player** with full-screen modal
- **Observation cards** summarising key SCM findings
- **Stats strip** showing photo/video counts
- **Members section** with your team photos
- **Smooth scroll animations** on all sections
- **Fully responsive** for mobile and desktop

---

## 📌 Tips

- Use `.jpg` or `.webp` for photos (smaller file size)
- Use `.mp4` for videos (best browser support)
- Member photos look best in portrait (3:4) ratio
- Company photos work best in landscape (4:3) ratio
