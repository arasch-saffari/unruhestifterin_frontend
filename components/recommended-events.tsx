"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const recommendedEvents = [
  {
    id: 1,
    title: "Klimastreik 2024",
    category: "Protest",
    date: "2024-03-15",
    location: "Brandenburger Tor, Berlin",
    description: "Gemeinsam für Klimagerechtigkeit auf die Straße gehen.",
    image: "https://picsum.photos/500/300",
  },
  {
    id: 2,
    title: "Kunst & Aktivismus Workshop",
    category: "Art",
    date: "2024-03-20",
    location: "Kulturzentrum, Hamburg",
    description: "Kreative Methoden für sozialen Wandel erlernen.",
    image: "https://picsum.photos/400/300",
  },
  {
    id: 3,
    title: "Digitale Sicherheit für Aktivist*innen",
    category: "Talks",
    date: "2024-03-25",
    location: "Online",
    description: "Schutz vor Überwachung und digitalen Bedrohungen.",
    image: "https://picsum.photos/240/300",
  },
  {
    id: 4,
    title: "Nachbarschaftsfest",
    category: "Culture",
    date: "2024-04-01",
    location: "Stadtpark, München",
    description: "Gemeinsam feiern und Nachbarschaft stärken.",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "Upcycling-Workshop",
    category: "DIY",
    date: "2024-04-05",
    location: "Makerspace, Frankfurt",
    description: "Aus Alt mach Neu - kreative Wiederverwertung.",
    image: "https://picsum.photos/220/300",
  },
  {
    id: 6,
    title: "Solidaritätslauf",
    category: "Sport",
    date: "2024-04-10",
    location: "Olympiapark, München",
    description: "Laufen für den guten Zweck und globale Gerechtigkeit.",
    image: "https://picsum.photos/230/300",
  },
];

const categoryColors = {
  Protest: "bg-red-500 text-white",
  Art: "bg-violet-500 text-white",
  Talks: "bg-purple-500 text-white",
  Culture: "bg-green-500 text-white",
  DIY: "bg-orange-500 text-white",
  Sport: "bg-pink-500 text-white",
  Party: "bg-pink-500 text-white",
};

export function RecommendedEventsComponent() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-dosis uppercase text-gray-800 dark:text-gray-100">
          Empfohlene Veranstaltungen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedEvents.map((event) => (
            <motion.div
              key={event.id}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg cursor-pointer h-full flex flex-col">
                <div className="relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-2 right-2 ${
                      categoryColors[
                        event.category as keyof typeof categoryColors
                      ]
                    }`}
                  >
                    {event.category}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString("de-DE")}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                  <CardFooter className="p-0">
                    <Button
                      className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white transition-all duration-300"
                      variant="default"
                    >
                      Mehr erfahren
                      <ArrowRight
                        className={`ml-2 transition-transform duration-300 ${
                          hoveredEvent === event.id ? "translate-x-1" : ""
                        }`}
                      />
                    </Button>
                  </CardFooter>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
