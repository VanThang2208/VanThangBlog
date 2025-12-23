
export const getGeminiResponse = async (userPrompt: string) => {
  const resp = await fetch('/api/gemini', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: userPrompt }),
  });

  if (!resp.ok) {
    try {
      const err = await resp.json();
      console.error('Proxy error:', err);
    } catch (e) {
      console.error('Proxy error, non-json response');
    }
    throw new Error('Gemini proxy error');
  }

  const data = await resp.json();
  return data.text || 'Xin lỗi, tôi đang gặp chút sự cố kỹ thuật. Vui lòng thử lại sau!';
};
