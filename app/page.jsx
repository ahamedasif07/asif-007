import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Particles from "@/components/Particles";
import LiquidEther from "@/components/LiquidEther";
import SocialMedia from "@/components/SocailMedia";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute right-[60px] md:right-[115px] top-[100px] md:top-[280px]">
        <SocialMedia />
      </div>
      <div className="fixed inset-0 z-[-2] pointer-events-none">
        <LiquidEther
          colors={["#52409C", "#136AA0", "#290B8E"]}
          mouseForce={21}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#136AA0"
          color1="#136AA0"
          color2="#290B8E"
        />
      </div>

      {/* ২. Foreground Content */}
      <div className="relative z-10 w-full">
        <NavBar />

        {/* Hero Section: Particles শুধু এই সেকশনের ব্যাকগ্রাউন্ডে থাকবে */}
        <section className="relative w-full min-h-screen">
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

        {/* ৩. পরবর্তী সেকশনসমূহ: এগুলোতে আর Particles দেখা যাবে না */}
        <section className="h-screen flex items-center justify-center bg-transparent">
          <h2 className="text-white text-4xl font-bold">
            Next Section Content
          </h2>
        </section>

        <section className="h-screen flex items-center justify-center bg-transparent">
          <h2 className="text-white text-4xl font-bold">Another Section</h2>
        </section>
      </div>
    </div>
  );
};

export default Home;
