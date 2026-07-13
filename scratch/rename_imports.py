import os
import re

src_dir = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/src"

def replace_in_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    modified = False
    
    # Match imports referencing pages
    # e.g., import Home from '../pages/Home';
    # e.g., import About from '../../pages/About';
    pattern_pages = r"from\s+['\"](.*)pages/([^'\"]+)['\"];?"
    
    def repl(match):
        nonlocal modified
        modified = True
        prefix = match.group(1)
        suffix = match.group(2)
        return f"from '{prefix}views/{suffix}';"

    # Simple string replace is safer and matches more contexts (like require or next/link check if any)
    if "pages/" in content:
        content = content.replace("pages/", "views/")
        modified = True
        
    if modified:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated imports in: {os.path.relpath(file_path, src_dir)}")

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if not f.startswith("._") and (f.endswith(".js") or f.endswith(".jsx")):
            replace_in_file(os.path.join(root, f))
