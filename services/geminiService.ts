
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userPrompt: string) => {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please ensure process.env.API_KEY is configured.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "Bạn là trợ lý ảo hỗ trợ học tập trên blog của Đào Văn Thắng - Kỹ sư Lập trình mạng & Bảo mật. Bạn là chuyên gia về hạ tầng mạng, TCP/IP, OSI, Socket programming, bảo mật và SDN. Hãy trả lời các câu hỏi của người dùng một cách chuyên nghiệp, chính xác và cung cấp các ví dụ kỹ thuật cụ thể. Trả lời bằng tiếng Việt.",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xin lỗi, tôi đang gặp chút sự cố kỹ thuật. Vui lòng thử lại sau!";
  }
};
