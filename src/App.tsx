import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 3. Add your video data here
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
    duration: "3:45",
    thumbnail: "/kilume_dance2.png", // Use an image as a cover
    videoUrl: "/videos/kilume_dance2.mp4" // Path to your video file
  },
  {
    id: 2,
    title: "Harvest Celebration",
    duration: "4:20",
    thumbnail: "/dancing_video.png",
    videoUrl: "/videos/dancing_video.mp4"
  },
  {
    id: 3,
    title: "Elder's Blessing",
    duration: "2:15",
    thumbnail: "/kilume_dance3.png",
    videoUrl: "/videos/kilume_dance3.mp4"
  }
];
const aboutImages = [
  "/background_image.png",
  "/chilling.jpeg",
  "/people_talking.jpeg",
  "/praying.jpeg",
  "/on_rock.jpeg",
  "/landscape.jpeg",
  "/bushy_area.jpeg",
];
const culturalImages = [
  "/kilumi_dancers.jpeg", 
  "/preparing.jpeg",   // Use your actual file names
  "/prophetess.jpeg"
];
export default function App() {
  useEffect(() => {
    document.title = "Mountain Prayer Center";
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % aboutImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
const [cultureIndex, setCultureIndex] = useState(0);
// Add this inside your App() function
const [activeVideo, setActiveVideo] = useState<Video | null>(null);
useEffect(() => {
  const interval = setInterval(() => {
    setCultureIndex((prev) => (prev + 1) % culturalImages.length);
  }, 4000); // Swaps every 4 seconds
  return () => clearInterval(interval);
}, []);

  return (
    <div className="font-sans text-gray-800">
      {/* NAVBAR - Redesigned with Logo & Action Button */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          
          {/* LEFT: LOGO & BRAND NAME */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Logo Image Container */}
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-lg overflow-hidden border border-gray-100 shadow-sm shrink-0">
              <img 
                src="/logo.png" // Ensure this matches your file name exactly
                alt="Ministry Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text Title */}
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight group-hover:text-green-700 transition-colors">
                The Tabernacle
              </h1>
              <span className="text-xs text-green-600 font-bold uppercase tracking-widest">
                Prayer Mountain
              </span>
            </div>
          </a>

          {/* RIGHT: NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#about" className="hover:text-green-700 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#mission" className="hover:text-green-700 transition-colors relative group">
              Mission
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#vision" className="hover:text-green-700 transition-colors relative group">
              Vision
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#culture" className="hover:text-green-700 transition-colors relative group">
              Culture
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-green-700 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </a>
            
            {/* Featured Donate Button */}
            <a 
              href="#donate" 
              className="px-6 py-2.5 bg-green-700 text-white rounded-full hover:bg-green-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Donate Now
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="h-screen mt-8 bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url(/bible_people.jpeg)" }}>
        <div className="bg-black/50 p-10 rounded-xl max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Tabernacle of Moses Prayer Center</h2>
          <p className="text-lg mb-6">A Sacred Mountain of Prayer, Culture & Hope transforming lives through faith, culture, and community development.</p>
          <a href="#donate" className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold">Support the Vision</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE SLIDER WITH FRAMER MOTION */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={aboutImages[index]}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Prayer Center"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut"
                }}
              />
            </AnimatePresence>
            
            {/* Optional: Add navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {aboutImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-3xl font-bold mb-4">About the Prayer Center</h3>
            <p className="mb-4">
              This sacred land, inherited through generations, has long been a
              place of prayer, reflection, and spiritual renewal. Located on a
              mountain-like formation, it carries natural wonders — including a
              mysterious air tunnel where sounds and objects echo back.
            </p>
            <p>
              Despite its spiritual significance, the land remains undeveloped
              and unsafe. Our mission is to transform it into a secure,
              welcoming prayer sanctuary for all.
            </p>
          </div>
        </div>
      </section>
      {/* MISSION STATEMENT */}
      <section id="mission" className="py-20 bg-green-800 text-white relative overflow-hidden">
        {/* Decorative Background Pattern (Optional subtle texture) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block p-3 rounded-full bg-green-700 mb-6">
            {/* Target Icon */}
            <svg className="w-8 h-8 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h3 className="text-sm font-bold tracking-[0.2em] text-green-300 uppercase mb-6">
            Our Mission
          </h3>
          
          <p className="text-2xl md:text-3xl font-serif leading-relaxed font-light">
            "To transform this sacred mountain into a sanctuary for <span className="font-semibold text-white">spiritual renewal</span>, preserve the indigenous <span className="font-semibold text-white">Kilumi heritage</span>, and empower the local community through sustainable development."
          </p>
        </div>
      </section>

      {/* VISION */}
<section id="vision" className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h3 className="text-3xl font-bold text-center mb-4">Our Vision & Development Plan</h3>
    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      We're transforming this sacred mountain into a comprehensive spiritual sanctuary. 
      Each component serves a unique purpose in creating a space for prayer, community, and cultural preservation.
    </p>
    
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Prayer Cells */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h4 className="font-semibold text-lg mb-3 text-gray-800">Prayer Cells</h4>
        <p className="text-sm text-gray-600">
          Individual and small group prayer rooms carved into the mountainside, offering 
          private spaces for meditation and spiritual reflection. Each cell will feature 
          natural stone walls and panoramic views of the surrounding landscape.
        </p>
      </div>

      {/* Accommodation */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <h4 className="font-semibold text-lg mb-3 text-gray-800">Accommodation</h4>
        <p className="text-sm text-gray-600">
          Eco-friendly cottages and dormitories for overnight retreats, designed with 
          traditional Kenyan architecture. Facilities will host up to 50 visitors for 
          extended spiritual journeys and prayer vigils.
        </p>
      </div>

      {/* Water & Security */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h4 className="font-semibold text-lg mb-3 text-gray-800">Water & Security</h4>
        <p className="text-sm text-gray-600">
          Sustainable water harvesting system with storage for dry seasons, and 
          comprehensive security including perimeter fencing, lighting, and 24/7 
          surveillance to ensure visitor safety in this remote location.
        </p>
      </div>

      {/* Cultural Center */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h4 className="font-semibold text-lg mb-3 text-gray-800">Cultural Center</h4>
        <p className="text-sm text-gray-600">
          A multi-purpose hall showcasing Kenyan art, traditional crafts, and cultural 
          exhibitions. The center will host workshops, storytelling sessions, and 
          cultural exchange programs celebrating Kenya's 42+ ethnic communities.
        </p>
      </div>

      {/* Community Programs */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h4 className="font-semibold text-lg mb-3 text-gray-800">Community Programs</h4>
        <p className="text-sm text-gray-600">
          Skills training, agricultural workshops, and youth mentorship programs 
          benefiting local communities. Initiatives include sustainable farming 
          techniques, craft development, and educational support for school children.
        </p>
      </div>

      {/* Refreshment Area */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </div>
        <h4 className="font-semibold text-lg mb-3 text-gray-800">Refreshment Area</h4>
        <p className="text-sm text-gray-600">
          Traditional kitchen and dining space serving authentic Kenyan cuisine 
          made from locally sourced ingredients. Features a "cultural kitchen" 
          where visitors can learn to prepare traditional dishes.
        </p>
      </div>

    </div>
  </div>
</section>

{/* CULTURE SECTION: Matching the Green/White Theme */}
      <section id="culture" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* TEXT CONTENT - Styled with Gray & Green */}
          <div>
            <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-2 block">
              Heritage & History
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              The Beat of <span className="text-green-700">Kilumi</span>
            </h3>
            
            <p className="text-xl font-serif italic text-gray-500 mb-6">
              "When the drums speak, the heavens listen."
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              We preserve the sacred <strong>Kwakathule traditions</strong>. Historically, when the land was dry, the elders played the Kilumi drums to invoke the blessing of rain. Today, these rhythms serve as a bridge between our past and our future.
            </p>
            
            {/* TAGS - Matching the Vision Section colors */}
            <div className="flex gap-4 mb-8">
              <div className="bg-green-50 border border-green-100 px-4 py-2 rounded-full text-sm font-medium text-green-800 flex items-center gap-2">
                🎵 Ritual Rhythms
              </div>
              <div className="bg-green-50 border border-green-100 px-4 py-2 rounded-full text-sm font-medium text-green-800 flex items-center gap-2">
                🌧️ Rain Prayer
              </div>
            </div>
            
            {/* Simple Link */}
            <a href="#contact" className="inline-flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors">
              Book a cultural visit 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          {/* SWAPPING IMAGE FRAME - Clean Style */}
          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={cultureIndex}
                src={culturalImages[cultureIndex]}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Cultural Heritage"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
              />
            </AnimatePresence>
            
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 text-white pointer-events-none">
              <p className="text-sm font-medium opacity-90">Preserving the voices of the earth</p>
            </div>
          </div>
          
        </div>
      </section>
      {/* VIDEO SHOWCASE SECTION */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-2 block">
              Watch the Tradition
            </span>
            <h3 className="text-3xl font-bold text-gray-900">Live Performances</h3>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Experience the energy and spirit of the Kwakathule dancers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {danceVideos.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setActiveVideo(video)}
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video bg-gray-200">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-green-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 mb-1">{video.title}</h4>
                  <p className="text-sm text-green-600 font-medium">Watch Performance →</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO POPUP MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)} // Close when clicking outside
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking video
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="aspect-video">
                <video 
                  src={activeVideo.videoUrl} 
                  controls 
                  autoPlay 
                  className="w-full h-full"
                />
              </div>
              
              <div className="p-4 bg-gray-900 text-white">
                <h3 className="text-xl font-bold">{activeVideo.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VISIT */}
      <section id="visit" className="py-28 bg-[#F9FAF7]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              Visit the Prayer Mountain
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
              The Prayer Mountain is open to individuals and groups seeking a peaceful
              place for prayer, reflection, and spiritual renewal. Set on elevated
              ground, the site offers a calm and sacred environment away from the noise
              of everyday life.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
              Visitors describe the experience as deeply quiet, grounding, and
              spiritually refreshing — surrounded by natural beauty, fresh mountain
              air, and spaces dedicated to prayer.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li>• Personal and group prayer sessions</li>
              <li>• Designated prayer points and natural prayer spaces</li>
              <li>• Overnight prayer retreats in a secure environment</li>
              <li>• Scenic mountain views and peaceful surroundings</li>
              <li>• Opportunities for cultural learning and reflection</li>
            </ul>
            <p className="mt-8 text-sm text-gray-500 max-w-xl">
              Visitors are encouraged to maintain a respectful and peaceful atmosphere,
              honoring the spiritual significance of the land.
            </p>
          </div>
          {/* MAP CONTAINER */}
          <div className="w-full h-[450px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white relative">
            
            {/* PASTE YOUR COPIED LINK IN THE SRC BELOW */}
            <iframe
              title="Prayer Mountain Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.611859878597!2d37.365653!3d-1.409057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjQnMzIuNiJTIDM3wrAyMSc1Ni40IkU!5e0!3m2!1sen!2ske!4v1767091013124!5m2!1sen!2ske"
              
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            
          </div>
        </div>
      </section>
{/* TRIBUTE / PHASE 1 REPORT SECTION - With Background Image */}
      <section className="py-24 relative overflow-hidden text-white border-y border-green-900">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/humanity_call_international.webp" // <-- REPLACE WITH YOUR ACTUAL IMAGE
            alt="Phase 1 Progress" 
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
          />
          {/* Greenish Gradient Overlay for branding */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-black/80 mix-blend-multiply" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: The Tribute Message (White Text) */}
            <div>
              <span className="text-green-300 font-bold tracking-widest uppercase text-xs mb-2 block">
                A Tribute to Humanity Calls International
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Phase 1: <span className="text-green-400">The Foundation Laid</span>
              </h3>
              
              <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                Thank you for the generous donation of funds toward materials for Phase 1 of construction. Your partnership laid the foundation for what is rising on Kyevaluki Mountain.**Phase 1 is now complete**. 
              </p>
              
              <p className="text-gray-200 mb-8 leading-relaxed text-lg">
                Because of you, the land is secured, the perimeter is sanctified, and the groundwork for the Tabernacle has been established. This victory belongs to every hand that gave and every knee that bowed in prayer.
              </p>

              {/* Scripture Quote (White/Green) */}
              <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-300 font-serif text-lg">
                "The glory of this present house will be greater than the glory of the former house, says the Lord Almighty."
                <footer className="text-sm font-bold text-green-400 mt-3 not-italic">— Haggai 2:9</footer>
              </blockquote>
            </div>

            {/* RIGHT: The Achievements Card (White Card floating on top) */}
            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl border-t-4 border-green-600 relative">
              {/* Optional: A small "Success" ribbon corner */}
              <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-md">
                COMPLETED
              </div>

              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                Achievements Unlocked
              </h4>

              {/* Achievement List */}
              <ul className="space-y-4 mb-8">
                
                {/* Item 1 */}
                <li className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <svg className="w-5 h-5 text-green-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="font-bold text-gray-800 block">Land Acquisition</span>
                    <span className="text-sm text-gray-500">The mountain site is fully purchased and secured.</span>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <svg className="w-5 h-5 text-green-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="font-bold text-gray-800 block">Site Clearing & Fencing</span>
                    <span className="text-sm text-gray-500">Perimeter secured and paths cleared for access.</span>
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="font-bold text-gray-800 block">Water Survey</span>
                    <span className="text-sm text-gray-500">Geological survey completed for borehole drilling.</span>
                  </div>
                </li>
              </ul>

              {/* Status Badge */}
              <div className="bg-green-50 rounded-xl p-5 text-center border border-green-100">
                <span className="text-green-800 font-bold text-sm uppercase tracking-wide">Phase 1 Funding Status</span>
                <div className="text-3xl font-black text-green-700 mt-1">100% FUNDED</div>
                <div className="w-full h-2 bg-green-200 rounded-full mt-3 overflow-hidden">
                   <div className="h-full w-full bg-green-600 rounded-full"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* DONATE SECTION - Compact Version */}
      <section id="donate" className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Header - Reduced margins */}
          <h3 className="text-2xl font-bold mb-3">Support the Mission</h3>
          <p className="mb-8 text-green-100 text-sm md:text-base max-w-xl mx-auto">
            Your contribution directly builds prayer points, water systems, and community programs.
          </p>

          {/* Cards Container - Tighter Grid */}
          <div className="grid md:grid-cols-2 gap-4 text-left">
            
            {/* OPTION 1: M-PESA */}
            <div className="bg-white text-gray-800 rounded-xl p-5 shadow-lg flex flex-col justify-center border border-green-500/30">
              <div className="flex items-center gap-3 mb-3 border-b border-gray-100 pb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">M-Pesa Paybill</h4>
                  <p className="text-xs text-gray-500">Fast & Direct</p>
                </div>
              </div>
              
              <div className="space-y-1 bg-green-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-green-700 uppercase">Paybill</span>
                  <span className="font-mono font-bold text-lg">XXXXXX</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-green-700 uppercase">Account</span>
                  <span className="font-mono font-medium text-sm">Your Name</span>
                </div>
              </div>
            </div>

            {/* OPTION 2: BANK */}
            <div className="bg-white text-gray-800 rounded-xl p-5 shadow-lg flex flex-col justify-center border border-green-500/30">
              <div className="flex items-center gap-3 mb-3 border-b border-gray-100 pb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Bank Transfer</h4>
                  <p className="text-xs text-gray-500"> Bank Name</p>
                </div>
              </div>

              <div className="space-y-1 bg-blue-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-blue-700 uppercase">Account</span>
                  <span className="font-mono font-bold text-sm">XXX XXX XXXX</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-blue-700 uppercase">Branch</span>
                  <span className="font-medium text-sm">Nairobi Branch</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    

      {/* FOUNDER */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <img src="/founder_image.jpeg" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" alt="Founder" />
          <h4 className="text-xl font-semibold">Meet the Founder</h4>
          <p className="mt-4">Driven by faith, heritage, and community responsibility, the founder is committed to preserving this sacred land and transforming it into a place of hope for generations.</p>
        </div>
      </section>

      {/* CONTACT SECTION - Modern Cards Layout */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-2 block">
              Get in Touch
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              We'd Love to Hear from You
            </h3>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Whether you have a question about visiting, want to request a prayer, or just want to say hello, our team is ready to answer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* 1. PHONE CARD */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
              <p className="text-sm text-gray-500 mb-4">Mon-Sat from 8am to 6pm.</p>
              <a href="tel:+254734668826" className="text-lg font-bold text-green-700 hover:text-green-800">
                +254 734 668 826
              </a>
            </div>

            {/* 2. EMAIL CARD */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Email Us</h4>
              <p className="text-sm text-gray-500 mb-4">We'll get back to you within 24 hours.</p>
              <a href="mailto:info@prayercenter.org" className="text-lg font-bold text-green-700 hover:text-green-800 break-all">
                info@prayercenter.org
              </a>
            </div>

            {/* 3. FACEBOOK CARD */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {/* Facebook Icon */}
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Social Media</h4>
              <p className="text-sm text-gray-500 mb-4">Join our community online.</p>
              <a 
                href="https://www.facebook.com/profile.php?id=61585655077675" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                Follow on Facebook
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Mountain Prayer Center. All rights reserved.
      </footer>
    </div>
  );
}
