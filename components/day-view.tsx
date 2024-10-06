"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image"; // Importieren Sie den Image-Component

// Sample data for events
const events = [
  {
    id: 1,
    title: "Klimastreik 2024",
    category: "Protest",
    date: "15.3.2024",
    time: "10:00",
    location: "Brandenburger Tor, Berlin",
    description: "Gemeinsam für Klimagerechtigkeit auf die Straße gehen.",
    image: "https://picsum.photos/260/300",
  },
  {
    id: 2,
    title: "Kunst & Aktivismus Workshop",
    category: "Art",
    date: "20.3.2024",
    time: "14:00",
    location: "Kulturzentrum, Hamburg",
    description: "Kreative Methoden für sozialen Wandel erlernen.",
    image: "https://picsum.photos/340/300",
  },
  {
    id: 3,
    title: "Digitale Sicherheit für Aktivist*innen",
    category: "Talks",
    date: "25.3.2024",
    time: "18:00",
    location: "Online",
    description: "Schutz vor Überwachung und digitalen Bedrohungen.",
    image: "https://picsum.photos/640/300",
  },
  {
    id: 4,
    title: "Nachbarschaftsfest",
    category: "Culture",
    date: "1.4.2024",
    time: "11:00",
    location: "Stadtpark, München",
    description: "Gemeinsam feiern und Nachbarschaft stärken.",
    image: "https://picsum.photos/240/340",
  },
  {
    id: 5,
    title: "Upcycling-Workshop",
    category: "DIY",
    date: "5.4.2024",
    time: "15:00",
    location: "Makerspace, Frankfurt",
    description: "Aus Alt mach Neu - kreative Wiederverwertung.",
    image: "https://picsum.photos/240/500",
  },
  {
    id: 6,
    title: "Solidaritätslauf",
    category: "Sport",
    date: "10.4.2024",
    time: "09:00",
    location: "Olympiapark, München",
    description: "Laufen für den guten Zweck und globale Gerechtigkeit.",
    image: "https://picsum.photos/244/300",
  },
];

const categoryColors = {
  Protest: "bg-red-500 text-white",
  Art: "bg-violet-500 text-white",
  Talks: "bg-purple-500 text-white",
  Culture: "bg-green-500 text-white",
  DIY: "bg-orange-500 text-white",
  Sport: "bg-pink-500 text-white",
};

export function DayViewComponent() {
  const [viewMode, setViewMode] = useState("calendar");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleViewMode = () => {
    setViewMode(viewMode === "calendar" ? "list" : "calendar");
  };

  const handleEventClick = (eventId: number) => {
    console.log(`Event clicked: ${eventId}`);
    // Hier würden Sie normalerweise zu einer Ereignisdetailseite navigieren oder ein Modal öffnen
  };

  const toggleFilter = (category: string) => {
    setActiveFilters((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredEvents = useMemo(() => {
    return activeFilters.length === 0
      ? events
      : events.filter((event) => activeFilters.includes(event.category));
  }, [activeFilters]);

  const allCategories = Array.from(
    new Set(events.map((event) => event.category))
  );

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Tagesansicht
          </h2>
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {allCategories.map((category) => (
                  <DropdownMenuCheckboxItem
                    key={category}
                    checked={activeFilters.includes(category)}
                    onCheckedChange={() => toggleFilter(category)}
                  >
                    {category}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button onClick={toggleViewMode} variant="outline" size="sm">
              {viewMode === "calendar" ? "Listenansicht" : "Kalenderansicht"}
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {viewMode === "calendar" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card
                      className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg cursor-pointer h-full flex flex-col"
                      onClick={() => handleEventClick(event.id)}
                    >
                      <div className="relative">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                        <Badge
                          className={`absolute top-3 right-3 ${
                            categoryColors[
                              event.category as keyof typeof categoryColors
                            ]
                          }`}
                        >
                          {event.category}
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl font-bold">
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                            {event.description}
                          </p>
                        </div>
                        <Button className="w-full bg-[#EC4899] hover:bg-[#D53F8C] text-white mt-auto">
                          Mehr erfahren
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredEvents.map((event) => (
                      <motion.li
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.2 },
                        }}
                        className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 cursor-pointer"
                        onClick={() => handleEventClick(event.id)}
                      >
                        <div className="flex flex-col space-y-2">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                              {event.title}
                            </h3>
                            <Badge
                              className={`${
                                categoryColors[
                                  event.category as keyof typeof categoryColors
                                ]
                              }`}
                            >
                              {event.category}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4" />
                              {event.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-2 h-4 w-4" />
                              {event.location}
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                            {event.description}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
