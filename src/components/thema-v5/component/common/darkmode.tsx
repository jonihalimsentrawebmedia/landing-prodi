'use client'

import { useEffect, useState } from 'react'
import { IoSunny } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa'

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)

    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)

    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  if (!mounted) {
    return <div className="w-9 h-5 bg-gray-200 rounded-full relative" />
  }

  return (
    <div onClick={toggleDarkMode} className="flex items-center gap-2 cursor-pointer transition-all">
      <IoSunny
        className={`size-4 lg:size-5 transition-colors ${darkMode ? 'text-[#278374]' : 'text-gray-400'}`}
      />

      <div className="w-9 h-5 bg-[#278374] dark:bg-gray-800 rounded-full relative cursor-pointer">
        <div
          className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all duration-300 ${
            !darkMode ? 'left-0.5' : 'right-0.5'
          }`}
        />
      </div>

      <FaMoon
        className={`size-4 lg:size-5 transition-colors ${darkMode ? 'text-[#278374]' : 'text-gray-400'}`}
      />
    </div>
  )
}
