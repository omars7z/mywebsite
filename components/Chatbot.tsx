'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your portfolio assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! I'm here to help you learn more about this portfolio. Feel free to ask about projects, skills, or experience!";
    }
    if (lowerInput.includes('project') || lowerInput.includes('work')) {
      return "The portfolio features several projects including SmartLearner (multi-agent learning platform), GenImage Deepfake Detection, Bitcoin Blockchain Analysis, and a Timesheet Platform. Would you like to know more about any specific project?";
    }
    if (lowerInput.includes('skill') || lowerInput.includes('technology')) {
      return "The skills include AI/ML (LLMs, RAG, Agentic Workflows), Backend (Python, FastAPI, Flask), DevOps (Docker, Kubernetes, AWS), and Cybersecurity (Forensic Analysis, Penetration Testing).";
    }
    if (lowerInput.includes('experience') || lowerInput.includes('internship')) {
      return "The experience includes a Software Engineering Internship at Tarjama, exchange student programs in the US and EU, and currently pursuing a CS degree at JUST (graduating 2026).";
    }
    if (lowerInput.includes('contact') || lowerInput.includes('email')) {
      return "You can reach out through the contact form on this page or via the social links in the hero section. Feel free to connect on GitHub or LinkedIn!";
    }
    if (lowerInput.includes('about') || lowerInput.includes('background')) {
      return "This is a portfolio of a CS student at JUST, passionate about AI, machine learning, and open-source development. An active contributor to Oppia and experienced in building intelligent systems.";
    }
    if (lowerInput.includes('cv') || lowerInput.includes('resume')) {
      return "You can download the CV by clicking the 'Download CV' button in the hero section at the top of the page.";
    }

    return "That's interesting! I'm here to help you learn more about this portfolio. You can ask about projects, skills, experience, or how to get in touch. What would you like to know?";
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-black shadow-lg hover:shadow-cyan-400/50 transition-all flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[600px] max-h-[80vh] flex flex-col glass-strong rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-700 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <Bot size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-400">Omar's Portfolio Assistant</h3>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-black" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-lg px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-black'
                        : 'glass text-gray-200'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <User size={16} className="text-black" />
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-4 border-t border-gray-700 bg-black/30">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 glass rounded-lg bg-black/30 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
                <motion.button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-gradient-to-br from-cyan-400 to-blue-500 text-black rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

