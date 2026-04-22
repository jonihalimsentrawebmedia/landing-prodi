'use client'

import { IoLocationSharp, IoMailSharp } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { UseGetContactUsProfile } from '@/app/profile/contact-us/hooks'
import { UseGetFaqCategory } from '@/app/contact/hooks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import FormContactTheme6 from './form'
import { FaqListDataV6 } from '@/components/thema-V6/contact/contact-section/faqSection'

const ContactSectionV6 = () => {
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
        <div className="w-full lg:w-1/2 space-y-4">
          <p className="text-2xl font-semibold text-footer underline underline-offset-8 decoration-yellow-500">
            Butuh Bantuan ?
          </p>
          <p>
            Jangan ragu untuk menghubungi kami melalui form berikut. Tuliskan pertanyaan atau
            kendala Anda, dan tim kami akan membantu secepatnya
          </p>
          <FormContactTheme6 />
        </div>
        <div className={'w-full lg:w-1/2 space-y-4'}>
          <p className="text-2xl font-semibold text-footer underline underline-offset-8 decoration-yellow-500">
            Kontak & Alamat
          </p>

          <ul className={'mt-4 space-y-4'}>
            <li className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}>
              <div className="p-2 bg-footer text-white rounded-md w-fit">
                <IoLocationSharp className={'size-5'} />
              </div>
              <div>
                <p className="text-sm text-footer">Alamat</p>
                <p className={'text-sm'}>{contactUse?.alamat}</p>
              </div>
            </li>
            <li className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}>
              <div className="p-2 bg-footer text-white rounded-md w-fit">
                <BsFillTelephoneFill className={'size-5'} />
              </div>
              <div>
                <p className="text-sm text-footer">Telepon</p>
                <p className={'text-sm'}>{contactUse?.no_telepon}</p>
              </div>
            </li>
            <li className={'flex items-center gap-3 border-l-2 border-l-yellow-500 pl-2'}>
              <div className="p-2 bg-footer text-white rounded-md w-fit">
                <IoMailSharp className={'size-5'} />
              </div>
              <div>
                <p className="text-sm text-footer">Email</p>
                <p className={'text-sm'}>{contactUse?.email}</p>
              </div>
            </li>
          </ul>

          <ul className={'flex gap-3 mt-5'}>
            <li className={'p-2 bg-footer text-white w-fit rounded'}>
              <FaFacebook className={'size-6'} />
            </li>
            <li className={'p-2 bg-footer text-white w-fit rounded'}>
              <FaYoutube className={'size-6'} />
            </li>
            <li className={'p-2 bg-footer text-white w-fit rounded'}>
              <FaInstagram className={'size-6'} />
            </li>
            <li className={'p-2 bg-footer text-white w-fit rounded'}>
              <FaTwitter className={'size-6'} />
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <TitleLine text={'FAQ (Frequently Asked Questions)'} className={'text-footer!'} />
      </div>

      <Tabs
        className={'bg-transparent dark:bg-gray-800 w-full mt-5 flex flex-col lg:flex-row items-start'}
        value={category}
        onValueChange={setCategory}
      >
        <TabsList
          className={'w-full flex flex-row lg:flex-col h-full max-w-[200px] text-start gap-2'}
        >
          {faqCategory?.map((item, k) => (
            <TabsTrigger
              key={k}
              value={item?.slug}
              className={clsx(
                'text-start w-full border border-footer rounded!',
                'data-[state=active]:bg-footer data-[state=active]:text-primary',
                'dark:data-[state=active]:bg-footer'
              )}
            >
              <p className="text-start w-full">{item?.nama_kategori_faq}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {faqCategory?.map((item, k) => (
          <TabsContent key={k} value={item?.slug}>
            <p className="text-footer font-semibold mb-4">
              {faqCategory?.find((row) => row.slug === category)?.nama_kategori_faq}
            </p>
            <FaqListDataV6 slug={item?.slug} />
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
export default ContactSectionV6
