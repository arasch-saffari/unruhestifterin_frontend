import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Sun, Moon } from "lucide-react";
import { categories } from "@/lib/categories";
import { animations } from "@/lib/animations";
import { IconWrapper } from "./IconWrapper";

interface MobileNavProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

export function MobileNav({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  theme,
  setTheme,
}: MobileNavProps) {
  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetContent
        side="left"
        className="w-full h-full p-0 bg-white dark:bg-gray-900"
      >
        <SheetHeader className="border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
          <SheetTitle className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">
            UNRUHESTIFTER*IN
          </SheetTitle>
        </SheetHeader>
        <motion.div
          className="flex flex-col h-full"
          initial="closed"
          animate="open"
          exit="closed"
          variants={animations.menuItem}
        >
          <nav className="flex-grow p-6 overflow-y-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                custom={index}
                variants={animations.menuItem}
              >
                <Link
                  href={`/${category.name.toLowerCase()}`}
                  className="flex items-center py-4 px-6 rounded-lg text-xl font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span
                    className={`w-4 h-4 rounded-full ${category.color} mr-4`}
                  />
                  {category.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            className="p-6 border-t border-gray-200 dark:border-gray-700"
            variants={animations.menuItem}
            custom={categories.length + 1}
          >
            <Button
              className="w-full mb-4 py-3 text-lg bg-gradient-to-r from-red-500 to-purple-500 text-white hover:from-red-600 hover:to-purple-600 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 text-lg justify-center text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
            >
              <IconWrapper>
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 mr-2" />
                ) : (
                  <Moon className="h-5 w-5 mr-2" />
                )}
              </IconWrapper>
              {theme === "dark" ? "Light" : "Dark"} Mode
            </Button>
          </motion.div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
