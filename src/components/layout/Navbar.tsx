"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { Bars3Icon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/#about" },
  { name: "Proyectos", href: "/#projects" },
  { name: "Experiencia", href: "/#experience" },
  { name: "Formación", href: "/#education" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-darkBg/80 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}>
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-sea">
            Teffi<span className="text-cream">Dev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-blueDark dark:text-grayLight hover:text-sea dark:hover:text-sea transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              className="text-blueDark dark:text-grayLight"
              onClick={() => setIsMobileMenuOpen(true)}>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        navigation={navigation}
      />
    </header>
  );
}
