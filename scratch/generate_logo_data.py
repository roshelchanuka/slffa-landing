import os
import re

dir_path = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/public/images/extracted_images"
output_file = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/src/data/extractedLogos.js"

if not os.path.exists(dir_path):
    print(f"Directory {dir_path} does not exist yet. Let me try standard images folder.")
    dir_path = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/images/extracted_images"

files = []
if os.path.exists(dir_path):
    for f in os.listdir(dir_path):
        if not f.startswith("._") and os.path.isfile(os.path.join(dir_path, f)):
            files.append(f)

# Sort files based on the image number
def get_num(filename):
    match = re.search(r'image_(\d+)', filename)
    return int(match.group(1)) if match else 9999

files.sort(key=get_num)

urls = [f"/images/extracted_images/{f}" for f in files]

with open(output_file, "w", encoding="utf-8") as out:
    out.write("// Automatically generated list of member logo URLs for Next.js\n\n")
    out.write("export const logoUrls = [\n")
    for url in urls:
        out.write(f"  {repr(url)},\n")
    out.write("];\n")

print(f"Generated {len(urls)} logo URLs inside {output_file}!")
