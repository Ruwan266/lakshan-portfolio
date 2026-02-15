import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border py-8 text-center">
      <p className="text-sm text-muted-foreground">{t("footer")}</p>
    </footer>
  );
};

export default Footer;
