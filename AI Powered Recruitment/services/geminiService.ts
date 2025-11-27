import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found. AI features will use mock responses.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateJobDescription = async (title: string, company: string, keywords: string): Promise<string> => {
  const ai = getAIClient();
  
  // Mock response if no key
  if (!ai) {
    return new Promise(resolve => setTimeout(() => resolve(`(Mock AI Output)
    
Job Title: ${title} at ${company}

About Us:
We are a leading innovator in our field...

Responsibilities:
- Work with cross-functional teams.
- Utilize skills like ${keywords}.

Requirements:
- Bachelor's degree or equivalent.
- Passion for excellence.
    `), 1000));
  }

  try {
    const prompt = `Write a professional job description for a "${title}" position at "${company}". 
    Include the following key requirements/skills: ${keywords}. 
    Structure it with "About the Role", "Responsibilities", and "Requirements". 
    Keep it engaging and professional.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Failed to generate content.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating description. Please try again.";
  }
};

export const analyzeCandidateFit = async (jobDescription: string, candidateSkills: string): Promise<string> => {
  const ai = getAIClient();

  if (!ai) {
    return new Promise(resolve => setTimeout(() => resolve(`(Mock AI Analysis) 
    Based on the job description, you seem like a great fit! Your skills match about 85% of the requirements. 
    You should highlight your experience with specific tools mentioned.`), 1000));
  }

  try {
    const prompt = `Acting as a career coach, analyze the fit between a candidate with these skills: "${candidateSkills}" 
    and this job description: "${jobDescription.substring(0, 500)}...".
    Provide a brief score (0-100%) and 3 bullet points on what to emphasize in the cover letter.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not analyze fit.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error analyzing fit.";
  }
};
