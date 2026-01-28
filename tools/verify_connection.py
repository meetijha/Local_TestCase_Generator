import requests
import json
import sys

def test_ollama_handshake():
    url_tags = "http://localhost:11434/api/tags"
    url_gen = "http://localhost:11434/api/generate"
    
    print(f"--- Phase 2: Link Handshake ---")
    
    try:
        # Check connection and models
        resp_tags = requests.get(url_tags, timeout=5)
        if resp_tags.status_code != 200:
            print(f"❌ API tags endpoint failed.")
            return False
            
        models = [m['name'] for m in resp_tags.json().get('models', [])]
        print(f"✅ Connection successful. Models found: {', '.join(models)}")
        
        # Determine which llama3.2 to use
        selected_model = next((m for m in models if "llama3.2" in m), None)
        if not selected_model:
            print("❌ No llama3.2 model found. Please run 'ollama pull llama3.2'")
            return False
            
        print(f"⚡ Testing generation with model: {selected_model}")
        
        payload = {
            "model": selected_model,
            "prompt": "Hello, respond with 'READY' if you can hear me.",
            "stream": False
        }
        
        resp_gen = requests.post(url_gen, json=payload, timeout=30)
        if resp_gen.status_code == 200:
            result = resp_gen.json().get('response', '').strip()
            print(f"✅ Handshake response: {result}")
            print(f"🚀 Link verified for model '{selected_model}'.")
            return True
        else:
            print(f"❌ Generation test failed (Status {resp_gen.status_code})")
            return False
            
    except Exception as e:
        print(f"❌ connectivity error: {str(e)}")
        return False

if __name__ == "__main__":
    if test_ollama_handshake():
        sys.exit(0)
    else:
        sys.exit(1)
