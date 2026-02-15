import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";

/* ================= COMMON ================= */

const SectionTitle = ({ children }: { children: string }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold mb-12 text-center"
  >
    {children}
  </motion.h2>
);

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ================= ABOUT ================= */

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle>{t("about.title")}</SectionTitle>

        <motion.div {...fadeUp} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl space-y-4">
          <p className="text-gray-300">{t("about.p1")}</p>
          <p className="text-gray-400">{t("about.p2")}</p>
        </motion.div>
      </div>
    </section>
  );
};

/* ================= EDUCATION ================= */

export const EducationSection = () => {
  const { t } = useLanguage();
  const items = t("education.items");

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{t("education.title")}</SectionTitle>

        <div className="space-y-6">
          {items.map((item: any, i: number) => (
            <motion.div key={i} {...fadeUp} className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="text-blue-400">{item.school}</p>
              <p className="text-gray-400 text-sm">{item.year}</p>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= EXPERIENCE ================= */

export const ExperienceSection = () => {
  const { t } = useLanguage();
  const items = t("experience.items");

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{t("experience.title")}</SectionTitle>

        <div className="space-y-6">
          {items.map((item: any, i: number) => (
            <motion.div key={i} {...fadeUp} className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="text-blue-400">{item.company}</p>
              <p className="text-gray-400 text-sm">{item.period}</p>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= SKILLS ================= */

export const SkillsSection = () => {
  const { t } = useLanguage();
  const categories = t("skills.categories");

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{t("skills.title")}</SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat: any, i: number) => (
            <motion.div key={i} {...fadeUp} className="bg-white/5 p-6 rounded-2xl">
              <h3 className="font-semibold mb-3">{cat.name}</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {cat.items.map((skill: string, index: number) => (
                  <li key={index}>• {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= CONTACT ================= */

/* ================= CONTACT ================= */

export const ContactSection = () => {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_em5r06w",
        "template_eq45xbj",
        form.current,
        "cgqp4e4gG2Gqt_kZB"
      )
      .then(() => {
        alert("Message Sent Successfully 🚀");
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send ❌");
      });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-xl mx-auto">
        <SectionTitle>{t("contact.title")}</SectionTitle>

        {/* ===== CONTACT FORM ===== */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl space-y-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder={t("contact.namePlaceholder")}
            required
            className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 text-white"
          />

          <input
            type="email"
            name="from_email"
            placeholder={t("contact.emailPlaceholder")}
            required
            className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 text-white"
          />

          <textarea
            name="message"
            placeholder={t("contact.messagePlaceholder")}
            required
            rows={5}
            className="w-full p-3 rounded-lg bg-black/30 border border-gray-600 text-white"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold"
          >
            {t("contact.send")}
          </button>
        </form>

        {/* ===== SOCIAL LINKS ===== */}
        <div className="mt-10 bg-white/5 p-6 rounded-2xl space-y-4 text-gray-300">

          {/* WhatsApp */}
          <a
            href="https://wa.me/971543645103"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-green-400 transition"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
            <span>+971 5436 45103</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/lakshan.kumarathunga.376142"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <FaFacebook className="text-2xl text-blue-500" />
            <span>Facebook Profile</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lakshan-kumarathunga-1039a8264"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-300 transition"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
            <span>LinkedIn Profile</span>
          </a>

        </div>
      </div>
    </section>
  );
};