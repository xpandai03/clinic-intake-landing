export function ResultsSection() {
  return (
    <section id="results" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">Real results from real clinics</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          See how healthcare practices are transforming their operations with XPAND.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div style={{ position: "relative", paddingBottom: "64.98%", height: 0 }}>
          <iframe
            src="https://www.loom.com/embed/f66ea1f592744410bd4ab94492ef4eea"
            frameBorder="0"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "12px" }}
          />
        </div>
      </div>
    </section>
  )
}
