import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import faq1 from "@/assets/faq-1.png";
import faq2 from "@/assets/faq-2.png";
import faq3 from "@/assets/faq-3.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations, t } from "@/i18n/translations";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();

  const faqs = [
    {
      question: t(translations.faq.whereQuestion, lang),
      answer: t(translations.faq.whereAnswer, lang),
      image: faq1,
      link: t(translations.faq.mapLink, lang),
    },
    {
      question: t(translations.faq.whenQuestion, lang),
      answer: t(translations.faq.whenAnswer, lang),
      image: faq2,
    },
    {
      question: t(translations.faq.dressQuestion, lang),
      answer: t(translations.faq.dressAnswer, lang),
      image: faq3,
    },
  ];

  return (
    <section id="details" className="section-gold py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-on-gold text-5xl md:text-6xl lg:text-7xl mb-4">
            {t(translations.faq.title, lang)}
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-cream to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <motion.img
                src={faq.image}
                alt=""
                className="w-32 h-32 mx-auto mb-6 brightness-[3] grayscale invert contrast-150"
                whileHover={{ scale: 1.1 }}
              />
              <h3 className="font-script text-on-gold text-xl md:text-2xl mb-4">
                {faq.question}
              </h3>
              <p className="font-body text-on-gold text-sm leading-relaxed">
                {faq.answer}
              </p>
              {"link" in faq && faq.link && (
                <a
                  href={faq.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 font-body text-on-gold text-xs tracking-widest uppercase border-b border-on-gold/40 hover:border-on-gold transition-colors"
                >
                  {t(translations.faq.viewOnMap, lang)}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
