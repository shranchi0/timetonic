"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowRight, ChevronRight, Mail, Menu, Moon, Sun, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Email submitted:", email)
    setEmail("")
    // Show success message or redirect
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0B] text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-black dark:border-white h-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 h-full w-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-black dark:border-white w-full"></div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-[#0A0A0B]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <span className="text-xl font-bold tracking-tight">TimeTonic</span>
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Product
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Customers
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Contact
              </a>
              <div className="h-4 w-px bg-gray-200 dark:bg-gray-700"></div>
              <a
                href="#"
                className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-sm font-medium bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Sign up
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[#0A0A0B] border-b border-gray-100 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Product
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Customers
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Contact
              </a>
              <div className="my-2 h-px bg-gray-200 dark:bg-gray-700"></div>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Log in
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Sign up
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Scheduling, simplified.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
                CC Merlin in an email, and meetings schedule themselves. No links. No friction. No hassle.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <form onSubmit={handleSubmit} className="flex w-full sm:w-auto">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full py-3 pl-10 pr-4 text-sm bg-gray-100 dark:bg-gray-800 border-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    Get Early Access
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </form>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  See How It Works
                  <ChevronRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 h-[400px] w-full flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-20 -right-16 w-40 h-40 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-xl"></div>

                  <div className="relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg max-w-md">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3">
                        <Mail className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Meeting Request</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">From: alex@example.com</div>
                      </div>
                    </div>
                    <div className="mb-4 text-sm">
                      <p className="mb-2">Hi there,</p>
                      <p className="mb-2">I'd like to schedule a meeting to discuss our project next week.</p>
                      <p>
                        Best,
                        <br />
                        Alex
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg mb-4">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Merlin suggests:</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                          Mon 10:00 AM
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                          Tue 2:30 PM
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                          Wed 11:15 AM
                        </span>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors">
                      Confirm Meeting
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-[#111112]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Scheduling meetings has never been this simple.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
              {[
                {
                  title: "CC Merlin",
                  description: "Simply CC merlin@timetonic.ai on any email where you need to schedule a meeting.",
                  icon: <Mail className="w-10 h-10 text-blue-500" />,
                },
                {
                  title: "Merlin Suggests Times",
                  description: "Merlin checks your calendar and suggests the best available times for your meeting.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Confirm & Schedule",
                  description: "Confirm a time, and Merlin automatically schedules it on your calendar.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ),
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col p-6 bg-white dark:bg-[#0A0A0B] rounded-xl border border-gray-200 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full w-fit">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">See Merlin in Action</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Watch how Merlin seamlessly handles your scheduling right inside your email.
              </p>
            </motion.div>

            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-center text-lg mb-6">Watch the 2-minute demo</p>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center">
                  Play Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-blue-600 dark:bg-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
                Let Merlin handle your scheduling
              </h2>
              <p className="text-xl text-white/80 mb-8">Stop wasting time on back-and-forth emails</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full py-3 pl-10 pr-4 text-sm bg-white dark:bg-gray-800 border-0 rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-500 bg-white dark:bg-gray-800 rounded-md sm:rounded-l-none hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                >
                  Get Early Access
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <a href="#" className="text-xl font-bold tracking-tight">
                  TimeTonic
                </a>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Let Merlin handle your scheduling.</p>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm">
                <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} TimeTonic. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

