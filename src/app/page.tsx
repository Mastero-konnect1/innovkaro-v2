"use client"
import FAQS from "@/components/shared/FAQS";
import Footer from "@/components/shared/Footer";
import ExploreByColleges from "@/components/shared/ExploreByColleges";
import ExploreDomains from "@/components/shared/ExploreDomains";
import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar"; 
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import FounderNetwork from "@/components/shared/FounderNetwork";

const Home = () => {
  return (
    <main className="relative min-h-screen w-full bg-white">
      <div className="fixed inset-0 w-full h-full -z-50 bg-white">
        <div className="absolute inset-0 w-full h-full bg-linear-to-b from-blue-50/50 via-purple-50/30 to-white" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl opacity-70" />
      </div>

      {/* SECTION 1: NAVBAR + HERO */}
      <div className="h-screen flex flex-col relative z-10">
        <div className="flex-none">
          <Navbar />
        </div>
        <div className="flex-1 relative overflow-hidden">
          <HeroSection/>
        </div>
      </div>

      {/* SECTION 2: SCROLLABLE CONTENT */}
      <div className="relative z-10 flex flex-col gap-10"> 
        <ExploreDomains/>
        <ExploreByColleges/>
        <FounderNetwork/>
        <WhyChooseUs/>
        <FAQS />
      </div>

      {/* SECTION 3: FOOTER */}
      <div className="relative z-10 mt-10"> 
        <Footer />
      </div>

    </main>
  );
};

export default Home;