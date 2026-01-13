'use client'

import { UseGetContactUsProfile } from '@/app/profile/contact-us/hooks'
import { Card, CardContent } from '@/components/ui/card'
import { HiMapPin } from 'react-icons/hi2'
import { MdMail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { SkeletonContactUs } from '@/app/profile/contact-us/components/skeleton'

export const SectionContactUsProfile = () => {
  const { contactUse, loading } = UseGetContactUsProfile()

  return (
    <>
      <div className={'space-y-5'}>
        {loading ? (
          <SkeletonContactUs />
        ) : (
          <>
            <Card className={'p-2'}>
              <CardContent className={'p-2 flex flex-col gap-2.5'}>
                <p className="text-2xl font-semibold">Hubungi Kami</p>
                <p className="flex items-center gap-2">
                  <HiMapPin className={'size-4'} />
                  {contactUse?.alamat}
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className={'size-4'} />
                  {contactUse?.no_telepon}
                </p>
                <p className="flex items-center gap-2">
                  <MdMail className={'size-4'} />
                  {contactUse?.email}
                </p>
              </CardContent>
            </Card>

            <iframe src={contactUse?.link_google_map} className={'w-full h-[400px] rounded'} />

            <div className="flex items-center mt-5 justify-start">
              <Link href={'/profile/gallery'}>
                <Button variant={'outline'} className={'rounded-full border border-primary'}>
                  <ArrowLeft className={'size-4'} />
                  Galeri
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}
