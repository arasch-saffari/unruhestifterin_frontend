"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function CleanModernCta() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1A091F] to-[#3D1D47] dark:from-[#2D1535] dark:to-[#1A091F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white dark:bg-[#2D1535] border-none shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl font-bold uppercase font-dosis text-[#EC4899] dark:text-white text-center">
              Veranstalter*innen aufgepasst!
            </CardTitle>
            <CardDescription className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-open-sans text-center mt-2">
              Deine Plattform für antifaschistische und soziale Bewegungen
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-gray-700 dark:text-gray-200 font-open-sans">
              Ob Demos, Workshops oder kulturelle Events – hier erreichst du 
              Mitstreiter*innen und stiftest gemeinsam Unruhe für eine bessere Welt!
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-[#EC4899] hover:bg-[#EC4899]/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Link href="/organizer-signup" className="flex items-center justify-center">
                  Event eintragen
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-open-sans flex items-center">
              Kostenlos beitreten und die Bewegung stärken
              <ArrowRight className="ml-2 h-4 w-4" />
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}