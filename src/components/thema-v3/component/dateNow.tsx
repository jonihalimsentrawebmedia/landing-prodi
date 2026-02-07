'use client'

import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export const LiveDateTime = ({ className }: { className?: string }) => {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date()) // set pertama kali di client

    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // ⛔ JANGAN render apapun saat SSR
  if (!now) return null

  return <p className={className}>{format(now, 'EEEE, dd MMMM yyyy, HH:mm:ss', { locale: id })}</p>
}
