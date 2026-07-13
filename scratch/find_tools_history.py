import json

log_path = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/b95a7d49-4c85-4b70-9748-3338f0769f29/.system_generated/logs/transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        try:
            data = json.loads(line)
            step_index = data.get("step_index")
            source = data.get("source")
            type_ = data.get("type")
            content = data.get("content", "")
            
            # Print steps that contain "Tools.jsx" in content or tool_calls
            has_tools = "Tools.jsx" in content or "Tools.jsx" in str(data.get("tool_calls", ""))
            if has_tools:
                print(f"Step {step_index}: source={source}, type={type_}, content_len={len(content)}")
                if type_ in ["CODE_ACTION", "REPLACE_FILE_CONTENT", "MULTI_REPLACE_FILE_CONTENT", "WRITE_TO_FILE"]:
                    print(f"--- CONTENT PREVIEW ---")
                    print(content[:500])
                    print("-----------------------\n")
        except Exception as e:
            print(f"Error on line {i}: {e}")
