import json

log_path = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/b95a7d49-4c85-4b70-9748-3338f0769f29/.system_generated/logs/transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get("step_index")
            tool_calls = data.get("tool_calls", [])
            for j, tc in enumerate(tool_calls):
                name = tc.get("name")
                if name == "write_to_file":
                    args = tc.get("args", {})
                    if isinstance(args, str):
                        args = json.loads(args)
                    target = args.get("TargetFile")
                    print(f"Step {step_index}: Target={target}, len={len(args.get('CodeContent', ''))}")
        except Exception as e:
            pass
