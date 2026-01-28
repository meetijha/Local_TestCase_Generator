# 🏗️ SOP: Test Case Generation Logic

## 🎯 Goal
Generate deterministic, high-quality test cases from unstructured user requirements using local LLM (Ollama).

## 📥 Inputs
- `user_prompt`: Raw text from the UI.
- `system_template`: Professional QA prompt structure (Layer 2 logic).

## 🛠️ Tool Logic
1. **Validation Tool (`tools/verify_input.py`)**: Sanitizes and ensures input is not empty/too short.
2. **Generation Tool (`tools/generate_ollama_payload.py`)**: Formats the JSON request for the Ollama API.
3. **API Execution**: Performed via Layer 1 (Frontend services) using proxied requests.

## ⚠️ Edge Cases
- **Empty Prompt**: Return friendly error.
- **Ollama Offline**: Trigger retry logic or connection failure UI.
- **Garbage Input**: Request clarification.
