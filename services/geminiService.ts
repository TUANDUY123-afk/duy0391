
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY is not defined in environment variables");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateCompliment = async (): Promise<string> => {
  try {
    const prompt = `Hãy viết một lời khen thật ngọt ngào, độc đáo, ngắn gọn và lãng mạn bằng tiếng Việt dành cho người yêu nhân ngày 20/10. Chỉ trả về câu khen, không có lời dẫn. Ví dụ: "Nụ cười của em còn rạng rỡ hơn cả ngàn đóa hoa hồng."`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    const text = response.text.trim();
    // Remove potential markdown like quotes
    return text.replace(/^"|"$/g, '');
    
  } catch (error) {
    console.error("Error generating compliment from Gemini:", error);
    throw new Error("Failed to generate compliment.");
  }
};
