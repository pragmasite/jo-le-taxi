import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Clock, CheckCircle } from "lucide-react";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Jô operates 24/7
  const schedule = [
    { hours: t.hours.open24 },
    { hours: t.hours.open24 },
    { hours: t.hours.open24 },
    { hours: t.hours.open24 },
    { hours: t.hours.open24 },
    { hours: t.hours.open24 },
    { hours: t.hours.open24 },
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];

  return (
    <section id="horaires" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-medium">{t.hours.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">{t.hours.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl rounded-2xl border bg-background shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-5">
            <Clock className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="font-serif text-lg text-primary">{t.hours.header}</span>
          </div>

          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                    <span className={`font-medium ${isToday ? "text-primary" : "text-foreground"}`}>
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full whitespace-nowrap">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span className="font-medium text-accent">{item.hours}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="text-sm md:text-base">
            Service disponible 24 heures sur 24, 7 jours sur 7 pour tous vos besoins de transport
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
