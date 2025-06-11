import BackgroundGradientAnimation from "./BackgroundGradientAnimation";
import Hero from "./Hero";
import Features from "./Features";
import Typewriter from "./Typewriter";
import BlogPosts from "./BlogPosts";
import TextRevealCard from "@/components/TextReveal";
import Languages from "./Languages";
import { LanguagesComingSoon } from "./Languages/Icons";
import Pricing from "./Pricing";

export default () => (
  <BackgroundGradientAnimation className="flex flex-col items-center justify-center gap-32 text-center text-chuva-white">
    <div className="flex flex-col items-center w-screen max-w-6xl gap-40 px-8 overflow-hidden border-2 home-page border-chuva-green sm:border-chuva-yellow md:border-chuva-orange lg:border-chuva-red">
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen hero">
        <Hero />
      </div>

      {/* Typewriter section */}
      <div className="mb-40 -mt-20 home-section">
        <Typewriter />
      </div>

      {/* Features Section */}
      <div id="features" className="home-section">
        <Features />
      </div>

      {/* Supported Languages Section */}
      <div className="home-section">
        <Languages />
      </div>

      {/* Less is Magic Section */}
      <div className="items-center justify-center hidden w-full sm:flex ">
        <TextRevealCard
          text="LESS IS MAGIC"
          hiddenText="LESS IS MORE"
          className="w-full -my-20 min-h-150"
        />
      </div>

      {/* Languages Coming Soon Section */}
      <div className="home-section">
        <LanguagesComingSoon />
      </div>

      {/* Blog Posts Section */}
      <div className="home-section">
        <BlogPosts />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="home-section ">
        <Pricing />
      </div>
    </div>
  </BackgroundGradientAnimation>
);
