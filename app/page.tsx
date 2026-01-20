import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Particles from "@/components/Particles";

const Home = () => {
  return (
    // মেইন কন্টেইনার (Relative)
    <div className="relative w-full">
      {/* Background Particles Container */}
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

      {/* Foreground Content */}
      <div className="relative z-10">
        <NavBar />
        <Hero />
      </div>

      {/* Hero এর পরের সেকশন এখানে শুরু হবে */}
      <div className="bg-white"></div>
    </div>
  );
};

export default Home;
