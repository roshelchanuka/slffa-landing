import os
import re

images_base = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/public/images"
output_file = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/src/data/staticGalleryData.js"

# Helper to check if file is valid image
def is_valid_img(f):
    exts = ['.png', '.jpg', '.jpeg', '.svg', '.webp']
    return not f.startswith("._") and any(f.lower().endswith(e) for e in exts)

# 1. Root images
root_images = []
for f in os.listdir(images_base):
    path = os.path.join(images_base, f)
    if os.path.isfile(path) and is_valid_img(f):
        root_images.append(f)
root_images.sort()

# 2. 30_years
years30_dir = os.path.join(images_base, "30_years")
years30_files = []
if os.path.exists(years30_dir):
    for f in os.listdir(years30_dir):
        if is_valid_img(f):
            years30_files.append(f)
    # Sort by IMG_(\d+)
    def sort_key_30(f):
        match = re.search(r'IMG_(\d+)', f)
        return int(match.group(1)) if match else 99999
    years30_files.sort(key=sort_key_30)

# 3. 2024january01
jan2024_dir = os.path.join(images_base, "2024january01")
jan2024_files = []
time_regex = re.compile(r'(\d{2})_(\d{2})_(\d{2})\s*(AM|PM)', re.I)
if os.path.exists(jan2024_dir):
    for f in os.listdir(jan2024_dir):
        if is_valid_img(f):
            jan2024_files.append(f)
    def sort_key_jan2024(f):
        match = time_regex.search(f)
        if not match:
            return 9999999
        hour = int(match.group(1))
        minute = int(match.group(2))
        second = int(match.group(3))
        ampm = match.group(4).upper()
        if ampm == 'PM' and hour != 12:
            hour += 12
        if ampm == 'AM' and hour == 12:
            hour = 0
        return hour * 3600 + minute * 60 + second
    jan2024_files.sort(key=sort_key_jan2024)

# 4. 2022crickertmatch
cricket2022_dir = os.path.join(images_base, "2022crickertmatch")
cricket2022_files = []
if os.path.exists(cricket2022_dir):
    for f in os.listdir(cricket2022_dir):
        if is_valid_img(f):
            cricket2022_files.append(f)
    def sort_key_cricket(f):
        match = re.search(r'IMG_(\d+)', f)
        return int(match.group(1)) if match else 99999
    cricket2022_files.sort(key=sort_key_cricket)

# 5. 2021january01
jan2021_dir = os.path.join(images_base, "2021january01")
jan2021_files = []
if os.path.exists(jan2021_dir):
    for f in os.listdir(jan2021_dir):
        if is_valid_img(f):
            jan2021_files.append(f)
    def sort_key_jan2021(f):
        match = time_regex.search(f)
        if not match:
            return 9999999
        hour = int(match.group(1))
        minute = int(match.group(2))
        second = int(match.group(3))
        ampm = match.group(4).upper()
        if ampm == 'PM' and hour != 12:
            hour += 12
        if ampm == 'AM' and hour == 12:
            hour = 0
        return hour * 3600 + minute * 60 + second
    jan2021_files.sort(key=sort_key_jan2021)

# 6. slffa2025party
party2025_dir = os.path.join(images_base, "slffa2025party")
party2025_files = []
if os.path.exists(party2025_dir):
    for f in os.listdir(party2025_dir):
        if is_valid_img(f):
            party2025_files.append(f)
    party2025_files.sort()

# Output lists as React paths
root_images_urls = [f"/images/{f}" for f in root_images]
years30_urls = [f"/images/30_years/{f}" for f in years30_files]
jan2024_urls = [f"/images/2024january01/{f}" for f in jan2024_files]
cricket2022_urls = [f"/images/2022crickertmatch/{f}" for f in cricket2022_files]
jan2021_urls = [f"/images/2021january01/{f}" for f in jan2021_files]
party2025_urls = [f"/images/slffa2025party/{f}" for f in party2025_files]

with open(output_file, "w", encoding="utf-8") as out:
    out.write("// Dynamic gallery lists generated for Next.js\n\n")
    
    out.write("export const rootImages = [\n")
    for u in root_images_urls:
        out.write(f"  {repr(u)},\n")
    out.write("];\n\n")
    
    out.write("export const anniversary30Images = [\n")
    for u in years30_urls:
        out.write(f"  {repr(u)},\n")
    out.write("];\n\n")
    
    out.write("export const newYear2024Images = [\n")
    for u in jan2024_urls:
        out.write(f"  {repr(u)},\n")
    out.write("];\n\n")
    
    out.write("export const cricket2022Images = [\n")
    for u in cricket2022_urls:
        out.write(f"  {repr(u)},\n")
    out.write("];\n\n")
    
    out.write("export const newYear2021Images = [\n")
    for u in jan2021_urls:
        out.write(f"  {repr(u)},\n")
    out.write("];\n\n")
    
    out.write("export const getTogether2026Images = [\n")
    for u in party2025_urls:
        out.write(f"  {repr(u)},\n")
    out.write("];\n")

print(f"Generated gallery image data inside {output_file}!")
