import json
import os

file_path = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/src/pages/Tools.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read().strip()

print(f"Content starts with: {content[:100]}")
print(f"Content ends with: {content[-100:]}")
print(f"Length of content: {len(content)}")

# Try decoding it
try:
    # If the content starts and ends with double quotes, it might be a JSON string
    if content.startswith('"') and content.endswith('"'):
        decoded = json.loads(content)
        print("Decoded successfully using json.loads!")
        # Write decoded content back to the file
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(decoded)
        print("Successfully wrote decoded content back to Tools.jsx!")
    else:
        # Maybe it's wrapped but not perfectly, or contains escape sequences we can decode
        # Let's try parsing it as a raw string if it has quotes
        # Or we can just use codecs to escape/unescape
        # Let's check if we can wrap it in quotes and parse
        if not content.startswith('"'):
            content_wrapped = '"' + content + '"'
            decoded = json.loads(content_wrapped)
            print("Decoded successfully with wrapped quotes!")
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(decoded)
            print("Successfully wrote decoded content back to Tools.jsx!")
        else:
            print("Content starts with quote but does not end with quote.")
except Exception as e:
    print("Failed to decode:", e)
