import os

brain_dir = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/"
for root, dirs, files in os.walk(brain_dir):
    for f in files:
        if f == "transcript_full.jsonl":
            path = os.path.join(root, f)
            print(f"Found: {path} (size: {os.path.getsize(path)} bytes)")
