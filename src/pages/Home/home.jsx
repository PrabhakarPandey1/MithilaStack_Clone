import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Technology from "../../Components/Technology";
import AboutSection from "../../Components/AboutSection";
import JourneySection from "../../Components/JourneySection";
import Service from "../../Components/Service";
import TrainingCard from "../../Components/Trainingcard";
import "aos/dist/aos.css";
import Community from "../../Components/Comunity";

function Home() {
  return (
    <div className="min-h-screen select-none bg-[#0c0e20]">
      <Hero />
      <Technology />
      <AboutSection />
      <JourneySection />
      <Service />
      <TrainingCard />
      <Community/>
    </div>
  );
}

export default Home;
