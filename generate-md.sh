#!/bin/bash
images=(
  "public/projects/beeplayer/Cover.webp"
  "public/projects/streamflow/Cover.webp"
  "public/projects/QarbalaCover.webp"
  "public/projects/Smartq.webp"
  "public/projects/sara-ragab/COVER.webp"
  "public/projects/Mostafa-Nawareg.webp"
  "public/projects/Ding.webp"
  "public/projects/pos/Cover.webp"
  "public/projects/luxe-dental.webp"
  "public/projects/Hotel-Pro.webp"
  "public/projects/Khaled-Nasser-Portfolio.webp"
  "public/projects/Ahmed-Hakim-Portfolio.webp"
)

for img in "${images[@]}"; do
    md="${img%.webp}-md.webp"
    if [ ! -f "$md" ] && [ -f "$img" ]; then
        echo "Generating $md"
        magick "$img" -resize 1080x -quality 75 "$md"
    fi
done
