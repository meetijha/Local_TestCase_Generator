# 🔍 Findings - Local LLM Test Case Generator

## 💡 Research & Discoveries
- **Ollama API:** Runs on `localhost:11434` by default. Provides `/api/generate` and `/api/chat` endpoints.
- **Python Library:** Official `ollama` library available via pip. Supports structured output and tool calling.
- **Test Generation Patterns:** LLMs can be used to generate unit tests, UI automation scripts (Playwright/Selenium), and manual test cases from code snippets or requirements.
- **Structured Output:** Critical for deterministic automation; Ollama supports JSON format parameters in API calls.

## ⚠️ Constraints & Risk
- Hardware limitations for local LLM execution.
- LLM response consistency and format adherence.
