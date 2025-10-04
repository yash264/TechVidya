import axios from "axios";

const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/models";
const GEMINI_MODEL = "gemini-2.5-flash"; 
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export async function fetchQuizQuestions(topic) {
    const prompt = `
            Generate 5 multiple-choice quiz questions on ${topic}. 
            Respond ONLY in JSON with this format:
                {
                    "questions": [
                        {
                            "question": "string",
                            "options": ["A", "B", "C", "D"],
                            "answer": "string"
                        }
                    ]
                }
            `;

    const url = `${GEMINI_BASE}/${GEMINI_MODEL}:generateContent`;

    try {
        const res = await axios.post(
            url,
            {
                contents: [
                    {
                        parts: [{ text: prompt }]
                    }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": GEMINI_API_KEY
                }
            }
        );

        let text = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

        text = text.replace(/```json/g, "").replace(/```/g, "").trim();

        return JSON.parse(text);
    } 
    catch(error){
        console.error(error);
        return null;
    }
}

export async function fetchFeedback(score, total) {
    const prompt = `
            Provide a motivational feedback message for a user who scored ${score} out of ${total}. 
            Keep it brief (2-3 line) and positive.
        `;

    const url = `${GEMINI_BASE}/${GEMINI_MODEL}:generateContent`;

    try {
        const res = await axios.post(
            url,
            {
                contents: [
                    {
                        parts: [{ text: prompt }]
                    }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": GEMINI_API_KEY
                }
            }
        );

        const text = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

        return text;
    } 
    catch(error){
        console.error(error);
        return "Good effort! Keep learning 🚀";
    }
}

