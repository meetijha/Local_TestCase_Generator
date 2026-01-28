import sys
import json

def format_payload(prompt, system_template, model="llama3.2:3b"):
    payload = {
        "model": model,
        "prompt": prompt,
        "system": system_template,
        "stream": False
    }
    return payload

if __name__ == "__main__":
    # Atomic payload formatting for testing purposes
    if len(sys.argv) < 3:
        print(json.dumps({"error": "Missing prompt or template"}))
        sys.exit(1)
        
    prompt = sys.argv[1]
    template = sys.argv[2]
    
    print(json.dumps(format_payload(prompt, template)))
