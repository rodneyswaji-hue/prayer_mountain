{/* PARTNER TRIBUTE / PROJECT STATUS SECTION */}
      <section  id="partners" className="py-24 relative overflow-hidden text-white border-y border-green-900">
        
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/humanity_call_international.webp" 
            alt="Humanity Calls International Partnership" 
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-green-900/40" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT: Tribute & Context */}
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-bold tracking-widest uppercase mb-6">
                Partner Recognition
              </span>

              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Honoring Our Partnership With <br />
                <span className="text-green-400">Humanity Calls International</span>
              </h3>

              <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                We gratefully acknowledge <strong>Humanity Calls International</strong> for their
                committed support toward the development of the Prayer Center.
                Their partnership has affirmed this vision and positioned Phase 1
                for activation.
              </p>

              <p className="text-gray-200 mb-8 leading-relaxed text-lg">
                While construction has not yet commenced, preparatory work is underway
                as we await the release of initial Phase 1 funds. This partnership
                remains a vital pillar in turning prayer, planning, and faith into
                physical foundations.
              </p>

              <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-300 font-serif text-lg">
                "I thank my God every time I remember you. In all my prayers for all of you,
                I always pray with joy because of your partnership."
                <footer className="text-sm font-bold text-green-400 mt-3 not-italic">
                  — Philippians 1:3–5
                </footer>
              </blockquote>
            </div>

            {/* RIGHT: Phase Status Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative">

              <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                Phase 1 Status
              </h4>

              <div className="space-y-6 relative border-l border-white/20 ml-3 pl-8">

                {/* Commitment Confirmed */}
                <div className="relative">
                  <span className="absolute -left-[39px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-black text-xs font-bold">✓</span>
                  <h5 className="text-white font-bold text-lg">Partnership Confirmed</h5>
                  <p className="text-sm text-gray-300 mt-1">
                    Phase 1 support committed by Humanity Calls International.
                  </p>
                </div>

                {/* Pending Funds */}
                <div className="relative">
                  <span className="absolute -left-[39px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-black text-xs font-bold animate-pulse">●</span>
                  <h5 className="text-yellow-400 font-bold text-lg">Funding Release Pending</h5>
                  <p className="text-sm text-gray-300 mt-1">
                    Initial Phase 1 funds awaiting final transfer completion.
                  </p>
                </div>

                {/* Upcoming */}
                <div className="relative opacity-70">
                  <span className="absolute -left-[39px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white text-[10px]">○</span>
                  <h5 className="text-white font-bold text-lg">Construction Mobilization</h5>
                  <p className="text-sm text-gray-300 mt-1">
                    Groundwork and material procurement to begin upon fund release.
                  </p>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-green-300 italic">
                  “Faithful partnerships prepare the ground before the first stone is laid.”
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
