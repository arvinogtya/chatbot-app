import { GoogleGenerativeAI } from '@google/generative-ai'
const GEMINI_API = import.meta.env.VITE_GEMINI

const ai = new GoogleGenerativeAI({ apiKey: GEMINI_API })

export const requestGemini = async (contents) => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents,
  })
  return response.text
}
