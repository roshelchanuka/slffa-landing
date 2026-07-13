import json
import os

log_path = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/b95a7d49-4c85-4b70-9748-3338f0769f29/.system_generated/logs/transcript.jsonl"

if os.path.exists(log_path):
    print("Found transcript log.")
    with open(log_path, "r", encoding="utf-8") as f:
        for line in f:
            try:
                data = json.loads(line)
                step_index = data.get("step_index")
                type_ = data.get("type")
                content = data.get("content", "")
                if type_ == "USER_INPUT":
                    print(f"Step {step_index} USER: {content.strip()}")
                elif "Tools.jsx" in content or "Tools.jsx" in str(data.get("tool_calls", "")):
                    print(f"Step {step_index} ({type_}) tools info")
            except Exception as e:
                pass
else:
    print("Transcript log not found.")
