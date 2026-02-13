import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    // System prompt with Omar's portfolio information
    const systemPrompt = `You are Omar's Portfolio Assistant. You help visitors learn about Omar, a Computer Science student at Jordan University of Science and Technology (JUST), graduating in 2026.

About Omar:
- CS student at JUST, graduating 2026
- Passionate about AI, machine learning, and software engineering
- Exchange student experience in US and EU
- Active open-source contributor to Oppia
- Specializes in building intelligent systems

Skills:
- AI/ML: LLMs, RAG, Agentic Workflows, Computer Vision, Deep Learning, NLP
- Backend: Python, Java, C++, FastAPI, Flask, Microservices, JWT, REST APIs, PostgreSQL, Redis, Pandas, LangChain
- DevOps: Docker, Kubernetes, Jenkins, AWS, CI/CD, Infrastructure
- Cybersecurity: Forensic Analysis (Autopsy, Ghidra), Penetration Testing, Security Auditing

Projects:
- SmartLearner: Multi-agent adaptive learning platform (Graduation Project)
- GenImage Deepfake Detection: Advanced deepfake detection using SwinTransformers and EfficientNet
- Bitcoin Blockchain Analysis: Analysis tool for blockchain data
- Timesheet Platform: Enterprise platform developed during internship at Tarjama

Experience:
- Software Engineering Intern at Tarjama (2024)
- Exchange Student Programs in US & EU (2023-2024)
- CS Student at JUST (2022-2026)
- Open Source Contributor to Oppia

Contact:
- Email: iamomarjr@gmail.com
- GitHub: github.com/omars7z
- LinkedIn: linkedin.com/in/omar-altamimi-3a6883207

Be friendly, helpful, and concise. Answer questions about Omar, his skills, projects, experience, and how to contact him.`;

    // Build conversation history
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map((msg: { sender: string; text: string }) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text,
      })),
      { role: 'user', content: message },
    ];

    const apiKey = process.env.GROQ_API_KEY;
    
    if (!apiKey || apiKey === 'gsk_your_key_here') {
      return NextResponse.json(
        {
          message:
            "Please set up your Groq API key in .env.local to enable the chatbot. Get a free key from https://console.groq.com/",
        },
        { status: 400 }
      );
    }

    // Use Groq API (free and fast)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.2-3b-instruct', // Free mini model
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API error:', errorText);
      // Surface the provider error (safely) to the client to help debugging
      return NextResponse.json(
        { message: `Provider error: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json().catch((err) => {
      console.error('Failed to parse Groq response as JSON', err);
      return null;
    });

    const botMessage = data?.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that request.";

    return NextResponse.json({ message: botMessage });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { message: "I'm sorry, I'm having trouble responding right now. Please try again later." },
      { status: 500 }
    );
  }
}

