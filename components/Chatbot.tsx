import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EDUCATION, TRAINING } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Abdallah's virtual assistant. Ask me anything about his projects, skills, or experience." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key not found");
      }
      const genAI = new GoogleGenerativeAI(process.env.API_KEY);
      const systemContext = `
        You are an AI assistant for the portfolio of Abdallah Wageeh.
        Identify yourself as his digital assistant.
        
        Here is his information:
        BIO: ${PERSONAL_INFO.bio}
        SKILLS: ${JSON.stringify(SKILL_CATEGORIES)}
        PROJECTS: ${JSON.stringify(PROJECTS)}
        EDUCATION: ${JSON.stringify(EDUCATION)}
        TRAINING: ${JSON.stringify(TRAINING)}
        CONTACT: Email: ${PERSONAL_INFO.email}, Phone: ${PERSONAL_INFO.phone}
        
        Guidelines:
        - Be professional, concise, and helpful.
        - If asked about hiring, encourage them to use the contact form or email.
        - Keep answers short (under 100 words) unless detailed info is requested.
        - You represent a modern, artistic Full Stack Engineer.
      `;

      const model = genAI.getGenerativeModel({ 
        model: 'gemini-flash-latest',
        systemInstruction: systemContext,
      });

      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const reply = response.text();
      
      setMessages(prev => [...prev, { role: 'model', text: reply }]);
    } catch (error: any) {
      console.error("Chat error", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setMessages(prev => [...prev, { role: 'model', text: `Sorry, I encountered an error: ${errorMessage}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-stone-800 text-stone-400 rotate-90' : 'bg-amber-600 text-white animate-pulse'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Modal */}
      <div 
        className={`fixed bottom-24 right-6 w-80 md:w-96 bg-charcoal border border-stone-800 rounded-2xl shadow-2xl z-50 overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-stone-900 p-4 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-amber-600/20 rounded-lg">
              <Sparkles size={18} className="text-amber-500" />
            </div>
            <div>
              <h3 className="text-stone-200 font-serif font-bold text-sm">ZackRiver AI</h3>
              <p className="text-stone-500 text-xs font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-void/50">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-stone-800 text-stone-400' : 'bg-amber-600/20 text-amber-500'
                }`}
              >
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-stone-800 text-stone-200 rounded-tr-none' 
                    : 'bg-stone-900 border border-stone-800 text-stone-300 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-600/20 text-amber-500 rounded-full flex items-center justify-center">
                <Bot size={14} />
              </div>
              <div className="bg-stone-900 border border-stone-800 p-3 rounded-2xl rounded-tl-none flex gap-1">
                <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce delay-75"></span>
                <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 bg-stone-900 border-t border-stone-800 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my experience..."
            className="flex-1 bg-void border border-stone-800 rounded-xl px-4 py-2 text-sm text-stone-200 focus:outline-none focus:border-amber-600 transition-colors placeholder:text-stone-600"
          />
          <button 
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-2 bg-amber-600 text-white rounded-xl hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;