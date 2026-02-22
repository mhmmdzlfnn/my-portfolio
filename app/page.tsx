import React from "react";
import { Shield, Terminal, Mail, Linkedin, Github, Cpu, Activity, Zap, Trophy, ShieldCheck, User} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-blue-100 font-mono relative overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        
        {/* HEADER SECTION */}
        <header className="flex flex-col items-center mb-20">
          
          {/* LOGO */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-slate-900 border-2 border-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <Shield className="w-12 h-12 text-blue-400" />
            </div>
          </div>

          {/* TITLE */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-[0.2em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
              Profile.Log
            </h1>

            {/* STATUS BAR */}
            <div className="flex items-center justify-center gap-2 text-blue-400 mb-6 bg-blue-900/20 px-4 py-1 rounded-full border border-blue-800/50">
              <Activity size={14} className="animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold">
                Identity Scan: Complete
              </span>
            </div>

            {/* PROFILE INFO */}
            <div className="bg-slate-900/40 border border-blue-500/30 rounded-xl px-6 py-4 shadow-lg backdrop-blur-md">
              
              <p className="text-blue-400 text-xs tracking-widest mb-3">
                &gt; USER IDENTIFIED
              </p>

              <div className="flex items-center gap-4 justify-center">
                
                {/* AVATAR */}
                <div className="w-14 h-14 rounded-full border border-blue-500/50 
                                bg-slate-800 flex items-center justify-center
                                shadow-[0_0_12px_rgba(59,130,246,0.6)]">

                  <User className="w-6 h-6 text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]" />

                </div>

                {/* TEXT */}
                <div className="text-left">
                  <p className="text-white font-semibold text-sm md:text-base">
                    Muhammad Zulfan Aulia
                  </p>

                  <p className="text-slate-400 text-xs md:text-sm tracking-wide uppercase">
                    Blue Team / SOC Analyst
                  </p>
                </div>

              </div>
            </div>
          </div>

        </header>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* SKILLS CARD */}
          <section className="group">
            <div className="bg-slate-900/40 backdrop-blur-md border border-blue-900/50 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              
              <div className="bg-blue-900/30 px-4 py-2 border-b border-blue-900/50 flex items-center gap-2">
                <Terminal size={16} className="text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Skills
                </span>
              </div>

              <div className="p-10 text-center flex flex-col items-center justify-center min-h-[160px]">
                <Cpu className="w-8 h-8 text-blue-500/30 mb-2 group-hover:rotate-45 transition-transform" />
                <p className="text-blue-500/60 font-bold italic animate-pulse tracking-widest uppercase text-xs">
                  &gt; ON GOING...
                </p>
              </div>

            </div>
          </section>

          {/* ACHIEVEMENTS CARD */}
          <section className="group">
            <div className="bg-slate-900/40 backdrop-blur-md border border-blue-900/50 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              
              <div className="bg-blue-900/30 px-4 py-2 border-b border-blue-900/50 flex items-center gap-2">
                <Trophy size={16} className="text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Achievements
                </span>
              </div>

              <div className="p-10 text-center flex flex-col items-center justify-center min-h-[160px]">
                <Zap className="w-8 h-8 text-blue-500/30 mb-2 group-hover:scale-125 transition-transform" />
                <p className="text-blue-500/60 font-bold italic animate-pulse tracking-widest uppercase text-xs">
                  &gt; ON GOING...
                </p>
              </div>

            </div>
          </section>

          {/* PROJECTS CARD */}
          <section className="md:col-span-2 group">
            <div className="bg-slate-900/40 backdrop-blur-md border border-blue-900/50 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              
              <div className="bg-blue-900/30 px-4 py-2 border-b border-blue-900/50 flex items-center gap-2">
                <ShieldCheck size={16} className="text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Projects
                </span>
              </div>

              <div className="p-12 text-center">
                <div className="w-full max-w-xs mx-auto h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-blue-500 w-1/3 animate-pulse"></div>
                </div>
                <p className="text-blue-500/60 font-bold italic animate-pulse tracking-[0.3em] uppercase text-xs">
                  ON GOING
                </p>
              </div>

            </div>
          </section>

        </div>

        {/* FOOTER */}
        <footer className="mt-24 flex flex-col items-center">
          
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-900 to-transparent mb-8"></div>

          <div className="flex gap-8 mb-8">
            <a href="#" className="p-3 bg-blue-900/20 rounded-full border border-blue-800 hover:border-blue-400 hover:text-blue-400 transition-all hover:-translate-y-1">
              <Github />
            </a>
            <a href="#" className="p-3 bg-blue-900/20 rounded-full border border-blue-800 hover:border-blue-400 hover:text-blue-400 transition-all hover:-translate-y-1">
              <Linkedin />
            </a>
            <a href="#" className="p-3 bg-blue-900/20 rounded-full border border-blue-800 hover:border-blue-400 hover:text-blue-400 transition-all hover:-translate-y-1">
              <Mail />
            </a>
          </div>

          <p className="text-slate-600 text-[10px] uppercase tracking-[0.4em] font-bold">
            &copy; {new Date().getFullYear()} Zulfan Aulia // Blue Team Portfolio
          </p>

        </footer>
      </div>

      {/* SCANLINE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

    </main>
  );
}