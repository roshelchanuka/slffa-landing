import json

log_path = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/0a3495fd-7880-44bb-8339-37506d91670b/.system_generated/logs/transcript_full.jsonl"
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
                # Print tool calls/responses
                print(f"Step {step_index} ({type_}) tools info")
        except Exception as e:
            pass
