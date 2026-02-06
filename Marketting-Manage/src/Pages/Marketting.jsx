import { useState } from "react";
import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
  apiKey: "AIzaSyDMx5FhmrjLiABFR6Jqm_CcCLLQ-xPN8Mc",
});

const questions = [
  { key: "product", text: "What is your product called?" },
  { key: "description", text: "In one line, what does it do?" },
  { key: "audience", text: "Who is it for?" },
  { key: "goal", text: "What do you want right now? (users / validation / revenue)" },
];

export default function MarketingAdvisor() {

  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState({});      // Using Use State for Defining the elements 
  const [messages, setMessages] = useState([
    { role: "ai", text: questions[0].text },
  ]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);


  const sendMessage = async () => {

    if (!input) return;

    const key = questions[step].key;

    setMessages((m) => [...m, { role: "user", text: input }]);

    setAnswers((a) => ({ ...a, [key]: input }));

    setInput("");

    if (step + 1 < questions.length) {

      setTimeout(() => {

        setMessages((m) => [
          ...m,
          { role: "ai", text: questions[step + 1].text },
        ]);
        setStep(step + 1);
      }, 400);

    } else {
      generateTechnique({ ...answers, [key]: input });
    }
  };

  const generateTechnique = async (data) => {

    setLoading(true);

    const prompt = `
You are a practical marketing mentor for students and indie builders.

Based on the details below, suggest ONLY ONE marketing technique
that the user should apply right now.

Product: ${data.product}
Description: ${data.description}
Audience: ${data.audience}
Goal: ${data.goal}

Respond EXACTLY in this format:

Marketing Technique:
<technique name>

Why this works:
<2–3 simple lines>

How to apply (step-by-step):
1. Step one
2. Step two
3. Step three
4. Step four

Example:
<simple student-friendly example>
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    setResult(response.text);
    setLoading(false);
  };

  const parse = (text) => {
    if (!text) return {};
    const sections = text.split("\n\n");
    const data = {};
    sections.forEach((s) => {
      const [title, ...rest] = s.split("\n");
      data[title.replace(":", "").trim()] = rest.join("\n").trim();
    });
    return data;
  };

  const guide = parse(result);

  return (
    <>
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-white">

      {/* SIDEBAR */}
      <aside className="hidden md:flex w-64 bg-white border-r p-6 flex-col">
        <h2 className="text-xl font-bold text-blue-600 mb-6">
          MarketAdvisor
        </h2>

        <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
          + New Chat
        </button>

        <div className="text-sm text-gray-500 mt-6">
          Previous chats will appear here
        </div>
      </aside>

      {/* MAIN CHAT AREA */}
      <main className="flex-1 flex items-center justify-center px-4">

        <div className="w-full max-w-2xl">

          {/* CHAT */}
          {!result && (
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">
                AI Marketing Guide
              </h3>

              <div className="space-y-3 mb-4 max-h-80 overflow-y-auto">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`px-4 py-2 rounded-xl text-sm max-w-[75%] ${
                      m.role === "ai"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-blue-600 text-white ml-auto"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your answer..."
                  className="flex-1 border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={sendMessage}
                  className="px-5 py-3 bg-blue-600 text-white rounded-lg font-medium"
                >
                  Send
                </button>
              </div>

              {loading && (
                <p className="mt-4 text-sm text-gray-500 text-center">
                  Thinking of the best marketing move…
                </p>
              )}
            </div>
          )}

          {/* RESULT */}
          {result && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Recommended Marketing Technique
              </h3>

              <div className="space-y-5 text-[15px] text-gray-700 leading-relaxed">
                <div>
                  <strong>Technique</strong>
                  <p>{guide["Marketing Technique"]}</p>
                </div>

                <div>
                  <strong>Why this works</strong>
                  <p>{guide["Why this works"]}</p>
                </div>

                <div>
                  <strong>How to apply</strong>
                  <pre className="whitespace-pre-wrap font-sans">
                    {guide["How to apply (step-by-step)"]}
                  </pre>
                </div>

                <div>
                  <strong>Example</strong>
                  <p>{guide["Example"]}</p>
                </div>
              </div>
            </div>
          )}
 
        </div>
      </main>
      </div>
    </>
  );
}
