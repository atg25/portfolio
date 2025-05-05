import { NextResponse } from "next/server";

// Simple in-memory document store for demo
const documents = [
  {
    id: 1,
    content:
      "The RAG (Retrieval-Augmented Generation) approach combines LLMs with external knowledge sources for more accurate answers.",
  },
  {
    id: 2,
    content:
      "Vector databases like Pinecone or FAISS are commonly used for fast document retrieval in RAG systems.",
  },
  {
    id: 3,
    content:
      "Prompt engineering is key to integrating retrieved context with LLMs for relevant, grounded responses.",
  },
];

export async function POST(req: Request) {
  const { messages } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API key not set." },
      { status: 500 }
    );
  }

  // Format messages for OpenAI API
  const openAIMessages = messages.map(
    (msg: { role: "user" | "assistant"; content: string }) => ({
      role: msg.role,
      content: msg.content,
    })
  );

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: openAIMessages,
        temperature: 0.7,
        max_tokens: 512,
      }),
    });
    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.error?.message || "OpenAI API error." },
        { status: 500 }
      );
    }
    const data = await response.json();
    const aiMessage =
      data.choices?.[0]?.message?.content || "(No response from LLM)";
    return NextResponse.json({ role: "assistant", content: aiMessage });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Unknown error." },
      { status: 500 }
    );
  }
}
