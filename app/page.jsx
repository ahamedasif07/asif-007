import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Particles from "@/components/Particles";

import SocialMedia from "@/components/SocailMedia";
import StatsSection from "@/components/StateSection";
import About from "@/components/About";
import Projects from "@/components/Proiject";
import SkillsSection from "@/components/SkillsSection";
import Contact from "@/components/Contact";
import TestimonialSlider from "@/components/Testimonials";
import FAQSection from "@/components/Faq";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCarsor";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute right-[60px] md:right-[115px] top-[100px] md:top-[280px]">
        <SocialMedia />
      </div>

      <div className="fixed inset-0 z-[-2] pointer-events-none">
        <CustomCursor />
      </div>

      <div className="relative z-10 w-full">
        <NavBar />

        {/* Hero Section */}
        <section id="hero" className="relative w-full h-[900px]">
          <div className="absolute inset-0 z-[-1] pointer-events-none">
            <Particles
              particleColors={["#155DFC"]}
              particleCount={500}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover
              alphaParticles={false}
              disableRotation={false}
              pixelRatio={1}
            />
          </div>
          <Hero />
        </section>

        {/* অন্যান্য সেকশনগুলোতে ID যোগ করা হয়েছে */}
        <StatsSection />

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <section id="feedback">
          <TestimonialSlider />
        </section>
        <section id="faq">
          <FAQSection />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
