import axios from "axios";

const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/models";
const GEMINI_MODEL = "gemini-2.5-flash"; // or whichever model you choose

// AIzaSyAJi_XgE_ZEtFNCdipEh5-CPxQTA0YUvHw

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
                    "x-goog-api-key": process.env.REACT_APP_GEMINI_API_KEY || "AIzaSyAJi_XgE_ZEtFNCdipEh5-CPxQTA0YUvHw"
                }
            }
        );

        // Extract text safely
        let text = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

        // ✅ Remove markdown fences if present
        text = text.replace(/```json/g, "").replace(/```/g, "").trim();

        return JSON.parse(text);
    } catch (err) {
        console.error("Gemini Error:", err);
        return null;
    }
}


export async function fetchFeedback(score, total) {
    const prompt = `
            Provide a motivational feedback message for a user who scored ${score} out of ${total}. 
            Keep it short and positive.
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
                    "x-goog-api-key": process.env.REACT_APP_GEMINI_API_KEY || ""
                }
            }
        );

        const text = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        return text;
    } catch (err) {
        console.error("Gemini Feedback Error:", err);
        return "Good effort! Keep learning 🚀";
    }
}

