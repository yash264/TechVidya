import { Code, Pencil, Megaphone, Target, MapPin } from 'lucide-react';

import Science from "../Assets/science.jpg";
import Health from "../Assets/health.jpg";
import Logic from "../Assets/logic.jpg";
import Entertainment from "../Assets/entertainment.jpg";
import Environment from "../Assets/environment.jpg";
import Sports from "../Assets/sports.jpg";

export const CategoryData = [
    {
        title: "Science & Technology",
        path: "science_and_technology",
        image: Science,
        icon: Code,
        description: "Tech Trends, Space & Astronomy",
        category: "Technology"
    },
    {
        title: "Health & Wellness",
        path: "health_and_wellness",
        image: Health,
        icon: Target,
        description: "Mental Health, Fitness & Nutrition",
        category: "Health"
    },
    {
        title: "Geography & Environment",
        path: "geography_and_environment",
        image: Environment,
        icon: MapPin,
        description: "Natural Wonders, Climate & Sustainability",
        category: "Environment"
    },
    {
        title: "Entertainment & Media",
        path: "entertainment_and_media",
        image: Entertainment,
        icon: Target,
        description: "Music, Movies & Celebrities",
        category: "Entertainment"
    },
    {
        title: "Logic & Brain Teasers",
        path: "logic_and_brain_teasers",
        image: Logic,
        icon: Pencil,
        description: "Critical Thinking, Puzzles & Riddles",
        category: "Teasers"
    },
    {
        title: "Sports & Games",
        path: "sports_and_games",
        image: Sports,
        icon: Megaphone,
        description: "Cricket, Football & Olympics",
        category: "Sports"
    }
];