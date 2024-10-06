"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { animations } from "@/lib/animations";

// Mock data for events
const events = [
  {
    id: 1,
    title: "Climate Change Protest",
    category: "Protest",
    date: "2024-10-15",
    location: "City Hall Square",
    image: "https://picsum.photos/1080/720",
    description: "Join us in demanding immediate action on climate change!",
  },
  {
    id: 2,
    title: "Art for Social Change Exhibition",
    category: "Art",
    date: "2024-10-20",
    location: "Community Gallery",
    image: "https://picsum.photos/1080/800",
    description:
      "Explore powerful artworks that challenge societal norms and inspire change.",
  },
  {
    id: 3,
    title: "Inclusive Tech Talk",
    category: "Talks",
    date: "2024-10-25",
    location: "Tech Hub Auditorium",
    image: "https://picsum.photos/1082/820",
    description:
      "Learn about creating inclusive technology for a better future.",
  },
];

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "protest":
      return "bg-red-500 dark:bg-red-600";
    case "art":
      return "bg-violet-500 dark:bg-violet-600";
    case "talks":
      return "bg-purple-500 dark:bg-purple-600";
    case "culture":
      return "bg-green-500 dark:bg-green-600";
    case "diy":
      return "bg-orange-500 dark:bg-orange-600";
    case "sport":
    case "party":
      return "bg-pink-500 dark:bg-pink-600";
    default:
      return "bg-gray-500 dark:bg-gray-600";
  }
};

export function HeroSectionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#1A091F] dark:to-[#3D1D47] transition-colors duration-300">
      <AnimatePresence mode="sync">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={event.image}
              alt={event.title}
              fill
              style={{ objectFit: "cover" }}
              className="opacity-50 dark:opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent dark:from-[#1A091F] dark:to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <motion.div
                  variants={animations.slideUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <span
                    className={`inline-block px-3 py-1 mb-4 text-sm font-semibold text-white rounded-full ${getCategoryColor(
                      event.category
                    )}`}
                  >
                    {event.category}
                  </span>
                  <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white uppercase font-dosis">
                    {event.title}
                  </h1>
                  <div className="mb-8 text-lg sm:text-xl text-gray-700 dark:text-gray-200 font-open-sans">
                    {event.description}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-6 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#EC4899] to-[#D946EF] hover:from-[#D946EF] hover:to-[#EC4899] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href={`/events/${event.id}`}>
                      Learn More <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#EC4899] scale-125"
                : "bg-gray-400 dark:bg-gray-600 opacity-50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
