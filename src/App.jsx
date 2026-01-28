import React, { useState, useRef, useEffect } from 'react';
import { Send, Zap, ShieldCheck, FileCode, History, Copy, Check, Terminal, Layout, Settings } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateTestCases } from './services/ollama';

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState(null);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleCopy = (content, index) => {
        navigator.clipboard.writeText(content);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (!input.trim() || loading) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const result = await generateTestCases(input);
            setMessages(prev => [...prev, { role: 'bot', content: result }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'bot',
                content: `### ❌ System Error\nConnection to local model **llama3.2:3b** failed. \n\n**Troubleshooting:**\n1. Ensure Ollama is running (\`ollama serve\`)\n2. Verify model availability (\`ollama pull llama3.2:3b\`)`
            }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="app-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    <Zap size={28} fill="#2dd4bf" strokeWidth={3} />
                    <span>BLAST</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '11px', fontWeight: '700', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Environment</div>
                        <a href="#" className="sidebar-link active"><Layout size={18} /> Dashboard</a>
                        <a href="#" className="sidebar-link"><History size={18} /> History</a>
                    </nav>

                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '11px', fontWeight: '700', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Engineering</div>
                        <a href="#" className="sidebar-link"><ShieldCheck size={18} /> Compliance</a>
                        <a href="#" className="sidebar-link"><FileCode size={18} /> Blueprints</a>
                        <a href="#" className="sidebar-link"><Terminal size={18} /> API Logs</a>
                    </nav>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a href="#" className="sidebar-link"><Settings size={18} /> Settings</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <header>
                    <div>
                        <h2 style={{ fontSize: '18px', fontWeight: '600' }}>Test Architect</h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                            <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></span>
                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>llama3.2:3b active</span>
                        </div>
                    </div>
                    <div style={{ background: 'rgba(45, 212, 191, 0.1)', color: 'var(--accent)', padding: '8px 16px', borderRadius: '12px', fontSize: '13px', fontWeight: '600', border: '1px solid rgba(45, 212, 191, 0.2)' }}>
                        Ollama: 11434
                    </div>
                </header>

                <section className="chat-history">
                    {messages.length === 0 && (
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', textAlign: 'center', gap: '24px' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                                <Zap size={40} strokeWidth={1.5} color="var(--accent)" />
                            </div>
                            <div>
                                <h3 style={{ color: 'white', marginBottom: '8px', fontSize: '20px' }}>Initialize Generation</h3>
                                <p style={{ maxWidth: '400px', lineHeight: '1.6' }}>Enter a feature requirement or user story to generate a comprehensive testing blueprint.</p>
                            </div>
                        </div>
                    )}

                    {messages.map((msg, i) => (
                        <div key={i} className={`message ${msg.role}`}>
                            {msg.role === 'bot' ? (
                                <div className="bot-content">
                                    <div style={{ position: 'absolute', right: '16px', top: '16px', zIndex: 5 }}>
                                        <button className="copy-btn" onClick={() => handleCopy(msg.content, i)}>
                                            {copiedIndex === i ? <Check size={14} /> : <Copy size={14} />}
                                            {copiedIndex === i ? 'Copied' : 'Copy Blueprint'}
                                        </button>
                                    </div>
                                    <ReactMarkdown className="markdown-body">
                                        {msg.content}
                                    </ReactMarkdown>
                                </div>
                            ) : (
                                msg.content
                            )}
                        </div>
                    ))}

                    {loading && (
                        <div className="message bot">
                            <div className="bot-content" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div className="loading-dots">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '500' }}>Architecting scenarios...</span>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </section>

                <section className="input-container">
                    <form onSubmit={handleSubmit} className="input-wrapper">
                        <textarea
                            placeholder="Describe your feature... (e.g., Use Case: Stripe Payment Integration)"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button type="submit" className="send-btn" disabled={!input.trim() || loading}>
                            <Send size={18} />
                        </button>
                    </form>
                </section>
            </main>
            <style>{`
                .sidebar-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 10px 16px;
                    border-radius: 12px;
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 500;
                    transition: all 0.2s;
                }
                .sidebar-link:hover {
                    color: white;
                    background: rgba(255, 255, 255, 0.03);
                }
                .sidebar-link.active {
                    color: var(--accent);
                    background: rgba(45, 212, 191, 0.05);
                }
            `}</style>
        </div>
    );
}

export default App;
