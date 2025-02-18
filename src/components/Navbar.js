"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { name: "Hero", path: "/hero" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-br from-gray-900 to-blue-900 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Make "My Portfolio" a Link */}
        <Link
          href="/"
          className="text-white text-xl font-bold hover:opacity-80"
        >
          My Portfolio
        </Link>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          {/* Hamburger Icon */}
          {!isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            // Cross Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`text-white text-lg ${
                  pathname === link.path
                    ? "font-bold border-b-2 border-white"
                    : "hover:opacity-80"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation (Hamburger Menu) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-gradient-to-br from-gray-900 to-blue-900 p-4 shadow-md z-10">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`text-white text-lg ${
                      pathname === link.path
                        ? "font-bold border-b-2 border-white"
                        : "hover:opacity-80"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu when link is clicked
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
