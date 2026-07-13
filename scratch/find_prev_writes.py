import json
import os

log_path = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/0a3495fd-7880-44bb-8339-37506d91670b/.system_generated/logs/transcript_full.jsonl"

if os.path.exists(log_path):
    print("Found transcript log.")
    with open(log_path, "r", encoding="utf-8") as f:
        for line in f:
            try:
                data = json.loads(line)
                step_index = data.get("step_index")
                type_ = data.get("type")
                tool_calls = data.get("tool_calls", [])
                for tc in tool_calls:
                    name = tc.get("name")
                    if name in ["write_to_file", "replace_file_content", "multi_replace_file_content"]:
                        args = tc.get("args", {})
                        if isinstance(args, str):
                            args = json.loads(args)
                        print(f"Step {step_index} {name}: TargetFile={args.get('TargetFile')}")
            except Exception as e:
                pass
else:
    print("Transcript log not found.")
