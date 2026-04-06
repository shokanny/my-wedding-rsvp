import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import floralCorner from "@/assets/flower-laying-diagonal.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const GiftRegistrySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();

  return (
    <section className="section-cream py-24 md:py-32 relative overflow-hidden">
      {/* Decorative florals */}
      <motion.img
        src={floralCorner}
        alt=""
        className="absolute top-0 left-0 w-32 md:w-48 opacity-50"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={floralCorner}
        alt=""
        className="absolute bottom-0 right-0 w-32 md:w-48 opacity-50 rotate-180"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-script text-brown text-5xl md:text-6xl lg:text-7xl mb-4">
              {t(translations.registry.title, lang)}
            </h2>
            <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-10" />
          </motion.div>

          <motion.div
            className="space-y-6 font-body text-brown-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl font-script text-brown leading-relaxed">
              {t(translations.registry.presence, lang)}
            </p>

            <p className="text-sm leading-relaxed">
              {t(translations.registry.description, lang)}
            </p>

            <motion.a
              href="#"
              className="inline-block mt-8 px-10 py-3 bg-gold text-on-gold font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                alert(t(translations.registry.alertMessage, lang));
              }}
            >
              {t(translations.registry.viewRegistry, lang)}
            </motion.a>

            <p className="text-xs text-brown-light/60 mt-6 italic">
              {t(translations.registry.comingSoon, lang)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistrySection;
