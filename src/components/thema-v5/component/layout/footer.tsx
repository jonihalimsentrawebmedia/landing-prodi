'use client'

import { useStateContext } from '@/contexts'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Separator } from '@/components/ui/separator'
import ProdiTree from '@/components/thema-v5/component/layout/prodiTree'

const FooterLayoutV5 = () => {
  const [{ profile }] = useStateContext()

  return (
    <>
      <div className="bg-footer lg:p-5 py-4 w-full max-w-[1920px] mx-auto ">
        <div className="container-sm">
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <div className={'lg:w-1/2'}>
              <Image
                src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
                alt={'image'}
                width={100}
                height={100}
                className={'w-[60px] size-[]60px] rounded-full object-cover'}
              />
              <p className={'lg:text-3xl font-semibold text-primary'}>
                {profile?.SatuanOrganisasi?.nama}
              </p>
              <p className={'text-yellow-500 lg:text-3xl'}>
                {profile?.SatuanOrganisasi?.singkatan_universitas}
              </p>
              <p className={'text-primary text-xs lg:text-base'}>
                {profile?.SatuanOrganisasi?.alamat}
              </p>
            </div>
            <div>
              <p className="text-yellow-500 lg:text-2xl">Kontak</p>
              <ul className={'mt-4 space-y-4'}>
                <li className={'space-y-2'}>
                  <p className="text-xs text-primary">Email</p>
                  <p className={'text-white'}>{profile?.SatuanOrganisasi.email}</p>
                </li>
                <li className={'space-y-2'}>
                  <p className="text-xs text-primary">Telepon</p>
                  <p className={'text-white'}>{profile?.SatuanOrganisasi.telepon}</p>
                </li>
                <li className={'space-y-2'}>
                  <p className="text-xs text-primary">Fax</p>
                  <p className={'text-white'}>{profile?.SatuanOrganisasi.fax}</p>
                </li>
              </ul>
            </div>
            <div className={'block lg:hidden'}>
              <p className="text-yellow-500 lg:text-2xl lg:whitespace-nowrap">Sosial Media</p>
              <ul className={'mt-4 space-y-4 text-white'}>
                <li className={'flex items-center gap-2'}>
                  <FaFacebook className={'size-5'} />
                  Facebook
                </li>
                <li className={'flex items-center gap-2'}>
                  <FaTwitter className={'size-5'} />
                  Twitter
                </li>
                <li className={'flex items-center gap-2'}>
                  <FaInstagram className={'size-5'} />
                  Instagram
                </li>
                <li className={'flex items-center gap-2'}>
                  <FaYoutube className={'size-5'} />
                  Youtube
                </li>
              </ul>
            </div>

            <div>
              <p className="text-yellow-500 lg:text-2xl lg:whitespace-nowrap">Program Studi</p>
              <ProdiTree />
            </div>
          </div>
          <Separator className={'my-5 border-white hidden lg:block'} />
          <ul className={'text-white justify-center items-center gap-5 hidden lg:flex'}>
            <li className={'flex items-center gap-2'}>
              <FaFacebook className={'size-5'} />
              Facebook
            </li>
            <li className={'flex items-center gap-2'}>
              <FaTwitter className={'size-5'} />
              Twitter
            </li>
            <li className={'flex items-center gap-2'}>
              <FaInstagram className={'size-5'} />
              Instagram
            </li>
            <li className={'flex items-center gap-2'}>
              <FaYoutube className={'size-5'} />
              Youtube
            </li>
          </ul>
        </div>
      </div>
      <Separator className={'border-white'}/>
      <div className="bg-footer text-white text-center p-4 text-xs lg:text-base z-50 bottom-0 w-full">
        {profile?.SatuanOrganisasi?.kode_jenjang}-{profile?.SatuanOrganisasi?.nama} ©{' '}
        {new Date().getFullYear()}, All Rights Reserved.
      </div>
    </>
  )
}

export default FooterLayoutV5
