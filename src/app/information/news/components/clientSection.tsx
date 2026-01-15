'use client'

import { SectionNews } from '@/app/information/news/components/section'
import { MoreNews } from '@/app/information/news/components/MoreNews'
import { Suspense, useState } from 'react'

export const ClientSection = () => {
  const [notIncludeId, setNotIncludeId] = useState('')

  return (
    <>
      <SectionNews setNotIncludeId={setNotIncludeId} />
      <Suspense>
        <MoreNews notIncludeId={notIncludeId} />
      </Suspense>
    </>
  )
}
