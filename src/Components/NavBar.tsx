import React, { useState } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute w-full bg-black z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="mb-4 md:mb-0">
          <span className="text-2xl font-bold text-green-500">Memory Lane</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 ml-auto pr-8">
          <Link href="/" className={navItemStyle}>
            Home
          </Link>
          <div className="relative group">
            <button className={`${navItemStyle} focus:outline-none`}>
              About Us
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="/ourmission" className={dropdownItemStyle}>
                  Mission
                </Link>
                <Link href="/team" className={dropdownItemStyle}>
                  Team
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className={`${navItemStyle} focus:outline-none`}>
              Solutions
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="/reminiscence" className={dropdownItemStyle}>
                  Reminiscence
                </Link>
                <Link href="/medtrackerpage" className={dropdownItemStyle}>
                  Med Tracker
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isMenuOpen ? 'fixed inset-0 bg-black z-40 flex flex-col justify-start pt-24' : 'hidden'} md:hidden`}>
        <button 
          className="absolute top-8 right-8 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="space-y-4 px-8">
          <Link href="/" className="block text-xl text-white hover:text-green-500" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <div className="space-y-2">
            <h3 className="text-green-500 font-semibold">About Us</h3>
            <Link href="/ourmission" className="block text-white hover:text-green-500" onClick={() => setIsMenuOpen(false)}>
              Mission
            </Link>
            <Link href="/team" className="block text-white hover:text-green-500" onClick={() => setIsMenuOpen(false)}>
              Team
            </Link>
          </div>
          <div className="space-y-2">
            <h3 className="text-green-500 font-semibold">Solutions</h3>
            <Link href="/reminiscence" className="block text-white hover:text-green-500" onClick={() => setIsMenuOpen(false)}>
              Reminiscence
            </Link>
            <Link href="/medtrackerpage" className="block text-white hover:text-green-500" onClick={() => setIsMenuOpen(false)}>
              Med Tracker
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const navItemStyle = "text-white hover:text-green-500 transition-colors";
const dropdownItemStyle = "block px-4 py-2 text-sm text-white hover:bg-green-500 hover:text-white";

export default NavBar;