import json

log_path = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/b95a7d49-4c85-4b70-9748-3338f0769f29/.system_generated/logs/transcript_full.jsonl"
output_path = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/src/pages/Tools.jsx"

# We want to collect the contents of Tools.jsx
part1 = ""
part2 = ""

with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            # Check if this is the tool response containing lines of Tools.jsx
            if data.get("type") == "TOOL_RESPONSE" or data.get("status") == "DONE":
                content = data.get("content", "")
                if "File Path:" in content and "Tools.jsx" in content:
                    # Clean up line numbers from the output
                    lines = content.split("\n")
                    clean_lines = []
                    for l in lines:
                        # Find lines like "123: original line"
                        if ":" in l:
                            parts = l.split(":", 1)
                            # Check if the prefix is a number
                            if parts[0].strip().isdigit():
                                # Keep the original line content (strip only the prefix and the space after colon)
                                original = parts[1]
                                if original.startswith(" "):
                                    original = original[1:]
                                clean_lines.append(original)
                    
                    if "Showing lines 1 to 800" in content:
                        part1 = "\n".join(clean_lines)
                    elif "Showing lines 801 to 1200" in content:
                        part2 = "\n".join(clean_lines)
        except Exception as e:
            continue

if part1 and part2:
    full_content = part1 + "\n" + part2
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(full_content)
    print("Successfully restored Tools.jsx!")
else:
    print(f"Failed to find parts: part1 is {bool(part1)}, part2 is {bool(part2)}")
