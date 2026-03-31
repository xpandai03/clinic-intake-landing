import { ArrowUpRight, ArrowRight } from "lucide-react"
import { AnimatedRevenueChart } from "./animated-revenue-chart"

export function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[16vw] font-bold font-sans tracking-tighter leading-none text-muted/30 whitespace-nowrap">
          AUTOMATE
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal leading-tight max-w-4xl mx-auto mb-6 font-serif">
            Ready to put your clinic on autopilot?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Join hundreds of healthcare practices that trust Clinic Autopilot for their operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="relative flex items-center justify-center gap-0 bg-primary text-primary-foreground rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden">
              <span className="text-sm pr-4">Book a Demo</span>
              <span className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </span>
            </button>

            <button className="relative flex items-center justify-center gap-0 border border-border rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden">
              <span className="absolute inset-0 bg-primary rounded-full scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300" />
              <span className="text-sm text-foreground group-hover:text-primary-foreground pr-4 relative z-10 transition-colors duration-300">
                Contact Sales
              </span>
              <span className="w-10 h-10 rounded-full flex items-center justify-center relative z-10">
                <ArrowRight className="w-4 h-4 text-foreground group-hover:opacity-0 absolute transition-opacity duration-300" />
                <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <AnimatedRevenueChart />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="text-center">
            <p className="text-7xl font-light text-foreground">500+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Clinics</p>
          </div>
          <div className="text-center">
            <p className="text-7xl font-light text-foreground">2M+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Hours saved</p>
          </div>
          <div className="text-center">
            <p className="text-7xl font-light text-foreground">98%</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
