import { IoMdSunny } from 'react-icons/io'
import { Switch } from '@/components/ui/switch'
import { FaMoon } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useMobile } from '@/hooks'

export const DarkModeTheme3 = () => {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const { isMobile } = useMobile()

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
    <>
      <div className={'flex items-center gap-1.5 pr-2 lg:pr-0'}>
        <IoMdSunny className={'size-3 lg:size-4 text-white'} />
        <Switch size={isMobile ? 'sm' : 'default'} checked={darkMode} onClick={toggleDarkMode} />
        <FaMoon className={'size-3 lg:size-4 text-white'} />
      </div>
    </>
  )
}
