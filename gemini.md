# 📜 Project Constitution - gemini.md

## 🧱 Data Schemas

### Request Schema (Frontend -> Ollama/Backend)
```json
{
  "model": "llama3.2",
  "prompt": "User input text describing the feature",
  "system": "The B.L.A.S.T. Template prompt logic",
  "stream": false
}
```

### Response Schema (Ollama/Backend -> Frontend)
```json
{
  "model": "llama3.2",
  "created_at": "ISO8601 Timestamp",
  "response": "Generated Markdown Test Cases",
  "done": true,
  "context": [1, 2, 3],
  "total_duration": 123456
}
```

## ⚖️ Behavioral Rules
1. **Model:** Strictly use `llama3.2:3b` (verified).
2. **Template Logic:** Every user input must be wrapped in a "Tester Blueprint Template" that enforces:
   - Scenario Identification
   - Given/When/Then formatting
   - Boundary value analysis
   - Error/Negative path coverage
3. **UI Tone:** Clean, developer-centric, minimal interface.

## 🏛️ Architectural Invariants (A.N.T.)
1. **Architecture Layer:** All logic must have a corresponding SOP in `architecture/`.
2. **Navigation Layer:** Decision making is decoupled from execution.
3. **Tool Layer:** Tools must be atomic, Python-based, and testable scripts in `tools/`. No side effects allowed outside `.tmp/`.
