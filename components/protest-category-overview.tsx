"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  List,
  LayoutGrid,
  Calendar,
  MapPin,
  Share2,
  Heart,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const protestEvents = [
  {
    id: 1,
    title: "Climate Justice Now",
    date: "2024-03-15",
    location: "City Hall",
    price: 0,
    image: "https://picsum.photos/260/300",
    category: "Protest",
  },
  {
    id: 2,
    title: "March for Equality",
    date: "2024-03-20",
    location: "Main Street",
    price: 5,
    image: "https://picsum.photos/340/300",
    category: "Protest",
  },
  {
    id: 3,
    title: "Stop the War Rally",
    date: "2024-03-25",
    location: "Peace Park",
    price: 0,
    image: "https://picsum.photos/340/300",
  },
  {
    id: 4,
    title: "Workers' Rights Demonstration",
    date: "2024-04-01",
    location: "Union Square",
    price: 2,
    image: "https://picsum.photos/340/300",
  },
  {
    id: 5,
    title: "Education for All Protest",
    date: "2024-04-05",
    location: "State Capitol",
    price: 0,
    image: "https://picsum.photos/340/300",
  },
  {
    id: 6,
    title: "Housing Crisis Awareness March",
    date: "2024-04-10",
    location: "Downtown",
    price: 3,
    image: "https://picsum.photos/340/300",
  },
  {
    id: 7,
    title: "Digital Privacy Protection Rally",
    date: "2024-04-15",
    location: "Tech Hub",
    price: 0,
    image: "https://picsum.photos/340/300",
  },
  {
    id: 8,
    title: "Environmental Cleanup Protest",
    date: "2024-04-20",
    location: "City Park",
    price: 0,
    image: "https://picsum.photos/340/300",
  },
  {
    id: 9,
    title: "LGBTQ+ Rights March",
    date: "2024-04-25",
    location: "Rainbow Square",
    price: 5,
    image: "https://picsum.photos/340/300",
  },
  {
    id: 10,
    title: "Anti-Corruption Demonstration",
    date: "2024-05-01",
    location: "Government Center",
    price: 0,
    image: "https://picsum.photos/340/300",
  },
  {
    id: 11,
    title: "Racial Equality Protest",
    date: "2024-05-05",
    location: "MLK Boulevard",
    price: 2,
    image: "https://picsum.photos/340/300",
  },
  {
    id: 12,
    title: "Healthcare Reform Rally",
    date: "2024-05-10",
    location: "Hospital Plaza",
    price: 0,
    image: "https://picsum.photos/340/300",
  },
];

export default function ProtestCategoryOverview() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"date" | "price">("date");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 12;

  const sortedEvents = [...protestEvents].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else {
      return a.price - b.price;
    }
  });

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = sortedEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <nav
        className="flex mb-4 text-gray-600 dark:text-gray-300"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </Link>
          </li>

          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4" />
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Protest
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-center uppercase font-dosis text-gray-800 dark:text-gray-100">
        Protest Veranstaltungen
      </h1>

      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-4">
          <Select
            value={sortBy}
            onValueChange={(value: "date" | "price") => setSortBy(value)}
          >
            <SelectTrigger className="w-[180px] bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
              <SelectValue placeholder="Sortieren nach" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Datum</SelectItem>
              <SelectItem value="price">Preis</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {viewMode === "grid" ? (
              <List className="w-4 h-4" />
            ) : (
              <LayoutGrid className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {viewMode === "grid" ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {currentEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
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
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-green-500" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <MapPin className="w-4 h-4 mr-2 text-red-500" />
                        {event.location}
                      </div>
                    </div>
                    <div className="mt-2 font-bold text-right text-blue-600 dark:text-blue-400">
                      {event.price === 0 ? "Kostenlos" : `${event.price} €`}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-2 bg-gray-100 dark:bg-gray-700">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400"
                    >
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {currentEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {event.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />{" "}
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" /> {event.location}
                    </span>
                  </div>
                  <div className="mt-2 font-bold text-right text-gray-800 dark:text-white">
                    {event.price === 0 ? "Kostenlos" : `${event.price} €`}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-300"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-300"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-300"
                  >
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center mt-8">
        <nav className="inline-flex rounded-md shadow">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          {Array.from({
            length: Math.ceil(protestEvents.length / eventsPerPage),
          }).map((_, index) => (
            <Button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium ${
                currentPage === index + 1
                  ? "text-blue-600 bg-blue-50 dark:bg-blue-900 dark:text-blue-200"
                  : "text-gray-500 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(protestEvents.length / eventsPerPage)
            }
            className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </nav>
      </div>
    </div>
  );
}
