'use client'

import { useStateContext } from '@/contexts'
import Image from 'next/image'
import { MdFax, MdMail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import { Separator } from '@/components/ui/separator'

export const Footer = () => {
  const [{ profile }] = useStateContext()
  return (
    <>
      <div className="bg-primary p-8 py-10">
        <div className="container flex items-start gap-5 justify-between">
          <div className="flex flex-col gap-1.5 lg:max-w-[400px]">
            <Image
              src={profile?.SatuanOrganisasi?.logo ?? '/img/noimg.png'}
              alt={'logo'}
              width={100}
              height={100}
              className={'size-14'}
            />
            <p className="text-2xl font-semibold text-white">
              {profile?.SatuanOrganisasi?.kode_jenjang} - {profile?.SatuanOrganisasi?.nama}
            </p>
            <p className={'text-white'}>{profile?.SatuanOrganisasi?.singkatan_universitas}</p>
            <p className="text-gray-200">{profile?.SatuanOrganisasi?.alamat}</p>
          </div>

          <div className={'w-fit gap-x-16 flex items-start'}>
            <div>
              <p className="text-white font-semibold pl-2 border-l-4 border-yellow-600">Kontak</p>
              <ul className={'text-white mt-4 flex flex-col gap-4'}>
                <li className={'flex items-center gap-2'}>
                  <MdMail className={'size-6'} />
                  s1pend-inggris@gmail.com
                </li>
                <li className={'flex items-center gap-2'}>
                  <FaPhone className={'size-6'} />
                  081212345678
                </li>
                <li className={'flex items-center gap-2'}>
                  <MdFax className={'size-6'} />
                  061 - 123456
                </li>
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold pl-2 border-l-4 border-yellow-600">Kontak</p>
              <ul className={'text-white mt-4 flex flex-col gap-4'}>
                <li>Profil</li>
                <li>Akreditasi & Sertifikat</li>
                <li>Dosen</li>
                <li>Kurikulum</li>
                <li>Fasilitas</li>
                <li>Kontak & Pendaftaran</li>
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold pl-2 border-l-4 border-yellow-600">
                Social Media
              </p>
              <ul className={'text-white mt-4 flex flex-col gap-4'}>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>TikTok</li>
                <li>YouTube</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <Separator className={'my-2.5'} />
          <p className="text-white text-center text-xs">
            Copyright © 2025, S1 - Pendidikan Bahasa Inggris STAIN MADINA
          </p>
        </div>
      </div>
    </>
  )
}
