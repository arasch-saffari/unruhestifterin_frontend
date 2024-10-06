"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Logo } from "./Logo";
import { DesktopNav } from "@/components/header/DesktopNav";
import { MobileNav } from "@/components/header/MobileNav";
import { UserActions } from "@/components/header/UserActions";
import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/components/header/IconWrapper";
import { Menu, Search } from "lucide-react";

export function HeaderComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
      : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm"
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center md:w-1/4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <IconWrapper>
              <Menu className="h-6 w-6" />
            </IconWrapper>
          </Button>
          <div className="hidden md:block">
            <Logo />
          </div>
        </div>
        <div className="flex-1 flex justify-center md:hidden">
          <Logo />
        </div>
        <div className="hidden md:flex justify-center flex-1">
          <DesktopNav />
        </div>
        <div className="flex items-center justify-end md:w-1/4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Search"
          >
            <IconWrapper>
              <Search className="h-5 w-5" />
            </IconWrapper>
          </Button>
          <div className="hidden md:block">
            <UserActions theme={theme} setTheme={setTheme} mounted={mounted} />
          </div>
        </div>
      </div>
      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />
    </header>
  );
}
