'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-6 flex justify-between items-center relative z-50">
      <img src="/logo.avif" alt="Wapung Farm Fresh Logo" className="h-12 ml-6" />

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center flex-grow space-x-10">
        {[
          { text: 'Home', href: '/' },
          { text: 'Farm to Business', href: '/farm-to-business' },
          { text: 'Farm to Customer', href: '/farm-to-customer' },
          { text: 'Stay With Us', href: '/stay-with-us' },
        ].map((item, index) => (
          <Link key={index} href={item.href}>
            <span className="text-lg text-gray-800 hover:text-orange-500 font-semibold transition duration-200">
              {item.text}
            </span>
          </Link>
        ))}
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden mr-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-10 h-10 flex items-center justify-center group z-50"
        >
          <div className="relative w-8 h-6">
            <span
              className={`absolute h-1 w-full bg-gray-800 rounded transition-all duration-300 ${
                isOpen ? 'rotate-45 top-2.5' : 'top-0'
              }`}
            ></span>
            <span
              className={`absolute h-1 w-full bg-gray-800 rounded transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'top-2.5'
              }`}
            ></span>
            <span
              className={`absolute h-1 w-full bg-gray-800 rounded transition-all duration-300 ${
                isOpen ? '-rotate-45 top-2.5' : 'top-5'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 z-40 transition-all duration-500">
          {[
            { text: 'Home', href: '/' },
            { text: 'Farm to Business', href: '/farm-to-business' },
            { text: 'Farm to Customer', href: '/farm-to-customer' },
            { text: 'Stay With Us', href: '/stay-with-us' },
          ].map((item, index) => (
            <div key={index} className="text-center w-full px-10">
              <Link href={item.href}>
                <span
                  className="text-2xl font-semibold text-gray-800 hover:text-orange-500 transition duration-200 block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </span>
              </Link>
              {index < 3 && <div className="border-b border-gray-300 w-3/4 mx-auto mt-2"></div>}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}