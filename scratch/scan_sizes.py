import json

log_path = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/b95a7d49-4c85-4b70-9748-3338f0769f29/.system_generated/logs/transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        try:
            data = json.loads(line)
            step_index = data.get("step_index")
            content = data.get("content", "")
            
            if "Tools.jsx" in content:
                print(f"Step {step_index}: type={data.get('type')}, content_len={len(content)}")
                
            tool_calls = data.get("tool_calls", [])
            for j, tc in enumerate(tool_calls):
                tc_str = str(tc)
                if "Tools.jsx" in tc_str:
                    print(f"Step {step_index} Tool {j}: name={tc.get('name')}, tc_str_len={len(tc_str)}")
        except Exception as e:
            pass
