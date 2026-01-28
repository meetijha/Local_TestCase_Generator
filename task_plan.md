# 📋 Task Plan - Local LLM Test Case Generator (Project 1)

This project aims to build a local LLM test case generator using Ollama, following the B.L.A.S.T. protocol and A.N.T. architecture.

## 🏁 Phase 1: B - Blueprint (Vision & Logic)
- [x] **Discovery:** 
    - [x] North Star: React-based UI chat for test case generation using Ollama (Llama 3.2).
    - [x] Integrations: Ollama API.
    - [x] Source of Truth: User input via UI.
    - [x] Delivery Payload: Generated test cases displayed within the chat UI.
    - [x] Behavioral Rules: Prompt-driven generation using internal templates.
- [x] **Research:** Search for resources, Ollama API docs, and test case generation patterns.
- [ ] **Data Schema:** Define Input/Output JSON shapes in `gemini.md`.
- [ ] **Final Blueprint:** Update `task_plan.md` for approval.

## 🏗️ Phase 2: Link (Information Architecture)
## ⚡ Phase 2: L - Link (Connectivity)
- [x] **Verification:** Tested Ollama API connection at `localhost:11434`.
- [x] **Handshake:** `tools/verify_connection.py` executed successfully with `llama3.2:3b`.

## ⚠️ Constraints & Risk
- **Hardware:** Requires Ollama running with `llama3.2:3b`.
- **Latency:** Local LLM response time might affect UI experience (need loading states).
- **CORS:** Frontend (React) needs to communicate with Ollama (typically port 11434) - might need a proxy or CORS config.

## 🏛️ Phase 3: A - Architect (The 3-Layer Build)
- [x] **Layer 1: Architecture:** Created `architecture/generation_sop.md`.
- [x] **Layer 2: Navigation:** Implemented prompt routing logic in `src/services/ollama.js`.
- [x] **Layer 3: Tools:** Created `tools/verify_input.py` and `tools/generate_ollama_payload.py`.
- [x] **Verification:** Refactored React app to align with atomic tool philosophy.

## ✨ Phase 4: S - Stylize (Refinement & UI)
- [x] **Payload Refinement:** Integrated "Copy Blueprint" feature for professional delivery.
- [x] **UI/UX:** Applied premium Obsidian Dark theme with frosted glass effects and responsive layouts.
- [x] **Feedback:** UI is stylized and ready for deployment.

## 🚀 Phase 5: Trigger (Automation & Deployment)
- [ ] Final end-to-end testing
- [ ] Document usage workflows
