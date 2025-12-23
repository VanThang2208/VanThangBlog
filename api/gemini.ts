import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body || {};
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  const KEY = process.env.apikey || process.env.GEMINI_API_KEY || process.env.API_KEY || '';
  if (!KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction:
          "Bạn là trợ lý ảo hỗ trợ học tập trên blog của Đào Văn Thắng - Kỹ sư Lập trình mạng & Bảo mật. Bạn là chuyên gia về hạ tầng mạng, TCP/IP, OSI, Socket programming, bảo mật và SDN. Hãy trả lời các câu hỏi của người dùng một cách chuyên nghiệp, chính xác và cung cấp các ví dụ kỹ thuật cụ thể. Trả lời bằng tiếng Việt.",
        temperature: 0.7,
      },
    });

    return res.status(200).json({ text: response.text });
  } catch (error) {
    console.error('Gemini proxy error:', error);
    return res.status(500).json({ error: 'Gemini API error' });
  }
}
