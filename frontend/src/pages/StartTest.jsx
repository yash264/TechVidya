import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import Header from '../Components/Header';
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

  const loadQuestions = async () => {
    try {
      localStorage.removeItem("techVidya");

      const response = await fetchQuizQuestions(category);

      const data = response;

      if(data?.questions && data.questions.length > 0){
        localStorage.setItem("techVidya", JSON.stringify(data.questions));
      } 
      else{
        console.warn("No questions returned from API");
      }
    } 
    catch(error){
      console.error(error);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <>
      <Header />

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