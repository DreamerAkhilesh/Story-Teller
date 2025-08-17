import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

function App() {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateStoryAndImages = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setStory("");
    setImages([]);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-preview-image-generation",
        contents: [
          {
            role: "user",
            parts: [
              { text: `Write a short story and illustrate it with atleast 6 related and animated images:
                        For each scene, generate a corresponding animated-style illustration that:
                        Clearly represents the specific moment in the story.
                        Uses a consistent art style, color palette, and character design across all six images.
                        Shows visual continuity, so the images relate to each other (e.g., same character, same environment, recurring objects).
                        Is engaging, whimsical, and slightly animated, like a high-quality cartoon or animated movie still.
                        Label each image with its story scene (e.g., Scene 1: Beginning, Scene 2: Discovery, Scene 3: Encounter, etc.) so that together, the images visually narrate the story as well as the text does.: ${prompt}` },
            ],
          },
        ],
        config: {
          responseModalities: ["TEXT", "IMAGE"],
        },
      });

      // Safely access candidates
      const candidates =
        response?.candidates || response?.response?.candidates || [];

      if (candidates.length === 0) {
        setStory("⚠️ No candidates returned. Try changing your prompt.");
        return;
      }

      const imgs = [];
      let text = "";

      candidates.forEach((c) => {
        c.content.parts.forEach((p) => {
          if (p.text) {
            text += p.text + "\n";
          }
          if (p.inlineData?.mimeType?.startsWith("image/")) {
            imgs.push(
              `data:${p.inlineData.mimeType};base64,${p.inlineData.data}`
            );
          }
        });
      });

      setStory(text.trim());
      setImages(imgs);
    } catch (err) {
      console.error("Error:", err);
      setStory("⚠️ Failed to generate content. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">AI Story & Image Generator</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your story prompt..."
        className="w-full max-w-lg p-3 border rounded-lg mb-4"
      />
      <button
        onClick={generateStoryAndImages}
        disabled={loading}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
      >
        {loading ? "Generating..." : "Generate Story & Images"}
      </button>

      {story && (
        <div className="max-w-2xl mt-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Generated Story</h2>
          <p className="text-gray-800 whitespace-pre-line">{story}</p>
        </div>
      )}

      {images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Generated ${i}`}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
