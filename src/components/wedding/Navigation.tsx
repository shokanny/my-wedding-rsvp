import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t, type Language } from "@/i18n/translations";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = () => setIsLangOpen(false);
    if (isLangOpen) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [isLangOpen]);

  const navLinks = [
    { label: t(translations.nav.schedule, lang), href: "/#schedule" },
    { label: t(translations.nav.stay, lang), href: "/#accommodation" },
    { label: t(translations.nav.registry, lang), href: "/#registry" },
    { label: t(translations.nav.rsvp, lang), href: "/#rsvp" },
    { label: t(translations.nav.faq, lang), href: "/#details" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: t(translations.langNames.en, lang) },
    { code: "ru", label: t(translations.langNames.ru, lang) },
    { code: "kk", label: t(translations.langNames.kk, lang) },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="font-script text-brown text-2xl">
              S & A
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-brown-light text-sm tracking-wider hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}

              {/* Language dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLangOpen(!isLangOpen);
                  }}
                  className="font-body text-brown-light text-sm tracking-wider hover:text-gold transition-colors duration-300 flex items-center gap-1"
                >
                  {lang.toUpperCase()}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      className="absolute right-0 top-full mt-2 bg-background/95 backdrop-blur-sm shadow-lg rounded-sm overflow-hidden min-w-[120px]"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                    >
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            setLang(l.code);
                            setIsLangOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 font-body text-sm tracking-wider transition-colors duration-200 ${
                            lang === l.code
                              ? "text-gold bg-muted"
                              : "text-brown-light hover:text-gold hover:bg-muted/50"
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile: language + menu button */}
            <div className="md:hidden flex items-center gap-3">
              {/* Mobile language dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLangOpen(!isLangOpen);
                  }}
                  className="text-brown text-sm font-body tracking-wider p-2"
                >
                  {lang.toUpperCase()}
                </button>
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      className="absolute right-0 top-full mt-1 bg-background/95 backdrop-blur-sm shadow-lg rounded-sm overflow-hidden min-w-[110px] z-50"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                    >
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            setLang(l.code);
                            setIsLangOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 font-body text-sm transition-colors ${
                            lang === l.code
                              ? "text-gold bg-muted"
                              : "text-brown-light hover:text-gold"
                          }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                className="text-brown p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 flex flex-col gap-1.5">
                  <span
                    className={`block h-0.5 bg-brown transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-brown transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-brown transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-script text-brown text-3xl hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
