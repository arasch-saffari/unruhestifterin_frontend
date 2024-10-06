"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { animations } from "@/lib/animations";

// Fügen Sie diese Zeile am Anfang der Datei hinzu, um die Rechtschreibprüfung für deutsche Wörter zu deaktivieren
/* cspell:disable */

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(currentDate);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4 text-gray-800 dark:text-pink-500 transition-colors duration-300">
      <motion.div
        variants={animations.slideUp}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="w-full max-w-md text-center"
      >
        <Calendar className="w-16 h-16 mx-auto text-pink-500 mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-dosis uppercase text-pink-500">
          404
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mb-6 font-dosis uppercase">
          Seite nicht gefunden
        </h2>
        <p className="text-lg mb-6 font-open-sans">
          Hoppla! Diese Seite ist verschwunden, aber unser Kampf gegen
          Faschismus geht weiter.
        </p>
        <motion.div
          variants={animations.scale}
          initial="initial"
          animate="animate"
          className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-6"
        >
          <p className="text-sm text-gray-600 dark:text-pink-300">
            Aktuelle Zeit des Widerstands:
          </p>
          <p className="text-lg font-bold text-pink-500">{formattedDate}</p>
        </motion.div>
        <Link href="/">
          <Button
            variant="outline"
            size="lg"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-none font-open-sans"
          >
            <ArrowLeft className="mr-2" /> Zurück zum Kalender
          </Button>
        </Link>
        <p className="mt-6 text-sm font-open-sans text-gray-600 dark:text-pink-300">
          Erinnere dich: Antifaschismus ist eine tägliche Praxis, nicht nur ein
          Datum im Kalender.
        </p>
      </motion.div>
    </div>
  );
}
