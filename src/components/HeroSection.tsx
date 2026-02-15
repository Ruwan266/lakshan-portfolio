import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Lakshan_Ruwan_Kumarathunga_CV.pdf";
    link.download = "Lakshan_Ruwan_Kumarathunga_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="relative">
              <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30">
                <img
                  src={profileImg}
                  alt="Lakshan Kumarathunga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-start"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              {t("hero.name")}
            </h1>

            <p className="text-lg md:text-xl text-primary font-semibold mb-6">
              {t("hero.title")}
            </p>

            <p className="text-muted-foreground max-w-lg mb-8 text-base md:text-lg leading-relaxed">
              {t("hero.summary")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              
              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Download size={18} />
                {t("hero.downloadCV")}
              </button>

              {/* Contact Button */}
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 border border-primary/50 text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                <Mail size={18} />
                {t("hero.contactMe")}
              </button>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;