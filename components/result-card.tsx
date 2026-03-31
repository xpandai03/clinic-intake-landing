"use client"

import Image from "next/image"
import { Building2, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ResultCardProps {
  clinicName: string
  specialty: string
  metric: string
  metricLabel: string
  description: string
  stats: string[]
  image: string
  className?: string
}

export function ResultCard({
  clinicName,
  specialty,
  metric,
  metricLabel,
  description,
  stats = [],
  image,
  className,
}: ResultCardProps) {
  return (
    <div
      className={cn("w-full h-full flex flex-col overflow-hidden rounded-3xl bg-white shadow-card", className)}
      style={{
        boxShadow:
          "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px",
      }}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={clinicName} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />

        <div className="absolute left-3 top-3 rounded-lg bg-white/20 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
          Case Study
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <div className="mb-1 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-white" />
            <span className="text-sm font-medium text-white/90">{specialty}</span>
          </div>
          <h3 className="text-balance text-2xl font-bold text-white">{clinicName}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Main metric */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
            <TrendingUp className="h-6 w-6 text-accent" />
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">{metric}</div>
            <div className="text-sm text-muted-foreground">{metricLabel}</div>
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{description}</p>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {stats.map((stat, index) => (
                <span key={index} className="rounded-lg bg-accent/10 px-2 py-1 text-xs font-medium text-primary">
                  {stat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between mt-auto pt-4">
          <button className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 text-sm">
            Read Full Story
          </button>
        </div>
      </div>
    </div>
  )
}
