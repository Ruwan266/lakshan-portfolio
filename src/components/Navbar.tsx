import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/data/translations";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";

const langLabels: Record<Language, string> = {
  en: "English",
  ar: "العربية",
  ja: "日本語",
  zh: "中文",
};

const navKeys = ["home", "about", "education", "experience", "projects", "skills", "contact"];

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <button onClick={() => scrollTo("home")} className="text-xl font-bold gradient-text">
          LK
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navKeys.map((key) => (
            <li key={key}>
              <button
                onClick={() => scrollTo(key)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {t(`nav.${key}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-md border border-border/50 hover:border-primary/50"
            >
              <Globe size={16} />
              {langLabels[lang]}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-full mt-2 end-0 bg-popover border border-border rounded-lg shadow-xl overflow-hidden z-50 min-w-[140px]"
                >
                  {(Object.keys(langLabels) as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        setLangOpen(false);
                      }}
                      className={`block w-full text-start px-4 py-2.5 text-sm transition-colors hover:bg-secondary ${
                        lang === l ? "text-primary font-semibold bg-secondary/50" : "text-foreground"
                      }`}
                    >
                      {langLabels[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <ul className="flex flex-col gap-2 p-4">
              {navKeys.map((key) => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo(key)}
                    className="w-full text-start py-2 px-3 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                  >
                    {t(`nav.${key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
