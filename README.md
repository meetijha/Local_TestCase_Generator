# 🚀 BLAST Test Architect: Local LLM Test Case Generator

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Ollama](https://img.shields.io/badge/Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white)](https://ollama.com/)
[![Llama 3.2](https://img.shields.io/badge/Model-Llama_3.2-blue?style=for-the-badge)](https://ollama.com/library/llama3.1)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**BLAST Test Architect** is a premium, locally-hosted LLM tool designed to transform user requirements into professional, high-coverage testing blueprints. Built using the **B.L.A.S.T. protocol** and **A.N.T. 3-layer architecture**, it ensures that while the AI is probabilistic, your business logic remains deterministic.

---

## ✨ Features

- 🌑 **Obsidian Dark Interface**: A high-end, developer-centric chat workspace.
- 🤖 **Local LLM Integration**: Powered by Ollama (`llama3.2:3b`)—your data never leaves your machine.
- 📋 **Professional Blueprints**: Generates Scenarios, Prerequisites, Given/When/Then steps, and Edge Cases.
- ⚡ **One-Click Copy**: Instantly delivery your blueprints to Slack, Jira, or Notion.
- 🛡️ **Self-Healing Tools**: Built-in Python scripts for link verification and input sanitization.

---

## 🏛️ Architecture: The A.N.T. Way

This project strictly follows the **A.N.T.** (Architecture, Navigation, Tools) philosophy:

1.  **Architecture Layer**: Defined SOPs in `architecture/` that govern logic before a single line of code is run.
2.  **Navigation Layer**: A robust React-based routing layer that orchestrates data flow between the user and the LLM.
3.  **Tool Layer**: Atomic, deterministic Python scripts in `tools/` that handle validation and payload formatting.

---

## 🛠️ Setup & Installation

### 1. Prerequisites
- **Ollama**: [Download and install](https://ollama.com/) Ollama.
- **Model**: Pull the required model:
  ```bash
  ollama pull llama3.2:3b
  ```

### 2. Project Setup
```bash
# Clone the repository
git clone https://github.com/meetijha/Local_TestCase_Generator.git
cd Local_TestCase_Generator

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🚀 The B.L.A.S.T. Protocol

This project was built using the proprietary **B.L.A.S.T.** master system prompt:
- **B**lueprint: Vision and logical mapping.
- **L**ink: Hardshake connectivity with local APIs.
- **A**rchitect: Structural build using A.N.T.
- **S**tylize: Premium UI/UX refinement.
- **T**rigger: Final deployment and verification.

---

## 📝 License
Distributed under the MIT License. See `LICENSE` for more information.

---

Developed with ⚡ by **Antigravity AI**
