import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// The paths are relative to the public directory
const coverImages = [
  "projects/beeplayer/Cover.webp",
  "projects/streamflow/Cover.webp",
  "projects/QarbalaCover.webp",
  "projects/Smartq.webp",
  "projects/sara-ragab/COVER.webp",
  "projects/Mostafa-Nawareg.webp",
  "projects/Ding.webp",
  "projects/pos/Cover.webp",
  "projects/luxe-dental.webp",
  "projects/Hotel-Pro.webp",
  "projects/Khaled-Nasser-Portfolio.webp",
  "projects/Ahmed-Hakim-Portfolio.webp"
];

const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
const THUMB_DIR = path.join(PUBLIC_DIR, 'projects', 'thumbnails');

async function generateThumbnails() {
  if (!fs.existsSync(THUMB_DIR)) {
    fs.mkdirSync(THUMB_DIR, { recursive: true });
  }

  for (const img of coverImages) {
    const inputPath = path.join(PUBLIC_DIR, img);
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${inputPath}`);
      continue;
    }

    // Generate a flat filename for the thumbnail
    // e.g. "projects/beeplayer/Cover.webp" -> "beeplayer-Cover.webp"
    const parsed = path.parse(img);
    const flatName = img
      .replace(/^projects\//, '')
      .replace(/\//g, '-')
      .replace(/\.webp$/, '') + '-thumb.webp';
      
    const outputPath = path.join(THUMB_DIR, flatName);

    console.log(`Processing: ${img} -> ${flatName}`);
    
    // Resize to 900x600 (aspect ratio 1.5) to keep it crisp for retina displays
    // but much smaller than the original 1536x1024
    await sharp(inputPath)
      .resize(900, 600, {
        fit: 'cover',
        position: 'top' // Matches object-top
      })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
      
    console.log(`Saved: ${outputPath}`);
  }
}

generateThumbnails().catch(console.error);
