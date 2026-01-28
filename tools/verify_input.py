import sys
import json

def verify_input(prompt):
    if not prompt or len(prompt.strip()) < 3:
        return {"valid": False, "error": "Prompt too short. Please describe the feature in more detail."}
    
    # Check for obvious garbage (simplified)
    if all(char in "!@#$%^&*()_+=- " for char in prompt):
         return {"valid": False, "error": "Invalid input characters detected."}

    return {"valid": True, "error": None}

if __name__ == "__main__":
    # Expect prompt as CLI argument for atomicity
    if len(sys.argv) < 2:
        print(json.dumps({"valid": False, "error": "No input provided"}))
        sys.exit(1)
    
    result = verify_input(sys.argv[1])
    print(json.dumps(result))
