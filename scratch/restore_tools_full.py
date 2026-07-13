import json
import os

log_path = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/b95a7d49-4c85-4b70-9748-3338f0769f29/.system_generated/logs/transcript.jsonl"
output_path = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/src/pages/Tools.jsx"

found = False
with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get("step_index") == 136:
                tool_calls = data.get("tool_calls", [])
                if tool_calls:
                    tc = tool_calls[0]
                    args = tc.get("args", {})
                    # args could be a dict or a JSON string
                    if isinstance(args, str):
                        args = json.loads(args)
                    code_content = args.get("CodeContent")
                    if code_content:
                        # Write to file
                        with open(output_path, "w", encoding="utf-8") as out_f:
                            out_f.write(code_content)
                        print(f"Successfully restored Tools.jsx from Step 136 tool call! Total characters: {len(code_content)}")
                        found = True
                        break
        except Exception as e:
            print("Error parsing line:", e)

if not found:
    print("Could not find Step 136 or CodeContent in the logs.")
