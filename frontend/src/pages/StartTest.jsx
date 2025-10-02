import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import QuizCard from '../Components/StartTest/QuizCard';
import Instructions from '../Components/StartTest/Instructions';
import { fetchQuizQuestions } from "../ExternalAPI/AiService";
import Footer from '../Components/Footer';

function StartTest() {

  const [searchParams] = useSearchParams();
  const path = searchParams.get("path");

  const categoryMap = {
    science_and_technology: "Science & Technology",
    health_and_wellness: "Health & Wellness",
    logic_and_brain_teasers: "Logic & Brain Teasers",
    entertainment_and_media: "Entertainment & Media",
    geography_and_environment: "Geography & Environment",
    sports_and_games: "Sports & Games",
  };

  const category = categoryMap[path];

  const loadQuestions = async (category) => {
    try {
      // Fetch questions from API
      const response = await fetchQuizQuestions(category);

      // Assuming response is already JSON. If not, use: const data = await response.json();
      const data = response;

      // Store in localStorage as string
      localStorage.setItem('quizQuestions', JSON.stringify(data?.questions || []));

      console.log("Questions stored in localStorage");
    }
    catch (error) {
      console.error('Failed to load questions:', error);
    }
  };

  useEffect(()=>{
    loadQuestions();
  },[]);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <QuizCard />
            </div>

            <div>
              <Instructions />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default StartTest;