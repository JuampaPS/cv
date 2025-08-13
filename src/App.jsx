import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './main.css';
import LoadingBar from './LoadingBar';
import Background3D from './Background3D';

const experiences = [
  {
    title: 'Mobile App Developer Freelance',
    company: 'Malmö',
    period: '2024/25',
    role: 'Utveckling av iOS- och Android-appar med React Native, Swift och Kotlin. Öppen för freelance-projekt, konsultation eller samarbeten.',
    category: '📱 App',
    color: 'from-purple-900 to-black'
  },
  {
    title: 'Grafisk designer & Produktionsansvarig',
    company: 'AUTOFOLIA – Malmö',
    period: '2024/25',
    role: 'Design, foliering av fordon, produktion, kundkontakt, planering och leverans.',
    category: '🛠️ Produktion',
    color: 'from-gray-800 to-black'
  },
  {
    title: 'Produktionsmedarbetare',
    company: 'STICKERAPP – Malmö',
    period: '2024',
    role: 'Förpackning av klistermärken, kvalitetskontroll, dagliga leveranser.',
    category: '📦 Produktion',
    color: 'from-red-900 to-black'
  },
  {
    title: 'Grafisk designer & Produktionsansvarig',
    company: 'PAMPAS REKLAM – Malmö',
    period: '2024',
    role: 'Design, 4-färgstryck, foliering, kundkontakt.',
    category: '🎨 Design',
    color: 'from-blue-900 to-black'
  },
  {
    title: 'Tryckeri- & servicemedarbetare',
    company: 'COLLINDER MÄRKSYSTEM – Lomma',
    period: '2015–2022',
    role: 'Produktion av skyltar, layout, teknisk underhåll.',
    category: '🖨️ Produktion',
    color: 'from-green-900 to-black'
  },
  {
    title: 'Modedesigner & Egen företagare',
    company: 'DANDY DEL SUR – Malmö',
    period: '2016–2020',
    role: 'Textildesign, online-butik, sociala medier, fysisk butik i Mitt Möllan.',
    category: '🧵 Mode',
    color: 'from-pink-900 to-black'
  },
  {
    title: 'Modedesigner & Företagsägare',
    company: 'ESCOBAR INDEPENDENT – Marbella',
    period: '2013–2014',
    role: 'Oberoende modevarumärke för urban stil.',
    category: '🧵 Mode',
    color: 'from-yellow-900 to-black'
  },
  {
    title: 'Modedesigner & Marknadsansvarig',
    company: 'LUCKY DEVIL – München',
    period: '2010–2013',
    role: 'Design av kollektioner, internationell branding, digital strategi.',
    category: '🌍 Mode',
    color: 'from-indigo-900 to-black'
  }
];

const skills = [
  { category: 'Apputveckling', items: 'Swift, Kotlin, React Native, Xcode, Android Studio' },
  { category: 'Grafisk design', items: 'Adobe CC, Layout, Typografi, Figma' },
  { category: 'Produktion', items: 'Foliering, 4-färgstryck, Skyltproduktion, Kvalitetskontroll' },
  { category: 'Webbutveckling', items: 'Webbshop, UI/UX, Sociala medier' }
];

