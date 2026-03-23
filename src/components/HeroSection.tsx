import { useEffect, useState } from "react";
import { PhoneCall, TrendingUp, Users, Target, BarChart3 } from "lucide-react";

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
      {/* Background Star Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-0 animate-star-movement"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 8 + "s",
              animationDuration: Math.random() * 10 + 10 + "s",
            }}
          />
        ))}
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
          
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] animate-fade-up">
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

        {/* Right: Animated Visual (Professional Dashboard) */}
        <div className="relative w-full aspect-square md:aspect-auto md:min-h-[600px] flex items-center justify-center pointer-events-auto group">
          {/* Glowing Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-glow transition-all duration-700 group-hover:bg-cyan-500/20 group-hover:scale-110" />
          
          {/* Main Glassmorphic Dashboard */}
          <div className="relative z-10 w-full max-w-[480px] animate-float transition-transform duration-700 group-hover:scale-105">
            <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-white font-medium text-lg">Revenue Growth</h3>
                  <p className="text-sm text-cyan-400 font-medium">+124.5% this quarter</p>
                </div>
                <div className="bg-cyan-500/20 text-cyan-400 p-3 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <TrendingUp size={28} />
                </div>
              </div>
              
              {/* Simulated Bar Chart */}
              <div className="flex items-end justify-between h-48 gap-3 mb-2">
                {[40, 30, 60, 50, 85, 75, 110].map((height, i) => (
                  <div key={i} className="w-full bg-slate-800/50 rounded-t-md relative group/bar overflow-hidden">
                    <div 
                      className="absolute bottom-0 w-full bg-gradient-to-t from-cyan-600 to-cyan-300 rounded-t-md transition-all duration-500 group-hover/bar:bg-gradient-to-t group-hover/bar:from-blue-500 group-hover/bar:to-cyan-200 group-hover/bar:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                      style={{ height: `${height}%`, animation: `fade-up 1s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* Floating Metric Card 1: Conversion */}
          <div className="absolute top-[15%] right-[0%] md:-right-8 z-20 animate-float-delayed bg-slate-900/60 p-4 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl transition-transform hover:scale-110">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-500/20 p-3 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <Target className="text-emerald-400" size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Conversion</p>
                <p className="text-xl font-bold text-white">4.8%</p>
              </div>
            </div>
          </div>

          {/* Floating Metric Card 2: Active Users */}
          <div className="absolute bottom-[15%] left-[0%] md:-left-8 z-20 animate-float bg-slate-900/60 p-4 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl transition-transform hover:scale-110" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/20 p-3 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Users className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Active Users</p>
                <p className="text-xl font-bold text-white">12.4k</p>
              </div>
            </div>
          </div>

          {/* Floating Metric Card 3: Campaigns */}
          <div className="absolute top-[10%] left-[5%] md:top-8 md:left-8 z-20 animate-float-delayed bg-slate-900/60 p-3 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl transition-transform hover:scale-110" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <BarChart3 className="text-purple-400" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Campaigns</p>
                <p className="text-sm font-bold text-white">18 Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
