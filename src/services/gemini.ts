import { GoogleGenAI, ThinkingLevel, Type } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY!;

export const getGeminiPro = () => {
  const ai = new GoogleGenAI({ apiKey });
  return ai;
};

export const findHelpWithMaps = async (location: string) => {
  const ai = getGeminiPro();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Find mental health support services, psychologists, or MHPSS centers near ${location} in Ukraine. Provide a list of reachable places with their names and descriptions.`,
    config: {
      tools: [{ googleMaps: {} }],
    },
  });

  return {
    text: response.text,
    grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks,
  };
};

export const analyzeDashboardData = async (data: any, lang: 'en' | 'uk') => {
  const ai = getGeminiPro();
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: `Analyze the following MHPSS data for Ukraine and provide strategic insights for donors. Language: ${lang}. Data: ${JSON.stringify(data)}`,
    config: {
      thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
      systemInstruction: "You are a senior humanitarian strategist specializing in MHPSS in conflict zones. Provide deep, actionable insights based on the data provided.",
    },
  });

  return response.text;
};