const languages = [
  { lang: 'Svenska', level: 'Flytande', flag: '🇸🇪' },
  { lang: 'Spanska', level: 'Modersmål', flag: '🇪🇸' },
  { lang: 'Engelska', level: 'Flytande', flag: '🇬🇧' },
  { lang: 'Tyska', level: 'Goda kunskaper', flag: '🇩🇪' }
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const sectionControls = useAnimation();
  const skillsControls = useAnimation();
  const langControls = useAnimation();
  const ctaControls = useAnimation();

  const sectionRef = useRef();
  const skillsRef = useRef();
  const langRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.dataset.observed = 'true';
      },
      { threshold: 0.1 }
    );

    const handleScroll = () => {
      if (sectionRef.current && sectionRef.current.dataset.observed !== 'true') {
        sectionControls.start('visible');
      }
      if (skillsRef.current && skillsRef.current.dataset.observed !== 'true') {
        skillsControls.start('visible');
      }
      if (langRef.current && langRef.current.dataset.observed !== 'true') {
        langControls.start('visible');
      }
      if (ctaRef.current && ctaRef.current.dataset.observed !== 'true') {
        ctaControls.start('visible');
      }
    };

    const refs = [sectionRef, skillsRef, langRef, ctaRef];
    refs.forEach(ref => ref.current && observer.observe(ref.current));

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionControls, skillsControls, langControls, ctaControls]);

  if (isLoading) {
    return <LoadingBar />;
  }

  return (
    <motion.div 
      className="font-sans overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* === HERO === */}
      <section className="hero min-h-screen bg-black text-white relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight"
          >
            Kreativ Designer & Mobile App Utvecklare
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl opacity-90 mb-8"
          >
            Från mode i München till appar i Malmö.
          </motion.p>
        </div>
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button className="text-white border border-white/50 rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300">
            Scrolla för att börja
          </button>
        </motion.div>
      </section>

      {/* === TIMELINE === */}
      <section ref={sectionRef} className="bg-black py-32 px-8 relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Coordinate Markers */}
        <div className="absolute top-20 left-8 text-white/20 font-mono text-xs">
          <div className="mb-2">12595</div>
          <div>22717</div>
        </div>
        
        {/* Technical Cross Markers */}
        <div className="absolute top-1/4 right-16 w-8 h-8 border border-white/10">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 transform -translate-y-1/2"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-white/10 transform -translate-x-1/2"></div>
        </div>
        
        <div className="absolute bottom-1/4 left-16 w-6 h-6 border border-white/10">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 transform -translate-y-1/2"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-white/10 transform -translate-x-1/2"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Section Title - Large Bold Sans Serif */}
          <motion.div
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            animate={sectionControls}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <motion.h2
              className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              MIN RESA
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              En resa från mode i München till appar i Malmö
            </motion.p>
          </motion.div>

          {/* Timeline Grid */}
          <div className="grid gap-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0 }
                }}
                animate={sectionControls}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
              >
                {/* Timeline Connector */}
                <div className={`absolute top-8 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-16 h-px bg-white/20`}></div>
                
                {/* Timeline Dot */}
                <div className={`absolute top-6 ${index % 2 === 0 ? '-left-2' : '-right-2'} w-4 h-4 bg-white rounded-full border-2 border-purple-500`}></div>
                
                {/* Content Container */}
                <div className={`${index % 2 === 0 ? 'ml-20' : 'mr-20'}`}>
                  {/* Period - Elegant Serif */}
                  <motion.div
                    className="text-sm text-white/40 font-serif mb-3"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {exp.period}
                  </motion.div>
                  
                  {/* Title - Large Bold Sans Serif */}
                  <motion.h3 
                    className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {exp.title}
                  </motion.h3>
                  
                  {/* Company - Medium Sans Serif */}
                  <motion.p 
                    className="text-lg md:text-xl text-white/80 font-medium mb-4"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {exp.company}
                  </motion.p>
                  
                  {/* Role Description - Elegant Serif */}
                  <motion.p 
                    className="text-base md:text-lg text-white/70 mb-6 leading-relaxed max-w-2xl"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {exp.role}
                  </motion.p>
                  
                  {/* Category Badge */}
                  <motion.span 
                    className="inline-block bg-white/5 border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium tracking-wide"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {exp.category}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Technical Marker */}
          <div className="text-center mt-24">
            <div className="inline-block w-16 h-16 border border-white/10 relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 transform -translate-y-1/2"></div>
              <div className="absolute top-0 left-1/2 w-px h-full bg-white/10 transform -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* === SKILLS === */}
      <section ref={skillsRef} className="bg-gray-900 py-32 px-8 relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Technical Markers */}
        <div className="absolute top-1/3 right-8 w-12 h-12 border border-white/10">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 transform -translate-y-1/2"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-white/10 transform -translate-x-1/2"></div>
        </div>
        
        <div className="absolute bottom-1/3 left-8 w-10 h-10 border border-white/10">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 transform -translate-y-1/2"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-white/10 transform -translate-x-1/2"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Section Title - Large Bold Sans Serif */}
          <motion.div
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            animate={skillsControls}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <motion.h2
              className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              KOMPETENSER
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Tekniska färdigheter och kreativa kompetenser
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                animate={skillsControls}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Skill Connector Line */}
                <div className="absolute top-0 left-0 w-12 h-px bg-white/20"></div>
                
                {/* Skill Content */}
                <div className="ml-16">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight tracking-tight"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {skill.category}
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-white/70 leading-relaxed"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {skill.items}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === LANGUAGES === */}
      <section ref={langRef} className="bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            animate={langControls}
            transition={{ duration: 0.6 }}
            className="text-4xl font-light mb-12 text-white"
          >
            Språk
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                animate={langControls}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <div className="text-4xl mb-2">{lang.flag}</div>
                <div className="text-white font-medium">{lang.lang}</div>
                <div className="text-sm opacity-70">{lang.level}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section ref={ctaRef} className="bg-black py-24 px-6 text-center">
        <motion.div
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          animate={ctaControls}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-light text-white mb-4">Öppen för arbete</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Tillgänglig för freelance-projekt, mobilapputveckling eller kreativa samarbeten.
          </p>
          <div className="space-x-6">
            <a
              href="mailto:juanpablops@gmail.com"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
            >
              📩 Kontakta mig
            </a>
            <a
              href="https://portafolio-jpps.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
            >
              🔗 Visa portfolio
            </a>
            <a
              href="https://linkedin.com/in/juan-pablo-ps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
            >
              💼 LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-gray-900 py-8 text-center text-sm opacity-70">
        <p>© 2025 Juan Pablo Palacio Soler</p>
        <p className="mt-2">Byggt med kod & kreativitet</p>
      </footer>
      <Background3D />
    </motion.div>
  );
}

export default App;
