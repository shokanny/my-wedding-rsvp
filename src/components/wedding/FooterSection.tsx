import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import floralCorner from "@/assets/flower-laying-diagonal.png";
import flowerDecor from "@/assets/right-bottom-flower.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { lang } = useLanguage();

  return (
    <footer className="section-gold py-12 md:py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.img
        src={floralCorner}
        alt=""
        className="absolute top-0 left-0 w-32 opacity-30"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={floralCorner}
        alt=""
        className="absolute top-0 right-0 w-32 opacity-30 -scale-x-100"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
      />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-on-gold text-5xl md:text-6xl lg:text-7xl mb-6">
            {t(translations.footer.cantWait, lang)}
          </h2>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-script text-on-gold text-3xl md:text-4xl mb-2">
            {t(translations.footer.names, lang)}
          </p>
          <p className="font-body text-on-gold/80 text-sm tracking-widest">
            {t(translations.footer.withLove, lang)}
          </p>
        </motion.div>

        {/* Bottom florals */}
        <motion.img
          src={flowerDecor}
          alt=""
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 opacity-40 flower-silver"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    </footer>
  );
};

export default FooterSection;
