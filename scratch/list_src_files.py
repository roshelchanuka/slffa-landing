import os

src_dir = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/src"
for root, dirs, files in os.walk(src_dir):
    for f in files:
        if not f.startswith("._"):
            path = os.path.relpath(os.path.join(root, f), src_dir)
            print(f"src/{path} ({os.path.getsize(os.path.join(root, f))} bytes)")
