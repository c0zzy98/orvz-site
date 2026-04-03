import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl mb-12 text-left">
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#A7ADB5] md:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-light leading-tight tracking-[0.04em] text-[#F1F4F6] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#C7CCD3] md:text-lg">
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

const reasons = [
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
];

const quickContactCards = [
  {
    title: "Biuro",
    lines: ["ul. Ludowa 16", "58-560 Jelenia Góra", "orazmeble@gmail.com"],
  },
  {
    title: "Konsultacja",
    lines: ["Jakub Gorlach", "tel. 530 497 662", "gorlachjakub@gmail.com"],
  },
  {
    title: "Projekt i wycena",
    lines: ["Michał Tyrański", "tel. 502 629 060", "tyranski.michal@wp.pl"],
  },
];

const realizations = [1, 2, 3, 4, 5, 6];

export default function OrvzPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white scroll-smooth selection:bg-[#BFC7D1] selection:text-black">
      <nav className="sticky top-0 z-50 border-b border-[#2B3138] bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-8">
          <h1 className="text-xl tracking-[0.28em] text-[#E9EDF2]">ORVZ.EU</h1>
          <div className="space-x-6 text-sm">
            <a href="#realizacje" className="transition-colors duration-300 hover:text-[#D8DDE3]">
              Realizacje
            </a>
            <a href="#onas" className="transition-colors duration-300 hover:text-[#D8DDE3]">
              O nas
            </a>
            <a href="#kontakt" className="transition-colors duration-300 hover:text-[#D8DDE3]">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      <SectionShell className="min-h-[90vh] flex items-center">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-light leading-tight tracking-[0.08em] text-[#F3F5F7] md:text-7xl lg:text-8xl"
          >
            Meble na wymiar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#C7CCD3] md:text-lg"
          >
            Tworzymy unikalne wnętrza premium dopasowane do Twojej przestrzeni i stylu życia.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            href="#realizacje"
            className="mt-10 inline-block rounded-full border border-[#BFC7D1] px-8 py-3 text-[#E6EBF0] shadow-[0_0_30px_rgba(191,199,209,0.08)] transition duration-500 hover:bg-[#BFC7D1] hover:text-black"
          >
            Zobacz realizacje
          </motion.a>
        </div>
      </SectionShell>

      <SectionShell id="realizacje" className="py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Realizacje"
            title="Wybrane realizacje"
            description="Minimalizm, precyzja wykonania i materiały premium. Każdy projekt powstaje indywidualnie pod konkretną przestrzeń."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {realizations.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="h-64 rounded-2xl border border-[#2B3138] bg-[#11151A] transition duration-500 hover:-translate-y-1 hover:scale-[1.02] md:h-80" />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="onas" className="py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Dlaczego my"
            title="Dlaczego warto nam zaufać"
            description="Tworzymy rozwiązania, które łączą design, funkcjonalność i najwyższą jakość wykonania."
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="group relative h-80 overflow-hidden rounded-2xl border border-[#2B3138] bg-[#11151A]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2F3640] to-black opacity-60" />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-500 group-hover:opacity-100" />
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
          {quickContactCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="rounded-2xl border border-[#2B3138] p-8 text-center transition duration-500 hover:border-[#8E98A3]">
                <h4 className="mb-6 text-lg uppercase tracking-wide text-white">{item.title}</h4>
                <div className="space-y-2 text-sm leading-relaxed text-[#C7CCD3]">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="kontakt" className="py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Kontakt"
            title="Umów się na bezpłatną konsultację"
            description="Opowiedz nam o swojej przestrzeni, a wrócimy z propozycją dalszych kroków w ciągu 24 godzin."
          />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.1}>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="w-full rounded-xl border border-[#2B3138] bg-[#11151A] px-4 py-3 focus:border-[#BFC7D1] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Adres email"
                className="w-full rounded-xl border border-[#2B3138] bg-[#11151A] px-4 py-3 focus:border-[#BFC7D1] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Numer telefonu"
                className="w-full rounded-xl border border-[#2B3138] bg-[#11151A] px-4 py-3 focus:border-[#BFC7D1] focus:outline-none"
              />
              <textarea
                placeholder="Opisz krótko projekt (np. kuchnia, garderoba, metraż, lokalizacja...)"
                rows={4}
                className="w-full rounded-xl border border-[#2B3138] bg-[#11151A] px-4 py-3 focus:border-[#BFC7D1] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-xl border border-[#BFC7D1] px-6 py-3 text-[#E6EBF0] transition duration-500 hover:bg-[#BFC7D1] hover:text-black"
              >
                Umów konsultację
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-3 text-[#C7CCD3]">
              {contactDetails.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
              <div className="mt-6 text-sm text-[#A7ADB5]">
                <p>Odpowiadamy zazwyczaj w ciągu 24h</p>
                <p>Realizacje premium na terenie całej Polski</p>
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
              Meble na wymiar dla klientów premium. Projektujemy i realizujemy wnętrza dopasowane do Twojego stylu życia.
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-white">Kontakt</h5>
            <div className="space-y-2">
              {contactDetails.map((detail) => (
                <p key={`footer-${detail}`}>{detail}</p>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-white">Dane firmy</h5>
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
          © {new Date().getFullYear()} ORAZ MEBLE. Wszelkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
