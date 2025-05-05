"use client";
import React, { useState, useRef, useEffect } from "react";
import fetch from "node-fetch";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaUserCircle, FaRobot, FaPaperPlane, FaPlus } from "react-icons/fa";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function TypingIndicator() {
  return (
    <div
      className="flex items-center gap-1 text-accent-foreground animate-pulse"
      aria-live="polite"
    >
      <span className="h-2 w-2 bg-accent rounded-full inline-block" />
      <span
        className="h-2 w-2 bg-accent rounded-full inline-block"
        style={{ animationDelay: "0.2s" }}
      />
      <span
        className="h-2 w-2 bg-accent rounded-full inline-block"
        style={{ animationDelay: "0.4s" }}
      />
      <span className="ml-2 text-sm">AI is thinking…</span>
    </div>
  );
}

export default function LLMChatDemoPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: input },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    const res = await fetch("/api/rag", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });
    const data = await res.json();
    setMessages([
      ...newMessages,
      { role: "assistant", content: data.content } as Message,
    ]);
    setLoading(false);
  }

  function handleNewChat() {
    setMessages([]);
    setInput("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 dark:from-background dark:via-background dark:to-background pt-24 pb-12">
      <main className="container mx-auto px-4 max-w-2xl">
        <Card className="mb-8 shadow-2xl rounded-3xl border-2 border-primary/20 bg-card/90">
          <CardHeader className="flex flex-col items-center gap-2 pb-2">
            <CardTitle className="font-heading text-3xl md:text-4xl text-gradient-brand font-bold text-center">
              <span className="inline-flex items-center gap-2">
                <FaRobot className="text-accent w-8 h-8" aria-hidden="true" />
                LLM Chat
              </span>
            </CardTitle>
            <div className="text-muted-foreground text-lg text-center max-w-xl mt-2">
              Ask anything about AI, coding, or creativity. This chat is powered
              by OpenAI and designed to be friendly, clear, and helpful.
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 rounded-full border-accent text-accent hover:bg-accent/10 transition"
              onClick={handleNewChat}
              aria-label="Start a new chat"
            >
              <FaPlus className="mr-2" /> New Chat
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-80 md:h-96 overflow-y-auto bg-gradient-to-b from-card/80 to-background/80 rounded-xl p-4 mb-4 flex flex-col gap-3 shadow-inner">
              {messages.length === 0 && !loading && (
                <div className="text-muted-foreground text-center mt-16 text-lg">
                  Start the conversation!
                </div>
              )}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-end gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                  aria-live="polite"
                >
                  {msg.role === "assistant" && (
                    <span className="rounded-full bg-accent/20 p-1 mr-1">
                      <FaRobot
                        className="text-accent w-6 h-6"
                        aria-label="AI"
                      />
                    </span>
                  )}
                  <span
                    className={`px-4 py-2 rounded-2xl shadow-md max-w-[75%] whitespace-pre-line text-base font-medium transition-all duration-200
                      ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white self-end animate-fade-in"
                          : "bg-accent/10 text-accent-foreground self-start animate-fade-in"
                      }
                    `}
                  >
                    {msg.content}
                  </span>
                  {msg.role === "user" && (
                    <span className="rounded-full bg-primary/20 p-1 ml-1">
                      <FaUserCircle
                        className="text-primary w-6 h-6"
                        aria-label="You"
                      />
                    </span>
                  )}
                </div>
              ))}
              {loading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
            <form
              onSubmit={handleSend}
              className="flex gap-2 mt-2"
              autoComplete="off"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-3 rounded-full border-2 border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/30 transition text-lg font-medium shadow-sm"
                required
                aria-label="Message"
                disabled={loading}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    handleSend(e);
                  }
                }}
              />
              <Button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-full px-5 py-3 text-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md hover:opacity-90 focus:ring-2 focus:ring-accent/40 transition flex items-center gap-2"
                aria-label="Send message"
              >
                <FaPaperPlane className="w-5 h-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
