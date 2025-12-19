import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutImages = [
  "/background_image.png",
  "/chilling.jpeg",
  "/people_talking.jpeg",
  "/praying.jpeg",
  "/on_rock.jpeg",
  "/landscape.jpeg",
  "/bushy_area.jpeg",
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

  return (
    <div className="font-sans text-gray-800">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-green-700">Mountain Prayer Center</h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-green-700">About</a>
            <a href="#vision" className="hover:text-green-700">Vision</a>
            <a href="#culture" className="hover:text-green-700">Culture</a>
            <a href="#donate" className="hover:text-green-700">Donate</a>
            <a href="#contact" className="hover:text-green-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="h-screen mt-8 bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url(/bible_people.jpeg)" }}>
        <div className="bg-black/50 p-10 rounded-xl max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">A Sacred Mountain of Prayer, Culture & Hope</h2>
          <p className="text-lg mb-6">A peaceful prayer center nestled in the highlands of Kenya — transforming lives through faith, culture, and community development.</p>
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

      {/* VISION */}
      <section id="vision" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Our Vision & Development Plan</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {["Prayer Cells", "Accommodation", "Water & Security", "Cultural Center", "Community Programs", "Refreshment Area"].map((item) => (
              <div key={item} className="bg-white p-6 rounded-2xl shadow">
                <h4 className="font-semibold text-lg mb-2">{item}</h4>
                <p className="text-sm">Funds will support the construction and maintenance of {item.toLowerCase()}, ensuring safety, comfort, and sustainability.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section id="culture" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Celebrating Kenyan Culture</h3>
            <p>The prayer center will also serve as a cultural hub — showcasing Kenya's diverse traditions, art, music, and heritage. Visitors will experience both spiritual and cultural enrichment.</p>
          </div>
          <img src="/praying.jpeg" className="rounded-2xl shadow-lg w-full h-auto" alt="People praying" />
        </div>
      </section>

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
          <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
            <iframe
              title="Prayer Mountain Location"
              src="https://www.google.com/maps?q=Mount+Kenya&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="py-24 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Support the Mission</h3>
          <p className="mb-8">Your contribution helps build prayer points, accommodation, water systems, and community programs that change lives.</p>
          <div className="bg-white text-gray-800 rounded-2xl p-8 max-w-xl mx-auto">
            <p className="font-semibold mb-2">Donate via M-Pesa / Bank Transfer</p>
            <p className="text-sm">M-Pesa: 07XX XXX XXX</p>
            <p className="text-sm">Bank: XXXXX | Account: XXXXX</p>
            <p className="text-xs mt-4 text-gray-500">All funds go directly toward development of the prayer center.</p>
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

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-6">For inquiries, partnerships, or visits, reach out directly.</p>
          <p>📞 +254 7XX XXX XXX</p>
          <p>✉️ info@prayercenter.org</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Mountain Prayer Center. All rights reserved.
      </footer>
    </div>
  );
}