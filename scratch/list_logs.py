import os

log_dir = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/b95a7d49-4c85-4b70-9748-3338f0769f29/.system_generated/logs/"
if os.path.exists(log_dir):
    print("Files in log directory:")
    for f in os.listdir(log_dir):
        path = os.path.join(log_dir, f)
        print(f"  {f} - size: {os.path.getsize(path)} bytes")
else:
    print(f"Log directory {log_dir} does not exist.")
