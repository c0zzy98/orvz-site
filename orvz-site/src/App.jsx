import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl mb-12 text-left">
      {eyebrow && (
        <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-gray-500 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-light tracking-[0.04em] text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
          {description}
        </p>
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

function IconWrapper({ children, label, href = "#" }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-800 bg-gray-950 text-gray-400 transition duration-300 hover:border-gray-600 hover:text-white hover:-translate-y-0.5"
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
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
  { label: "X", href: "#", Icon: XIcon },
];

const contactDetails = [
  "Email: orazmeble@gmail.com",
  "Telefon: +48 530 497 662",
  "Telefon: +48 502 629 060",
];

export default function OrvzPage() {
  return (
    <div className="bg-black text-white font-sans scroll-smooth min-h-screen">
      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-xl tracking-widest">ORVZ.EU</h1>
        <div className="space-x-6 text-sm">
          <a href="#realizacje" className="hover:text-gray-300 transition-colors duration-300">
            Realizacje
          </a>
          <a href="#onas" className="hover:text-gray-300 transition-colors duration-300">
            O nas
          </a>
          <a href="#kontakt" className="hover:text-gray-300 transition-colors duration-300">
            Kontakt
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.08em] leading-tight"
        >
          Meble na wymiar
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed"
        >
          Tworzymy unikalne wnętrza premium dopasowane do Twojej przestrzeni i stylu życia.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          href="#realizacje"
          className="mt-10 inline-block px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-500"
        >
          Zobacz realizacje
        </motion.a>
      </section>

      {/* REALIZACJE */}
      <section id="realizacje" className="px-6 py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Realizacje"
            title="Wybrane realizacje"
            description="Minimalizm, precyzja wykonania i materiały premium. Każdy projekt powstaje indywidualnie pod konkretną przestrzeń."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="bg-gray-900 h-64 md:h-80 rounded-2xl border border-gray-800 hover:-translate-y-1 hover:scale-[1.02] transition duration-500" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* O NAS */}
      <section id="onas" className="px-6 py-24 md:py-32 bg-gray-950">
        <Reveal>
          <SectionHeading
            eyebrow="Dlaczego my"
            title="Dlaczego warto nam zaufać"
            description="Tworzymy rozwiązania, które łączą design, funkcjonalność i najwyższą jakość wykonania."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Unikalne projektowanie",
              desc: "Każdy projekt powstaje indywidualnie, dopasowany do stylu życia i przestrzeni klienta.",
            },
            {
              title: "Rzemiosło i technologia",
              desc: "Łączymy tradycyjne rzemiosło z nowoczesnymi technologiami dla perfekcyjnego efektu.",
            },
            {
              title: "Wsparcie klienta",
              desc: "Prowadzimy klienta przez cały proces – od koncepcji po montaż.",
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group relative h-80 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
                {/* IMAGE PLACEHOLDER */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-60" />

                {/* CONTENT */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h4 className="text-xl mb-2 tracking-wide">{item.title}</h4>

                  {/* HOVER TEXT */}
                  <p className="text-sm text-gray-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                    {item.desc}
                  </p>
                </div>

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LOKALIZACJE / KONTAKT SZYBKI */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Biuro",
              lines: [
                "ul. Ludowa 16",
                "58-560 Jelenia Góra",
                "orazmeble@gmail.com",
              ],
            },
            {
              title: "Konsultacja",
              lines: [
                "Jakub Gorlach",
                "tel. 530 497 662",
                "gorlachjakub@gmail.com",
              ],
            },
            {
              title: "Projekt i wycena",
              lines: [
                "Michał Tyrański",
                "tel. 502 629 060",
                "tyranski.michal@wp.pl",
              ],
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-600 transition duration-500">
                <h4 className="text-lg tracking-wide mb-6 uppercase text-white">
                  {item.title}
                </h4>
                <div className="space-y-2 text-gray-400 text-sm leading-relaxed">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="px-6 py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Kontakt"
            title="Umów się na bezpłatną konsultację"
            description="Opowiedz nam o swojej przestrzeni, a wrócimy z propozycją dalszych kroków w ciągu 24 godzin."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal delay={0.1}>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-white"
              />

              <input
                type="email"
                placeholder="Adres email"
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-white"
              />

              <input
                type="tel"
                placeholder="Numer telefonu"
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-white"
              />

              <textarea
                placeholder="Opisz krótko projekt (np. kuchnia, garderoba, metraż, lokalizacja...)"
                rows={4}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-white"
              />

              <button
                type="submit"
                className="w-full mt-4 px-6 py-3 border border-white hover:bg-white hover:text-black transition duration-500 rounded-xl"
              >
                Umów konsultację
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-3 text-gray-400">
              {contactDetails.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}

              <div className="mt-6 text-sm text-gray-500">
                <p>Odpowiadamy zazwyczaj w ciągu 24h</p>
                <p>Realizacje premium na terenie całej Polski</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-6 py-16 text-sm text-gray-400">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-white text-lg tracking-widest mb-4">ORAZ MEBLE</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Meble na wymiar dla klientów premium. Projektujemy i realizujemy wnętrza dopasowane do Twojego stylu życia.
            </p>
          </div>

          <div>
            <h5 className="text-white mb-4">Kontakt</h5>
            <div className="space-y-2">
              {contactDetails.map((detail) => (
                <p key={`footer-${detail}`}>{detail}</p>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white mb-4">Dane firmy</h5>
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

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} ORAZ MEBLE. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
