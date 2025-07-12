import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
<nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Gulshan.dev </h1>
        

        {/* Desktop */}
        <div className="hidden md:flex space-x-6">
          <ThemeToggle/>
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-4 bg-white dark:bg-gray-900 shadow">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
