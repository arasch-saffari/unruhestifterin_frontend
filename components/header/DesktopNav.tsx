import { motion } from "framer-motion";
import Link from "next/link";
import { categories } from "@/lib/categories";

interface Category {
  name: string;
  color: string;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Über uns", href: "/about" },
  { name: "Kontakt", href: "/contact" },
  { name: "Proteste", href: "/protests" }, // Neuer Eintrag
];

export function DesktopNav() {
  return (
    <nav className="hidden md:flex justify-center flex-grow">
      <div className="flex space-x-1">
        {categories.map((category: Category) => (
          <motion.div
            key={category.name}
            className="relative"
            whileHover="hover"
          >
            <motion.div
              variants={{
                hover: {
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                },
              }}
            >
              <Link
                href={`/${category.name.toLowerCase()}`}
                className="px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                {category.name}
              </Link>
            </motion.div>
            <motion.div
              className={`absolute bottom-0 left-0 w-full h-0.5 ${category.color}`}
              initial={{ scaleX: 0 }}
              variants={{
                hover: {
                  scaleX: 1,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                },
              }}
            />
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
