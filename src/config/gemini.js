import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize with your API key (store this securely in production)
const ai = new GoogleGenerativeAI(apiKey);

async function generateContent({ model, prompt }) {
  try {
    // Get the model instance
    const generativeModel = ai.getGenerativeModel({ model });
    
    // Generate content
    const result = await generativeModel.generateContent(prompt);
    return result.response.text();
    
  } catch (error) {
    console.error("Generation error:", error);
    throw new Error(`AI service error: ${error.message}`);
  }
}

// Example usage (same style as your example)
async function main(prompt) {
  const response = await generateContent({
    model: "gemini-1.5-flash",  // or "gemini-1.5-flash" if available
    prompt: prompt
  });
  console.log(response);
  return response;
}

export default main;