import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ message: 'API key is missing.' });
  }

  const { prompt } = req.body;

  if (!prompt || prompt.trim() === '') {
    return res.status(400).json({ message: 'Prompt is required.' });
  }

  try {
    // Initialize the Generative AI client
    const genAI = new GoogleGenerativeAI(apiKey);

    // Use the Gemini model (e.g., "gemini-1.5-flash")
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate content based on the user's prompt
    const result = await model.generateContent(prompt);

    // Return the generated text
    return res.status(200).json({ response: result.response.text() });
  } catch (error) {
    console.error('Error generating content:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
