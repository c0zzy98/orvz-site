import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { LanguageProvider, useTranslation } from "./i18n/LanguageContext";

const BASE = import.meta.env.BASE_URL;
const HERO_IMAGES = [`${BASE}hero/i1.png`, `${BASE}hero/i2.png`, `${BASE}hero/i3.png`, `${BASE}hero/i4.png`, `${BASE}hero/i5.png`, `${BASE}hero/i6.png`, `${BASE}hero/i7.png`];
const SLIDE_INTERVAL = 5000;

const headingRevealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl mb-12 text-left overflow-hidden">
      {eyebrow && (
        <motion.p
          custom={0}
          variants={headingRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-4 text-xs uppercase tracking-[0.28em] text-[#A7ADB5] md:text-sm"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        custom={eyebrow ? 1 : 0}
        variants={headingRevealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-3xl font-light leading-tight tracking-[0.04em] text-[#F1F4F6] md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          custom={eyebrow ? 2 : 1}
          variants={headingRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-[#C7CCD3] md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

function Reveal({ children, delay = 0, y = 36 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionShell({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`bg-gradient-to-b from-black via-[#0C0F12] to-black ${className}`.trim()}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">{children}</div>
    </section>
  );
}

function IconWrapper({ children, label, href = "#" }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2B3138] bg-[#0C0F12] text-[#C7CCD3] transition duration-300 hover:-translate-y-0.5 hover:border-[#8E98A3] hover:text-white"
    >
      <span className="sr-only">{label}</span>
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
      <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.2c0-.9.2-1.5 1.5-1.5H16V5.1c-.2 0-.9-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.4V11H8.7v3h2.2v7h2.6Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
      <path d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.8A2.95 2.95 0 0 0 4.8 7.75v8.5a2.95 2.95 0 0 0 2.95 2.95h8.5a2.95 2.95 0 0 0 2.95-2.95v-8.5a2.95 2.95 0 0 0-2.95-2.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
      <path d="M14.9 3c.2 1.7 1.2 3.3 2.7 4.2 1 .6 2 .9 3.2 1v2.7a8.1 8.1 0 0 1-3.8-.9v5.7c0 3.2-2.6 5.8-5.8 5.8a5.8 5.8 0 0 1-4.1-9.9 5.8 5.8 0 0 1 6.3-1.3v2.9a3.1 3.1 0 0 0-1.5-.4 3 3 0 1 0 3 3V3h2Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
      <path d="M18.9 3H21l-4.6 5.3L21.8 21h-4.9l-3.8-4.9L8.8 21H6.7l4.9-5.7L2.2 3h5l3.4 4.5L14.5 3h4.4Zm-1.7 16h1.4L6.4 4.9H5l12.2 14.1Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/orazmeble", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/oraz.meble/", Icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@oraz.meble", Icon: TikTokIcon },
  { label: "X", href: "#", Icon: XIcon },
];

const contactDetails = [
  "Email: orazmeble@gmail.com",
  "Telefon: +48 530 497 662",
  "Telefon: +48 502 629 060",
];

const businessHours = [
  { hours: "08:00–21:00" },
  { hours: "08:00–21:00" },
  { hours: "08:00–21:00" },
  { hours: "08:00–21:00" },
  { hours: "08:00–21:00" },
  { hours: "09:00–18:00" },
  { hours: null },
];

const TODAY_INDEX = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

const quickContactCardLines = [
  ["ul. Ludowa 16", "58-560 Jelenia Góra", "orazmeble@gmail.com"],
  ["Jakub Gorlach", "tel. 530 497 662", "gorlachjakub@gmail.com"],
  ["Michał Tyrański", "tel. 502 629 060", "tyranski.michal@wp.pl"],
];

const LANGUAGES = ["pl", "en", "de", "cz"];

const PROJECTS = [`${BASE}projects/10.png`, `${BASE}projects/11.png`, `${BASE}projects/12.png`, `${BASE}projects/13.png`, `${BASE}projects/14.png`, `${BASE}projects/15.png`];

const REASONS_IMAGES = [`${BASE}us/21.png`, `${BASE}us/22.png`, `${BASE}us/23.png`];

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* prev */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-[#2B3138] bg-black/60 p-3 text-white transition hover:border-[#8E98A3] hover:bg-black/80"
            aria-label="Poprzednie"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          {/* image */}
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            src={images[index]}
            alt={`Realizacja ${index + 1}`}
            className="max-h-[88vh] max-w-[88vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* next */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-[#2B3138] bg-black/60 p-3 text-white transition hover:border-[#8E98A3] hover:bg-black/80"
            aria-label="Następne"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          {/* close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-[#2B3138] bg-black/60 p-2 text-white transition hover:border-[#8E98A3] hover:bg-black/80"
            aria-label="Zamknij"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" /></svg>
          </button>

          {/* counter */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-[#8A9098]">
            {index + 1} / {images.length}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();
  return (
    <div className="flex items-center gap-1">
      {LANGUAGES.map((l, index) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => setLang(l)}
            className={`text-xs uppercase tracking-widest px-1.5 py-0.5 transition-colors duration-200 ${
              lang === l
                ? "text-white"
                : "text-[#A7ADB5] hover:text-[#D8DDE3]"
            }`}
          >
            {l}
          </button>
          {index < LANGUAGES.length - 1 && (
            <span className="text-[#2B3138] text-xs select-none">|</span>
          )}
        </span>
      ))}
    </div>
  );
}

function OrvzPage() {
  const { t, locale } = useTranslation();
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % PROJECTS.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-black font-sans text-white scroll-smooth selection:bg-[#BFC7D1] selection:text-black">
      <Lightbox images={PROJECTS} index={lightboxIndex} onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
      <nav className="sticky top-0 z-50 border-b border-[#2B3138] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-6 md:px-8">
          <a href="#" aria-label="Góra strony" className="text-xl tracking-[0.28em] text-[#E9EDF2] hover:text-white transition-colors duration-300">ORVZ.EU</a>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#realizacje" className="transition-colors duration-300 hover:text-[#D8DDE3]">
                {t("nav.realizacje")}
              </a>
              <a href="#onas" className="transition-colors duration-300 hover:text-[#D8DDE3]">
                {t("nav.onas")}
              </a>
              <a href="#kontakt" className="transition-colors duration-300 hover:text-[#D8DDE3]">
                {t("nav.kontakt")}
              </a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* crossfade slideshow */}
        <AnimatePresence>
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${HERO_IMAGES[slideIndex]}')` }}
          />
        </AnimatePresence>
        {/* dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/20" />
        {/* bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />

        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-light leading-tight tracking-[0.08em] text-[#F3F5F7] md:text-7xl lg:text-8xl"
          >
            {t("hero.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#C7CCD3] md:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            href="#realizacje"
            className="mt-10 inline-block rounded-full border border-[#BFC7D1] px-8 py-3 text-[#E6EBF0] shadow-[0_0_30px_rgba(191,199,209,0.08)] transition duration-500 hover:bg-[#BFC7D1] hover:text-black"
          >
            {t("hero.cta")}
          </motion.a>
        </div>
      </section>

      <SectionShell id="realizacje" className="py-24 md:py-32">
        <SectionHeading
          eyebrow={t("realizacje.eyebrow")}
          title={t("realizacje.title")}
          description={t("realizacje.description")}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((src, index) => (
            <Reveal key={src} delay={index * 0.05}>
              <div
                className="group relative h-64 cursor-zoom-in rounded-2xl border border-[#2B3138] overflow-hidden transition duration-500 hover:-translate-y-1 hover:scale-[1.02] md:h-80"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={src}
                  alt={`Realizacja ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-black/50 p-3 backdrop-blur-sm">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-white stroke-2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" strokeLinecap="round" /></svg>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="onas" className="py-24 md:py-32">
        <SectionHeading
          eyebrow={t("onas.eyebrow")}
          title={t("onas.title")}
          description={t("onas.description")}
        />

        <div className="grid gap-8 md:grid-cols-3">
          {locale.reasons.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-[#2B3138] bg-[#11151A]">
                <img
                  src={REASONS_IMAGES[index]}
                  alt={item.title}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h4 className="mb-2 text-xl tracking-wide text-[#F1F4F6]">{item.title}</h4>
                  <p className="translate-y-4 text-sm text-[#D8DDE3] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {quickContactCardLines.map((lines, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="rounded-2xl border border-[#2B3138] p-8 text-center transition duration-500 hover:border-[#8E98A3]">
                <h4 className="mb-6 text-lg uppercase tracking-wide text-white">
                  {locale.quickCards[index].title}
                </h4>
                <div className="space-y-2 text-sm leading-relaxed text-[#C7CCD3]">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="kontakt" className="py-24 md:py-32">
        <SectionHeading
          eyebrow={t("kontakt.eyebrow")}
          title={t("kontakt.title")}
          description={t("kontakt.description")}
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.1}>
            <form className="space-y-4">
              <input
                type="text"
                placeholder={t("form.name")}
                className="w-full rounded-xl border border-[#2B3138] bg-[#11151A] px-4 py-3 focus:border-[#BFC7D1] focus:outline-none"
              />
              <input
                type="email"
                placeholder={t("form.email")}
                className="w-full rounded-xl border border-[#2B3138] bg-[#11151A] px-4 py-3 focus:border-[#BFC7D1] focus:outline-none"
              />
              <input
                type="tel"
                placeholder={t("form.phone")}
                className="w-full rounded-xl border border-[#2B3138] bg-[#11151A] px-4 py-3 focus:border-[#BFC7D1] focus:outline-none"
              />
              <textarea
                placeholder={t("form.message")}
                rows={4}
                className="w-full rounded-xl border border-[#2B3138] bg-[#11151A] px-4 py-3 focus:border-[#BFC7D1] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-xl border border-[#BFC7D1] px-6 py-3 text-[#E6EBF0] transition duration-500 hover:bg-[#BFC7D1] hover:text-black"
              >
                {t("form.submit")}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-[#2B3138] bg-[#0C0F12] p-6">
                <h4 className="mb-4 text-xs uppercase tracking-[0.24em] text-[#A7ADB5]">
                  {t("hours.title")}
                </h4>
                <ul className="space-y-2">
                  {businessHours.map((entry, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-between text-sm ${
                        i === TODAY_INDEX
                          ? "font-medium text-white"
                          : "text-[#C7CCD3]"
                      }`}
                    >
                      <span>{locale.hours.days[i]}</span>
                      <span
                        className={
                          entry.hours === null
                            ? "text-[#8A9098]"
                            : i === TODAY_INDEX
                            ? "text-white"
                            : "text-[#C7CCD3]"
                        }
                      >
                        {entry.hours ?? t("hours.closed")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </Reveal>
        </div>
      </SectionShell>

      <footer className="border-t border-[#2B3138] px-6 py-16 text-sm text-[#C7CCD3]">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-lg tracking-widest text-white">ORAZ MEBLE</h4>
            <p className="text-sm leading-relaxed text-[#A7ADB5]">
              {t("footer.brandDesc")}
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-white">{t("footer.contact")}</h5>
            <div className="space-y-2">
              {contactDetails.map((detail) => (
                <p key={`footer-${detail}`}>{detail}</p>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-white">{t("footer.company")}</h5>
            <p>NIP: 611 135 13 84</p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <IconWrapper key={label} label={label} href={href}>
                  <Icon />
                </IconWrapper>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t border-[#2B3138] pt-6 text-center text-xs text-[#8A9098]">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <OrvzPage />
    </LanguageProvider>
  );
}
