import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import DarkVeil from "./DarkVeil";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className={`relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#020817] via-[#0f172a] to-[#06b6d4]/20 transition-opacity duration-500 ${scrolled ? 'opacity-90' : 'opacity-100'}`}
    >
      {/* Background DarkVeil */}
      <div className="absolute inset-0 z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Subtle Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-6 text-white z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit backdrop-blur-md animate-fade-down">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium tracking-wider text-cyan-200 uppercase">ZORIX - Next-Gen Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-[1.1] animate-fade-up">
            Taking Your Business To{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 [text-shadow:0_0_30px_rgba(34,211,238,0.3)]">
              New Heights!
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            Our digital marketing strategies are out of this world. We build precision-crafted funnels, stunning experiences, and scalable growth systems.
          </p>
          
          <div className="flex items-center gap-4 mt-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <a 
              href="tel:7483147208"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] cursor-pointer"
            >
              {/* Shimmer effect simulation via skew and translate */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out" />
              <PhoneCall size={20} className="group-hover:animate-pulse" />
              <span>Contact Us Now</span>
            </a>
          </div>
        </div>

        {/* Right: Animated Visual (Astronaut image) */}
        <div className="relative w-full aspect-square md:aspect-auto md:min-h-[600px] flex items-center justify-center pointer-events-auto group">
          {/* Glowing Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-glow transition-all duration-700 group-hover:bg-cyan-500/20 group-hover:scale-110" />
          
          {/* Astronaut Image */}
          <div 
            className="relative z-10 w-full max-w-[500px] animate-float transition-transform duration-700 group-hover:scale-105"
            style={{ animationDuration: '20s' }}
          >
            <img 
              src="/astronaut.png" 
              alt="Astronaut using laptop" 
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.6)] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
