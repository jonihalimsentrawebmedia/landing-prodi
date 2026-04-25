'use client'

import { IoLocationSharp, IoMailSharp } from 'react-icons/io5'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { UseGetContactUsProfile } from '@/app/profile/contact-us/hooks'
import { UseGetFaqCategory } from '@/app/contact/hooks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEffect, useState } from 'react'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import FormContactTheme6 from '@/components/thema-V6/contact/contact-section/form'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { cn } from '@/lib/utils'
import { FaqListDataV7 } from '@/components/thema-V7/contact/faqList'
import { clsx } from 'clsx'

const ContactSectionV10 = () => {
  const { contactUse, loading: load2 } = UseGetContactUsProfile()
  const { faqCategory, loading: load1 } = UseGetFaqCategory()

  const [category, setCategory] = useState('')

  useEffect(() => {
    if (faqCategory) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategory(faqCategory?.[0]?.slug)
    }
  }, [faqCategory])

  const loading = load1 || load2
  if (loading) return <></>

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start w-full gap-8 mt-5">
        <div className="w-full lg:w-1/2">
          <div className="p-4 bg-white rounded-lg space-y-4 shadow drop-shadow-2xl">
            <p className="text-2xl font-semibold text-primary underline underline-offset-8 decoration-yellow-500">
              Butuh Bantuan ?
            </p>
            <p>
              Jangan ragu untuk menghubungi kami melalui form berikut. Tuliskan pertanyaan atau
              kendala Anda, dan tim kami akan membantu secepatnya
            </p>
            <FormContactTheme6 btnClassname={'bg-primary hover:bg-primary text-white'} />
          </div>
        </div>
        <div className={'w-full lg:w-1/2 space-y-4'}>
          <p className="text-2xl font-semibold text-primary underline underline-offset-8 decoration-yellow-500">
            Kontak & Alamat
          </p>

          <ul className={'mt-4 grid lg:grid-cols-2 gap-4'}>
            <li
              className={
                'flex items-center gap-3 border-gray-500 rounded-md border p-4 lg:col-span-2'
              }
            >
              <div className="p-2 bg-primary text-white rounded-md w-fit">
                <IoLocationSharp className={'size-5'} />
              </div>
              <div>
                <p className="text-sm text-primary">Alamat</p>
                <p className={'text-sm'}>{contactUse?.alamat}</p>
              </div>
            </li>
            <li className={'flex items-center gap-3 border-gray-500 rounded-md border p-4'}>
              <div className="p-2 bg-primary text-white rounded-md w-fit">
                <BsFillTelephoneFill className={'size-5'} />
              </div>
              <div>
                <p className="text-sm text-primary">Telepon</p>
                <p className={'text-sm'}>{contactUse?.no_telepon}</p>
              </div>
            </li>

            <li className={'flex items-center gap-3 border-gray-500 rounded-md border p-4'}>
              <div className="p-2 bg-primary text-white rounded-md w-fit">
                <IoMailSharp className={'size-5'} />
              </div>
              <div>
                <p className="text-sm text-primary">Email</p>
                <p className={'text-sm'}>{contactUse?.email}</p>
              </div>
            </li>
          </ul>

          <ul className={'flex gap-3 mt-5'}>
            <li className={'p-2 bg-primary text-white w-fit rounded'}>
              <FaFacebook className={'size-6'} />
            </li>
            <li className={'p-2 bg-primary text-white w-fit rounded'}>
              <FaYoutube className={'size-6'} />
            </li>
            <li className={'p-2 bg-primary text-white w-fit rounded'}>
              <FaInstagram className={'size-6'} />
            </li>
            <li className={'p-2 bg-primary text-white w-fit rounded'}>
              <FaTwitter className={'size-6'} />
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <TitleLine text={'FAQ (Frequently Asked Questions)'} />
      </div>

      <Tabs
        className={clsx(
          'bg-transparent dark:bg-gray-800 w-full mt-5 flex flex-col items-start',
          'lg:flex-row! gap-5'
        )}
        value={category}
        onValueChange={setCategory}
      >
        <TabsList className={'w-full flex h-full lg:flex-col lg:max-w-[200px] text-start gap-2 bg-white shadow p-4'}>
          {faqCategory?.map((item, k) => (
            <TabsTrigger
              key={k}
              value={item?.slug}
              className={cn(
                'border border-primary rounded! w-full',
                'data-[state=active]:bg-primary',
                'data-[state=active]:text-white',
                'dark:data-[state=active]:bg-primary dark:data-[state=active]:text-white'
              )}
            >
              <p className="text-start w-full">{item?.nama_kategori_faq}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {faqCategory?.map((item, k) => (
          <TabsContent key={k} value={item?.slug} className={'w-full'}>
            <p className="text-primary font-semibold mb-4">
              {faqCategory?.find((row) => row.slug === category)?.nama_kategori_faq}
            </p>
            <FaqListDataV7 slug={item?.slug} />
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
export default ContactSectionV10
