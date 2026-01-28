import { TESTER_BLUEPRINT_TEMPLATE } from '../constants/templates';

const OLLAMA_API_BASE = '/api';

export const generateTestCases = async (prompt) => {
    try {
        const response = await fetch(`${OLLAMA_API_BASE}/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama3.2:3b',
                system: TESTER_BLUEPRINT_TEMPLATE,
                prompt: prompt,
                stream: false,
            }),
        });

        if (!response.ok) {
            throw new Error(`Ollama API Error: ${response.status}`);
        }

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Failed to generate test cases:', error);
        throw error;
    }
};
