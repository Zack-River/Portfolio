from PIL import Image, ImageDraw

def rounded_rectangle(size, radius, fill):
    width, height = size
    rectangle = Image.new('L', size, 0)
    draw = ImageDraw.Draw(rectangle)
    draw.rounded_rectangle((0, 0, width, height), radius, fill=fill)
    return rectangle

# Load image
img = Image.open('/home/zack-river/Documents/HTML/Portfolio/public/Zack.jpg').convert("RGBA")

# Crop to square (center crop)
width, height = img.size
new_size = min(width, height)
left = (width - new_size) / 2
top = (height - new_size) / 2
right = (width + new_size) / 2
bottom = (height + new_size) / 2
img = img.crop((left, top, right, bottom))

# Resize to 512x512
img = img.resize((512, 512), Image.Resampling.LANCZOS)

# Apply mask (radius 75 on a 512 canvas is about 15%)
mask = rounded_rectangle((512, 512), 75, 255)
img.putalpha(mask)

# Save
img.save('/home/zack-river/Documents/HTML/Portfolio/public/favicon.png')
print("Favicon created successfully.")
