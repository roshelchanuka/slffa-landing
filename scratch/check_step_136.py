import json

log_path = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/b95a7d49-4c85-4b70-9748-3338f0769f29/.system_generated/logs/transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get("step_index") == 136:
                tc = data.get("tool_calls", [])[0]
                args = tc.get("args", {})
                print(args["CodeContent"])
        except Exception as e:
            pass
