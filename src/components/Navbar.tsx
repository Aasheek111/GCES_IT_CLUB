'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import Image from 'next/image'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/events', label: 'Events' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b">


      <div className="border-b dark:border-gray-800 h-14">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">


          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/logo.png"
              alt="GCES IT Club"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full"
            />
            <span className="text-lg font-semibold text-blue-700 dark:text-blue-400">
              GCES IT Club
            </span>
          </Link>

          {/* Top Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/notes"
              className="hover:underline text-[12px]"
            >
              NOTES
            </Link>
            <Link
              href="/contributor"
              className="hover:underline text-[12px]"
            >
              CONTRIBUTORS
            </Link>
            <Link
              href="/register"
              className="hover:underline text-[12px]"
            >
              REGISTER
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark'
                ? <Sun className="w-4 h-4" />
                : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ===== Main Navigation Bar ===== */}
      <nav className="hidden md:block h-12">
        <div className="container mx-auto px-6">
          <ul className="flex justify-end gap-10 h-14 items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="uppercase text-sm tracking-wide text-[13px]
                             text-gray-700 dark:text-gray-300
                             hover:text-blue-700 dark:hover:text-blue-400
                             transition-colors "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ===== Mobile Menu ===== */}
      {isOpen && (
        <div className="md:hidden border-t dark:border-gray-800">
          <div className="px-6 py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 dark:text-gray-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contributor"
              className="block text-gray-700 dark:text-gray-300 font-medium"
            >
              Contributors
            </Link>
            <Link
              href="/register"
              className="block text-gray-700 dark:text-gray-300 font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
