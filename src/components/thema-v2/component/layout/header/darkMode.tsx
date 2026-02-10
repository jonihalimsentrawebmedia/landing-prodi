'use client'

import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { clsx } from 'clsx'

interface Props {
  className?: string
}

export const ButtonDarkMode = (props: Props) => {
  const { className } = props
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

  // ⛔ PENTING: jangan render apapun sebelum mounted
  if (!mounted) return null

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className={'p-1.5 rounded-full text-yellow-400 dark:text-white transition'}
    >
      {darkMode ? <FaMoon className={clsx(className)} /> : <FaSun className={clsx(className)} />}
    </button>
  )
}
