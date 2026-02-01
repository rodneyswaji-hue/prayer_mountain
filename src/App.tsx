import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Video data
interface Video {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
}

const danceVideos: Video[] = [
  {
    id: 1,
    title: "Kilumi Rain Dance",
    duration: "0:38",
    thumbnail: "/kilume_dance2.png",
    videoUrl: "/videos/kilume_dance2.mp4"
  },
  {
    id: 2,
    title: "Kilumi Celebration Dance",
    duration: "0:55",
    thumbnail: "/dancing_video.png",
    videoUrl: "/videos/dancing_video.mp4"
  },
  {
    id: 3,
    title: "Kilumi Traditional Dance",
    duration: "0:15",
    thumbnail: "/kilume_dance3.png",
    videoUrl: "/videos/kilume_dance3.mp4"
  }
];

const aboutImages = [
  "/bible_people.jpeg",
  "/chilling.jpeg",
  "/people_talking.jpeg",
  "/praying.jpeg",
  "/on_rock.jpeg",
  "/landscape.jpeg",
  "/Sitting-on-rock.jpeg",
  "/bushy_area.jpeg",
];

const culturalImages = [
  "/kilumi_dancers.jpeg", 
  "/preparing.jpeg",
  "/prophetess.jpeg"
];

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-950 flex flex-col items-center justify-center text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <motion.img
          src="/logo.png"
          alt="Loading"
          className="w-24 h-24 mb-8 mx-auto drop-shadow-2xl"
          animate={{ 
            scale: [1, 1.05, 1],
            filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        <motion.p
          className="tracking-[0.3em] uppercase text-sm text-emerald-200 font-light mb-8"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Preparing the Mountain
        </motion.p>

        <motion.div className="w-64 h-0.5 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-400 to-green-300"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const preloadVideos = () => {
  danceVideos.forEach((video) => {
    const vid = document.createElement("video");
    vid.src = video.videoUrl;
    vid.preload = "metadata";
  });
};

preloadVideos();

const allImages = [
  ...aboutImages,
  ...culturalImages,
  "/logo.png",
  "/bible_people.jpeg",
  "/background_image.png",
  "/founder_image.jpeg",
  "/humanity_call_international.webp",
  "/kilume_dance2.png",
  "/kilume_dance3.png",
  "/dancing_video.png",
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let loaded = 0;

    const preloadImages = () => {
      allImages.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = img.onerror = () => {
          loaded++;
          if (loaded >= allImages.length) {
            setTimeout(() => setIsLoading(false), 600);
          }
        };
      });
    };

    preloadImages();
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.title = "The Tabernacle Prayer Mountain";
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [cultureIndex, setCultureIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCultureIndex((prev) => (prev + 1) % culturalImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-sans text-gray-800 bg-stone-50"
        >
          {/* ELEGANT NAVBAR */}
          <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled 
              ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-emerald-100/20' 
              : 'bg-transparent'
          }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                
                {/* Logo */}
                <a href="#" className="flex items-center gap-4 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full group-hover:bg-emerald-500/30 transition-all"></div>
                    <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-emerald-600/30 shadow-lg">
                      <img 
                        src="/logo.png"
                        alt="Ministry Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <h1 className={`text-xl font-serif font-bold leading-tight transition-colors ${
                      scrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
                    }`}>
                      The Tabernacle
                    </h1>
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                      scrolled ? 'text-emerald-600' : 'text-emerald-200'
                    }`}>
                      Prayer Mountain
                    </span>
                  </div>
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`md:hidden p-2 rounded-lg transition ${
                    scrolled ? 'hover:bg-gray-100 text-gray-800' : 'hover:bg-white/10 text-white'
                  }`}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                  {['About', 'Mission', 'Vision', 'Culture', 'Partners', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`text-sm font-medium tracking-wide relative group transition-colors ${
                        scrolled ? 'text-gray-700 hover:text-emerald-700' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {item}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                        scrolled ? 'bg-emerald-600' : 'bg-white'
                      }`}></span>
                    </a>
                  ))}
                  
                  <a 
                    href="#donate" 
                    className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full font-medium text-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Donate Now
                  </a>
                </nav>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-white border-t border-gray-100 shadow-lg"
                >
                  <nav className="flex flex-col divide-y">
                    {['About', 'Mission', 'Vision', 'Culture', 'Partners', 'Contact'].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-6 py-4 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
                      >
                        {item}
                      </a>
                    ))}
                    <a
                      href="#donate"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-center font-bold hover:from-emerald-700 hover:to-green-700 transition"
                    >
                      Donate Now
                    </a>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          {/* HERO SECTION - Enhanced */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <motion.div 
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/bible_people.jpeg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            </motion.div>

            {/* Animated Particles/Glow Effect */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-200 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
                  Sacred Ground · Divine Purpose
                </span>
                
                <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight">
                  The Tabernacle of Moses
                  <span className="block text-3xl md:text-5xl mt-2 text-emerald-300 font-light">Prayer Mountain</span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                  A sacred sanctuary transforming lives through faith, culture, and community development — where prayer meets purpose.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#about" 
                    className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Discover Our Story
                  </a>
                  <a 
                    href="#donate" 
                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
                  >
                    Support the Vision
                  </a>
                </div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </section>

          {/* FOREWORD SECTION - Refined */}
          <section className="py-32 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
              <div className="grid md:grid-cols-12 gap-16 items-start">

                <div className="md:col-span-4 md:sticky md:top-32">
                  <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="block text-xs font-bold tracking-[0.3em] uppercase text-emerald-600 mb-6">
                      Foreword
                    </span>

                    <h2 className="text-5xl md:text-6xl font-serif leading-[1.1] text-gray-900 mb-8">
                      A Sacred <br />
                      <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Legacy</span> of <br />
                      Faith
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full"></div>
                  </motion.div>
                </div>

                <div className="md:col-span-8 md:pl-16">
                  <div className="space-y-16">

                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="prose prose-lg max-w-none"
                    >
                      <p className="text-2xl font-serif leading-relaxed text-gray-800 mb-6">
                        The family, donors of the land upon which this Prayer Center is being
                        established, give thanks to Almighty God for His preservation and
                        faithfulness, even in the face of illness and adversity.
                      </p>

                      <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 font-semibold">
                        Honoring the Patriarch & Matriarch
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative bg-gradient-to-br from-emerald-50 to-green-50 p-10 rounded-2xl border-l-4 border-emerald-600 shadow-sm"
                    >
                      <div className="absolute top-6 right-6 text-6xl text-emerald-200 font-serif">"</div>
                      <p className="text-xl leading-relaxed text-gray-700 font-serif relative z-10">
                        We humbly honor the <strong className="text-emerald-800">Patriarch and Matriarch</strong> who
                        bequeathed this sacred site to their beloved son. May the Almighty
                        God bless you abundantly and be with you forever.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        To all worshipers — from the community and from afar — who have
                        gathered, prayed, and stood upon this land for God: you have
                        possessed this place for His glory and strengthened the family's
                        resolve to seek the Almighty fearlessly.
                      </p>

                      <p className="font-serif italic text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-green-700">
                        May the Almighty God hear and answer your prayers, now and forever.
                      </p>
                    </motion.div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ABOUT SECTION - Modernized */}
          <section id="about" className="py-32 bg-white relative">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                
                {/* Image Slider */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={index}
                        src={aboutImages[index]}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Prayer Center"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </AnimatePresence>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Navigation Dots */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {aboutImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIndex(i)}
                          className={`transition-all rounded-full ${
                            i === index 
                              ? 'w-8 h-2 bg-white' 
                              : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-3xl -z-10 blur-xl"></div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-600 mb-4 block">
                    Our Story
                  </span>
                  
                  <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                    About the Prayer Center
                  </h3>
                  
                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p className="text-lg">
                      This sacred land, inherited through generations, has long been a
                      place of prayer, reflection, and spiritual renewal. Located on a
                      mountain-like formation, it carries natural wonders — including a
                      mysterious air tunnel where sounds and objects echo back.
                    </p>
                    
                    <p className="text-lg">
                      Despite its spiritual significance, the land remains undeveloped
                      and unsafe. Our mission is to transform it into a secure,
                      welcoming prayer sanctuary for all.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Sacred Heritage</p>
                      <p className="text-sm text-gray-500">Generations of faith and prayer</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* JOURNEY SECTION - NEW: Bush Clearing Video */}
          <section className="py-32 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-600 mb-4 block">
                    The Journey Begins
                  </span>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                    From Wilderness to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Sacred Ground</span>
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Witness the transformation as we clear the path for God's purpose — 
                    every cut, every cleared bush, is a step toward building a sanctuary of prayer.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900"
              >
                {/* Video Container */}
                <div className="relative aspect-video">
                  <video
                    src="/Bush_Clearing.mp4" // Add your bush clearing video here
                    controls
                    poster="/clearing bush.png" // Optional: Add a thumbnail
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
                    <p className="text-white text-sm font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      Live Progress
                    </p>
                  </div>
                </div>

                {/* Video Info Panel */}
                <div className="bg-gradient-to-r from-emerald-900 to-green-900 p-8 text-white">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="border-r border-white/20 last:border-0">
                      <p className="text-3xl font-bold mb-1">Phase 1</p>
                      <p className="text-sm text-emerald-200">Land Preparation</p>
                    </div>
                    <div className="border-r border-white/20 last:border-0">
                      <p className="text-3xl font-bold mb-1">In Progress</p>
                      <p className="text-sm text-emerald-200">Clearing & Development</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold mb-1">2026</p>
                      <p className="text-sm text-emerald-200">Foundation Year</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline */}
              <div className="mt-16 grid md:grid-cols-4 gap-8">
                {[
                  { phase: "Phase 1", title: "Land Clearing", status: "In Progress" },
                  { phase: "Phase 2", title: "Foundation Work", status: "Upcoming" },
                  { phase: "Phase 3", title: "Construction", status: "Planned" },
                  { phase: "Phase 4", title: "Opening", status: "Future" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg ${
                      i === 0 ? 'bg-emerald-600' : 'bg-gray-300'
                    }`}>
                      {i + 1}
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">{item.phase}</p>
                    <p className="text-sm text-gray-600 mb-2">{item.title}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      i === 0 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {item.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* MISSION STATEMENT - Refined */}
          <section id="mission" className="py-32 bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-950 text-white relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <circle cx="25" cy="25" r="2" fill="currentColor" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
                  <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-sm font-bold tracking-[0.3em] text-emerald-300 uppercase mb-8">
                  Our Mission
                </h3>
                
                <p className="text-3xl md:text-4xl font-serif leading-relaxed mb-6">
                  "To transform this sacred mountain into a sanctuary for <span className="text-emerald-300 font-semibold">spiritual renewal</span>, preserve the indigenous <span className="text-emerald-300 font-semibold">Kilumi heritage</span>, and empower the local community through sustainable development."
                </p>

                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto rounded-full mt-12"></div>
              </motion.div>
            </div>
          </section>

          {/* VISION SECTION - Enhanced Cards */}
          <section id="vision" className="py-32 bg-gradient-to-b from-stone-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-600 mb-4 block">
                    Development Blueprint
                  </span>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
                    Our Vision & Development Plan
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Transforming this sacred mountain into a comprehensive spiritual sanctuary — 
                    each element designed to serve prayer, community, and cultural preservation.
                  </p>
                </motion.div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                    title: "Prayer Cells",
                    desc: "Individual meditation rooms carved into the mountainside, featuring natural stone walls and panoramic views for private spiritual reflection.",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                    title: "Accommodation",
                    desc: "Eco-friendly cottages with traditional architecture, hosting up to 50 visitors for extended spiritual journeys and prayer vigils.",
                    color: "from-emerald-500 to-green-500"
                  },
                  {
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    title: "Water & Security",
                    desc: "Sustainable water harvesting with storage systems, comprehensive security including perimeter fencing and 24/7 surveillance.",
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                    title: "Cultural Center",
                    desc: "Multi-purpose hall showcasing art, crafts, and exhibitions, hosting workshops and cultural programs celebrating Kenya's 42+ communities.",
                    color: "from-amber-500 to-orange-500"
                  },
                  {
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                    title: "Community Programs",
                    desc: "Skills training, agricultural workshops, and youth mentorship including sustainable farming and educational support.",
                    color: "from-red-500 to-rose-500"
                  },
                  {
                    icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
                    title: "Refreshment Area",
                    desc: "Traditional kitchen serving authentic Kenyan cuisine from local ingredients, featuring a cultural kitchen for learning traditional dishes.",
                    color: "from-indigo-500 to-blue-500"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 relative overflow-hidden"
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      
                      <h4 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h4>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CULTURE SECTION - Enhanced */}
          <section id="culture" className="py-32 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-20 items-center">
                
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-600 mb-4 block">
                    Heritage & History
                  </span>

                  <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
                    The Beat of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Kilumi</span>
                  </h3>
                  
                  <p className="text-2xl font-serif italic text-gray-400 mb-8">
                    "When the drums speak, the heavens listen."
                  </p>
                  
                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p className="text-lg">
                      We honor and preserve the sacred <strong className="text-gray-900">Kamba tradition</strong> of Kilumi.
                      Historically, during seasons of drought, Kamba elders gathered to play
                      Kilumi drums as a communal prayer for rain.
                    </p>
                    
                    <p className="text-lg">
                      These rhythms carried supplication, unity, and faith — binding the people 
                      to the land and to God. Today, Kilumi continues to serve as a spiritual 
                      and cultural bridge, connecting ancestral wisdom with present-day worship.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    <span className="px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-800">
                      🎵 Kilumi Rhythms
                    </span>
                    <span className="px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-medium text-emerald-800">
                      🌧️ Rain Prayer Tradition
                    </span>
                  </div>
                </motion.div>

                {/* Image Frame */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={cultureIndex}
                        src={culturalImages[cultureIndex]}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Kamba Cultural Heritage"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                      />
                    </AnimatePresence>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-sm font-medium opacity-90 mb-2">Preserving Heritage</p>
                      <p className="text-2xl font-serif font-bold">Kamba Cultural Tradition</p>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-3xl -z-10 blur-2xl"></div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* VIDEO SHOWCASE - Refined */}
          <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-600 mb-4 block">
                    Watch the Tradition
                  </span>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                    Live Performances
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Experience the energy, rhythm, and spiritual expression of the
                    <strong> Kamba dancers</strong> through Kilumi performances.
                  </p>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {danceVideos.map((video, i) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                    onClick={() => setActiveVideo(video)}
                  >
                    <div className="relative aspect-video bg-gray-900">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/95 backdrop-blur rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
                          <svg className="w-7 h-7 text-gray-900 group-hover:text-white ml-1 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {video.duration}
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{video.title}</h4>
                      <p className="text-sm text-emerald-600 font-medium group-hover:text-emerald-700">
                        Watch Performance →
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* VIDEO MODAL */}
          <AnimatePresence>
            {activeVideo && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setActiveVideo(null)}
              >
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-black w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="aspect-video">
                    <video 
                      src={activeVideo.videoUrl} 
                      controls 
                      autoPlay 
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-gray-900 to-black text-white">
                    <h3 className="text-2xl font-bold">{activeVideo.title}</h3>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* VISIT SECTION - Enhanced Map */}
          <section id="visit" className="py-32 bg-gradient-to-b from-stone-50 to-white">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-600 mb-4 block">
                    Come & Experience
                  </span>
                  
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                    Visit the Prayer Mountain
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    The Prayer Mountain is open to individuals and groups seeking a peaceful
                    place for prayer, reflection, and spiritual renewal. Set on elevated
                    ground, the site offers a calm environment away from everyday life.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Visitors describe the experience as deeply quiet, grounding, and
                    spiritually refreshing — surrounded by natural beauty and spaces
                    dedicated to prayer.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Personal and group prayer sessions",
                      "Designated prayer points and natural spaces",
                      "Overnight prayer retreats in secure environment",
                      "Scenic mountain views and peaceful surroundings",
                      "Cultural learning and reflection opportunities"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 italic border-l-2 border-emerald-200 pl-4">
                    Visitors are encouraged to maintain a respectful atmosphere,
                    honoring the spiritual significance of the land.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <iframe
                      title="Prayer Mountain Location"
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.611859878597!2d37.365653!3d-1.409057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjQnMzIuNiJTIDM3wrAyMSc1Ni40IkU!5e0!3m2!1sen!2ske!4v1767091013124!5m2!1sen!2ske"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-3xl -z-10 blur-2xl"></div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* PARTNERS/IMPACT SECTION - Refined */}
          <section id="partners" className="py-32 relative overflow-hidden text-white">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2000&auto=format&fit=crop" 
                alt="Community Support" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-green-950/90 to-emerald-900/95"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full text-amber-300 text-xs font-bold tracking-[0.3em] uppercase mb-8">
                    Kingdom Builders
                  </span>

                  <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                    Built Upon The Generosity of <br />
                    <span className="text-emerald-300">Faithful Families</span>
                  </h3>

                  <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
                    <p>
                      We extend our deepest gratitude to the families and individuals who 
                      have stepped forward to sow the first seeds for the Prayer Center.
                    </p>

                    <p>
                      Your contributions—given not for recognition, but out of faith—have 
                      allowed us to move past planning and secure resources needed to begin. 
                      You are the hands building this foundation.
                    </p>
                  </div>

                  <blockquote className="mt-8 border-l-4 border-amber-500 pl-6 italic text-gray-300 text-xl font-serif">
                    "But when you give to the needy, do not let your left hand know what your right hand is doing..."
                    <footer className="text-sm font-semibold text-amber-400 mt-3 not-italic">
                      — Matthew 6:3–4
                    </footer>
                  </blockquote>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl"
                >
                  <h4 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Community Impact Report
                  </h4>

                  <div className="space-y-8">
                    {[
                      { status: "complete", title: "Seed Funds Received", desc: "Contributions successfully received, securing initial budget." },
                      { status: "active", title: "Resource Allocation", desc: "Funds being deployed for site preparation and materials." },
                      { status: "upcoming", title: "The Vision Unfolds", desc: "Physical development visible on the horizon." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                          item.status === 'complete' ? 'bg-emerald-500' :
                          item.status === 'active' ? 'bg-amber-500 animate-pulse' :
                          'bg-white/20'
                        }`}>
                          {item.status === 'complete' && (
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          {item.status === 'active' && <span className="w-2 h-2 bg-white rounded-full"></span>}
                          {item.status === 'upcoming' && <span className="text-white text-xs">→</span>}
                        </div>
                        <div>
                          <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                          <p className="text-sm text-gray-300">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20 text-center">
                    <p className="text-sm text-emerald-300 italic">
                      "Honoring those who give in silence to let the work speak loudly."
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* DONATE SECTION - Elegant Cards */}
          <section id="donate" className="py-32 bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern id="donate-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#donate-dots)" />
              </svg>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Support the Mission</h3>
                  <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
                    Your contribution directly builds prayer points, water systems, and community programs.
                  </p>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* M-PESA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/20">
                    <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">M-Pesa Paybill</h4>
                      <p className="text-sm text-emerald-300">Fast & Direct</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">Paybill</span>
                      <span className="font-mono font-bold text-2xl">XXXXXX</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm font-semibold text-emerald-300 uppercase tracking-wider">Account</span>
                      <span className="font-medium">Your Name</span>
                    </div>
                  </div>
                </motion.div>

                {/* BANK */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/20">
                    <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">Bank Transfer</h4>
                      <p className="text-sm text-blue-300">Bank Name</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Account</span>
                      <span className="font-mono font-bold text-lg">XXX XXX XXXX</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Branch</span>
                      <span className="font-medium">Nairobi Branch</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* FOUNDER - Elegant Profile */}
          <section className="py-32 bg-gradient-to-b from-white to-stone-50">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full blur-2xl opacity-20"></div>
                  <img 
                    src="/founder_image.jpeg" 
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl" 
                    alt="Founder" 
                  />
                </div>

                <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-600 mb-4 block">
                  Meet the Founder
                </span>
                
                <h4 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  A Vision Born of Faith
                </h4>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Driven by faith, heritage, and community responsibility, the founder 
                  is committed to preserving this sacred land and transforming it into 
                  a place of hope for generations to come.
                </p>
              </motion.div>
            </div>
          </section>

          {/* CONTACT - Modern Cards */}
          <section id="contact" className="py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-600 mb-4 block">
                    Get in Touch
                  </span>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                    We'd Love to Hear from You
                  </h3>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Whether you have questions about visiting, prayer requests, or just want to say hello.
                  </p>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                
                {[
                  {
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                    title: "Call Us",
                    subtitle: "Mon-Sat from 8am to 6pm",
                    content: "+254 734 668 826",
                    link: "tel:+254734668826",
                    color: "from-emerald-500 to-green-500"
                  },
                  {
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    title: "Email Us",
                    subtitle: "Response within 24 hours",
                    content: "info@prayercenter.org",
                    link: "mailto:info@prayercenter.org",
                    color: "from-blue-500 to-cyan-500"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-gradient-to-br from-stone-50 to-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all border border-gray-100 group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 mb-6">{item.subtitle}</p>
                    <a 
                      href={item.link} 
                      className="text-lg font-bold text-emerald-700 hover:text-emerald-800 transition-colors break-all"
                    >
                      {item.content}
                    </a>
                  </motion.div>
                ))}

                {/* Facebook Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-stone-50 to-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Social Media</h4>
                  <p className="text-sm text-gray-500 mb-6">Join our community online</p>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61585655077675" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
                  >
                    Follow on Facebook
                  </a>
                </motion.div>

              </div>
            </div>
          </section>

          {/* FOOTER - Minimal & Elegant. */}
          <footer className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-gray-400 py-12 border-t border-emerald-900/20">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <div className="mb-6">
                <img src="/logo.png" alt="Logo" className="w-12 h-12 mx-auto mb-4 opacity-60" />
                <p className="text-sm font-serif italic text-gray-500">
                  A Sacred Mountain of Prayer & Heritage
                </p>
              </div>
              <p className="text-sm">
                © {new Date().getFullYear()} The Tabernacle Prayer Mountain. All rights reserved.
              </p>
            </div>
          </footer>
    
        </motion.div>
      )}
    </>
  );
}