import { motion } from 'framer-motion';
import { FaImages, FaNewspaper, FaVideo } from 'react-icons/fa';

const galleryItems = [
  {
    src: '/media/portable-dome-auditorium.jpeg',
    title: 'Auditorium Dome Setup',
    caption: 'Portable dome installed inside a school hall for an immersive show.',
    fit: 'cover',
  },
  {
    src: '/media/portable-dome-aerial.jpeg',
    title: 'Outdoor Campus Installation',
    caption: 'Aerial view of the inflatable planetarium setup on campus.',
    fit: 'cover',
  },
  {
    src: '/media/students-inside-dome.jpeg',
    title: 'Students Inside The Dome',
    caption: 'Children watching a 360 degree educational space show.',
    fit: 'cover',
  },
  {
    src: '/media/sbs-sunshine-notice.jpeg',
    title: 'School Notice',
    caption: 'Event notice shared by S.B.S. Sunshine Academy, Varanasi.',
    fit: 'contain',
    tone: 'notice',
  },
  {
    src: '/media/urdu-news-coverage.jpeg',
    title: 'News Coverage',
    caption: 'Local newspaper coverage of the school planetarium program.',
    fit: 'contain',
    tone: 'press',
  },
  {
    src: '/media/jagran-news-coverage.jpeg',
    title: 'Jagran Coverage',
    caption: 'Media feature highlighting students learning through space shows.',
    fit: 'contain',
    tone: 'press',
  },
  {
    src: '/media/india-portable-planetarium-logo.jpeg',
    title: 'Brand Emblem',
    caption: 'India Portable Planetarium: inspire, educate, explore.',
    fit: 'contain',
    tone: 'logo',
  },
];

const MediaGallery = () => {
  return (
    <section id="events" className="py-24 bg-[#020B18] relative overflow-hidden z-10">
      <div className="glow-divider absolute top-0 left-0 w-full"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,180,255,0.14),transparent_32%),radial-gradient(circle_at_85%_35%,rgba(255,184,48,0.1),transparent_30%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-4 text-left"
          >
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFB830] font-orbitron uppercase">
              <FaImages className="text-[#00B4FF]" />
              SCHOOL EVENTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-extrabold text-white leading-tight">
              Photos, Video & Press Highlights
            </h2>
            <p className="text-[#B0BEC5] font-inter text-base sm:text-lg leading-relaxed max-w-3xl">
              A look at India Portable Planetarium programs, school installations, student experiences, and local media coverage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex lg:justify-end"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-[#B0BEC5]">
              <FaNewspaper className="text-[#FFB830]" />
              <span>Real school event media added</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-card rounded-3xl overflow-hidden"
          >
            <div className="relative bg-black">
              <video
                className="w-full aspect-video object-contain bg-black"
                src="/media/planetarium-show-video.mp4"
                poster="/media/students-inside-dome.jpeg"
                controls
                preload="metadata"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-2 text-left">
              <div className="flex items-center gap-2 text-[#FFB830] font-orbitron text-xs font-bold uppercase">
                <FaVideo />
                Featured Video
              </div>
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white">
                Portable Planetarium Experience
              </h3>
              <p className="text-[#B0BEC5] font-inter text-sm sm:text-base leading-relaxed">
                Students can experience space missions, planets, stars, galaxies, and the night sky inside a full-dome immersive show.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 grid grid-cols-1 gap-8"
          >
            {galleryItems.slice(0, 2).map((item) => (
              <figure key={item.src} className="glass-card rounded-3xl overflow-hidden">
                <div className="bg-black/40">
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`w-full h-64 ${item.fit === 'contain' ? 'object-contain p-3' : 'object-cover'}`}
                    loading="lazy"
                  />
                </div>
                <figcaption className="p-5 text-left">
                  <h3 className="font-orbitron font-bold text-white text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-[#B0BEC5] font-inter text-sm leading-relaxed mt-2">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {galleryItems.slice(2).map((item, index) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`glass-card rounded-3xl overflow-hidden ${item.tone === 'press' ? 'sm:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="bg-black/40">
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full h-72 ${item.fit === 'contain' ? 'object-contain p-3' : 'object-cover'}`}
                  loading="lazy"
                />
              </div>
              <figcaption className="p-5 text-left">
                <h3 className="font-orbitron font-bold text-white text-base">
                  {item.title}
                </h3>
                <p className="text-[#B0BEC5] font-inter text-sm leading-relaxed mt-2">
                  {item.caption}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
