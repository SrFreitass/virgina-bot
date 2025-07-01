import { GoogleGenAI } from "@google/genai";
import { promptVirginia } from "./prompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

const request = async (prompt: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      systemInstruction: promptVirginia,
      temperature: 1,
    }
  });

  return response.text;
};

export { request };
