"use client"
import { useEffect, useState } from "react"
import { AnimatedText } from "./animated-text"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let rafId: number
    let currentProgress = 0

    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 400
      const targetProgress = Math.min(scrollY / maxScroll, 1)

      const smoothUpdate = () => {
        currentProgress += (targetProgress - currentProgress) * 0.1

        if (Math.abs(targetProgress - currentProgress) > 0.001) {
          setScrollProgress(currentProgress)
          rafId = requestAnimationFrame(smoothUpdate)
        } else {
          setScrollProgress(targetProgress)
        }
      }

      cancelAnimationFrame(rafId)
      smoothUpdate()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const easeOutQuad = (t: number) => t * (2 - t)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const scale = 1 - easeOutQuad(scrollProgress) * 0.15
  const borderRadius = easeOutCubic(scrollProgress) * 48
  const heightVh = 100 - easeOutQuad(scrollProgress) * 37.5

  return (
    <section className="pt-32 pb-12 px-6 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 top-0">
        <div
          className="w-full will-change-transform overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
            height: `${heightVh}vh`,
          }}
        >
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/af7687fd-f2ad-4f2a-96f0-b56fa7d3769c-08wERpo5U1sktxs1vcRsJW9ueslNZv.mp4" />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-[5] flex items-end justify-center"
        style={{
          transform: `translateY(${scrollProgress * 150}px)`,
          opacity: 1 - scrollProgress * 0.8,
          height: "100%",
        }}
      >
        <span
          className="block text-white font-bold text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] tracking-tighter select-none text-center leading-none"
          style={{ marginBottom: "0" }}
        >
          AUTOPILOT
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <div
            className={`transition-all duration-1000 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <h1 className="font-serif text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem] font-normal leading-tight mb-6 w-full px-4 max-w-6xl mx-auto text-balance">
              <AnimatedText text="Your clinic on autopilot" delay={0.3} />
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="relative">
            <div
              className={`relative w-[234px] md:w-[281px] lg:w-[351px] will-change-transform transition-all duration-[1500ms] ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
              }`}
            >
              {/* Inline iPhone Frame + Intake Form - no external assets */}
              <div className="relative z-10">
                {/* iPhone Frame SVG */}
                <svg viewBox="0 0 375 812" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer frame */}
                  <rect x="2" y="2" width="371" height="808" rx="55" stroke="#1F2937" strokeWidth="4" fill="#1F2937" />
                  {/* Screen area */}
                  <rect x="12" y="12" width="351" height="788" rx="45" fill="#F4F7F6" />
                  {/* Dynamic Island */}
                  <rect x="115" y="22" width="145" height="34" rx="17" fill="#1F2937" />
                  {/* Side buttons */}
                  <rect x="-2" y="180" width="4" height="35" rx="2" fill="#374151" />
                  <rect x="-2" y="250" width="4" height="65" rx="2" fill="#374151" />
                  <rect x="-2" y="330" width="4" height="65" rx="2" fill="#374151" />
                  <rect x="373" y="280" width="4" height="90" rx="2" fill="#374151" />
                </svg>
                
                {/* Screen Content - Intake Form */}
                <div className="absolute top-[8%] left-[5%] right-[5%] bottom-[4%] rounded-[36px] overflow-hidden bg-[#F4F7F6] p-4 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 pt-6">
                    <h4 className="text-[10px] md:text-xs font-semibold text-slate-800">New Patient Intake</h4>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                      <span className="text-[8px] md:text-[10px] text-teal-600 font-medium">Secure</span>
                    </div>
                  </div>
                  
                  {/* Form Fields */}
                  <div className="flex-1 flex flex-col gap-2 md:gap-3">
                    <div>
                      <label className="text-[8px] md:text-[9px] text-slate-500 mb-0.5 block">Patient Name</label>
                      <div className="bg-white rounded-md border border-slate-200 px-2 py-1.5 text-[9px] md:text-[10px] text-slate-700">Sarah Mitchell</div>
                    </div>
                    <div>
                      <label className="text-[8px] md:text-[9px] text-slate-500 mb-0.5 block">Referral Source</label>
                      <div className="bg-white rounded-md border border-slate-200 px-2 py-1.5 text-[9px] md:text-[10px] text-slate-700">Dr. James Okafor</div>
                    </div>
                    <div>
                      <label className="text-[8px] md:text-[9px] text-slate-500 mb-0.5 block">Insurance</label>
                      <div className="bg-white rounded-md border border-slate-200 px-2 py-1.5 text-[9px] md:text-[10px] text-slate-700">BlueCross PPO</div>
                    </div>
                    <div>
                      <label className="text-[8px] md:text-[9px] text-slate-500 mb-0.5 block">Preferred Provider</label>
                      <div className="bg-white rounded-md border border-slate-200 px-2 py-1.5 text-[9px] md:text-[10px] text-slate-700 flex items-center justify-between">
                        <span>Dr. Chen</span>
                        <svg className="w-2.5 h-2.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="mt-auto pt-2">
                    <button className="w-full bg-teal-600 text-white text-[9px] md:text-[10px] font-medium py-2 rounded-md">
                      Submit Intake →
                    </button>
                    <p className="text-[7px] md:text-[8px] text-slate-400 text-center mt-1.5 flex items-center justify-center gap-1">
                      <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                      HIPAA Compliant · Encrypted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
