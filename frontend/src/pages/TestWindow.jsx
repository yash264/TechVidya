import React from 'react';
import { useState, useEffect } from "react";
import QuizScreen from '../Components/TestWindow/QuizScreen';
import Footer from '../Components/Footer';


function TestWindow() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // Fetch from localStorage when component mounts
        const storedQuestions = localStorage.getItem("quizQuestions");

        if (storedQuestions) {
            // Parse the string back into an array
            setQuestions(JSON.parse(storedQuestions));
        }
    }, []);

    return (
        <>
            <section>
                <div className="w-3/4 mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <QuizScreen
                        questions={questions}
                    />
                </div>
            </section>

            <Footer />
        </>
    );
}

export default TestWindow;