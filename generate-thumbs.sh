#!/bin/bash
find public/projects -mindepth 2 -type f -name "*.webp" ! -name "*-thumb.webp" | while read img; do
    thumb="${img%.webp}-thumb.webp"
    if [ ! -f "$thumb" ]; then
        echo "Generating $thumb"
        magick "$img" -resize 160x -quality 60 "$thumb"
    fi
done
