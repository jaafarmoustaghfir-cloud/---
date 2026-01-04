
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function askAssistant(question: string, lang: 'ar' | 'fr') {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are the official AI assistant for Club Chabab Houara (CC Houara), a Moroccan football club based in Ouled Teima, founded in 1964. 
        It plays in GNFA 1 (National Amateur 1). 
        Be professional, supportive, and use football terminology. 
        Answer in ${lang === 'ar' ? 'Arabic' : 'French'}. 
        Keep answers concise and informative for fans.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return lang === 'ar' ? "عذراً، حدث خطأ ما. حاول لاحقاً." : "Désolé, une erreur s'est produite.";
  }
}
