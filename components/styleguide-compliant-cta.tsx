"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Megaphone } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { colors } from "@/lib/colors";

const GradientBackground = ({ theme }: { theme: string | undefined }) => {
  const darkGradients = [
    `linear-gradient(45deg, ${colors.gray[900]}, ${colors.gray[800]})`,
    `linear-gradient(45deg, ${colors.gray[800]}, ${colors.gray[700]})`,
    `linear-gradient(45deg, ${colors.gray[900]}, ${colors.gray[700]})`,
  ];

  const lightGradients = [
    `linear-gradient(45deg, ${colors.gray[50]}, ${colors.gray[100]})`,
    `linear-gradient(45deg, ${colors.gray[100]}, ${colors.gray[200]})`,
    `linear-gradient(45deg, ${colors.gray[50]}, ${colors.gray[200]})`,
  ];

  const gradients = theme === "dark" ? darkGradients : lightGradients;

  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={{
        background: gradients,
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

export function StyleguideCompliantCta() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <GradientBackground theme={theme} />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold uppercase font-dosis text-primary dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Veranstalter*innen, vereinigt euch!
          </motion.h2>
          <motion.div
            className="text-lg sm:text-xl text-primary/80 dark:text-white/80 font-open-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Du planst Demos, Workshops oder kulturelle Events gegen Faschismus
            und Unterdrückung? Hier findest du die Plattform, um deine
            Veranstaltungen zu bewerben und mehr Mitstreiter*innen zu erreichen.
            Gemeinsam stiften wir Unruhe für eine bessere Welt!
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#EC4899] hover:bg-[#EC4899]/90 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
            >
              <Link
                href="/organizer-signup"
                className="flex items-center justify-center"
              >
                Event eintragen
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="text-sm text-primary/70 dark:text-white/70 font-open-sans">
              Kostenlos, solidarisch und mit maximaler Reichweite!
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center space-x-2 text-sm text-primary/70 dark:text-white/70 font-open-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Megaphone className="h-4 w-4" />
            <div>
              Deine Veranstaltung, unser gemeinsamer Kampf für Gerechtigkeit!
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
