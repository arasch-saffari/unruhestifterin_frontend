"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";

export function FooterComponent() {
  return (
    <motion.footer
      variants={animations.fadeIn}
      initial="initial"
      animate="animate"
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-8 md:py-12 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            className="mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="text-pink-600 dark:text-pink-600 font-bold tracking-wider font-dosis uppercase"
            >
              Unruhestifter*in
            </Link>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-open-sans">
              Empowering social movements
            </div>
          </motion.div>
          <div className="flex space-x-6">
            <SocialIcon
              href="https://facebook.com"
              icon={<Facebook size={24} />}
              label="Facebook"
            />
            <SocialIcon
              href="https://instagram.com"
              icon={<Instagram size={24} />}
              label="Instagram"
            />
            <SocialIcon
              href="https://twitter.com"
              icon={<Twitter size={24} />}
              label="Twitter"
            />
            <SocialIcon
              href="https://youtube.com"
              icon={<Youtube size={24} />}
              label="YouTube"
            />
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0 font-open-sans">
            © {new Date().getFullYear()} Unruhestifter*in. All rights reserved.
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-sm font-open-sans">
            <AnimatedLink href="/about">About Us</AnimatedLink>
            <AnimatedLink href="/privacy">Privacy Policy</AnimatedLink>
            <AnimatedLink href="/imprint">Imprint</AnimatedLink>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
}

// Adding default export to support both import styles
export default FooterComponent;

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
      aria-label={label}
      variants={animations.scale}
      whileHover="hover"
      whileTap="tap"
    >
      {icon}
    </motion.a>
  );
}

function AnimatedLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={href}
        className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-600 transition-colors duration-300"
      >
        {children}
      </Link>
    </motion.span>
  );
}
