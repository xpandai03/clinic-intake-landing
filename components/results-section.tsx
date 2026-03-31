"use client"

import { useRef, useEffect, useState } from "react"
import { ResultCard } from "./result-card"

const results = [
  {
    clinicName: "Austin Family Practice",
    specialty: "Family Medicine",
    metric: "60%",
    metricLabel: "Reduction in Admin Time",
    description: "Automated patient intake and follow-ups freed up 3 hours daily for patient care.",
    stats: ["2,400+ patients/year", "15 min saved per visit", "40% fewer no-shows"],
    image: "/images/property-beach-villa.jpg",
  },
  {
    clinicName: "Denver Pediatrics Group",
    specialty: "Pediatrics",
    metric: "45%",
    metricLabel: "Increase in Patient Volume",
    description: "Streamlined scheduling allowed the practice to see more patients without adding staff.",
    stats: ["3 providers", "Same staff size", "98% patient satisfaction"],
    image: "/images/property-mountain-cabin.jpg",
  },
  {
    clinicName: "Seattle Internal Medicine",
    specialty: "Internal Medicine",
    metric: "$180K",
    metricLabel: "Annual Savings",
    description: "Reduced overhead costs through automation and eliminated paper-based workflows.",
    stats: ["Paperless intake", "EHR integrated", "Zero data entry errors"],
    image: "/images/property-city-loft.jpg",
  },
  {
    clinicName: "Miami Orthopedic Center",
    specialty: "Orthopedics",
    metric: "35%",
    metricLabel: "Faster Patient Throughput",
    description: "Pre-visit intake and automated reminders dramatically improved clinic efficiency.",
    stats: ["5 surgeons", "Digital forms", "Real-time updates"],
    image: "/images/property-tuscan-estate.jpg",
  },
  {
    clinicName: "Chicago Dermatology Associates",
    specialty: "Dermatology",
    metric: "92%",
    metricLabel: "Patient Satisfaction Score",
    description: "Patients love the seamless booking and communication experience.",
    stats: ["SMS reminders", "Online booking", "Quick check-in"],
    image: "/images/property-tropical-bungalow.jpg",
  },
  {
    clinicName: "Boston Cardiology Partners",
    specialty: "Cardiology",
    metric: "50%",
    metricLabel: "Reduction in No-Shows",
    description: "Smart reminders and easy rescheduling cut missed appointments in half.",
    stats: ["Automated follow-ups", "Insurance verified", "HIPAA compliant"],
    image: "/images/property-lakefront-modern.jpg",
  },
]

export function ResultsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const positionRef = useRef(0)
  const animationRef = useRef<number>()

  const duplicatedResults = [...results, ...results, ...results]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const speed = isHovered ? 0.3 : 1
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      positionRef.current += speed * (deltaTime / 16)

      const totalWidth = scrollContainer.scrollWidth / 3

      if (positionRef.current >= totalWidth) {
        positionRef.current = 0
      }

      scrollContainer.style.transform = `translateX(-${positionRef.current}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovered])

  return (
    <section id="results" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">Real results from real clinics</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          See how healthcare practices are transforming their operations with XPAND.
        </p>
      </div>

      <div className="relative w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div ref={scrollRef} className="flex gap-6" style={{ width: "fit-content" }}>
          {duplicatedResults.map((result, index) => (
            <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[400px]">
              <ResultCard {...result} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
