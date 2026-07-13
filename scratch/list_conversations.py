import os

brain_dir = "/Users/rusiruudanthakarunarathna/.gemini/antigravity-ide/brain/"
if os.path.exists(brain_dir):
    print("Conversations in brain:")
    for d in os.listdir(brain_dir):
        path = os.path.join(brain_dir, d)
        if os.path.isdir(path):
            print(f"  {d}")
else:
    print("Brain directory does not exist.")
