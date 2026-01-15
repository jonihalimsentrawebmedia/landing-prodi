'use client'

import { useStateContext } from '@/contexts'
import Image from 'next/image'
import { MdFax, MdMail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import { Separator } from '@/components/ui/separator'
import { ContactFooterSkeleton, FooterSkeleton } from '@/components/layout/footer/skeleton'
import Link from 'next/link'

export const Footer = () => {
  const [{ profile }] = useStateContext()
  return (
    <>
      <div className="bg-primary p-8 py-10">
        <div className="container flex items-start gap-5 justify-between">
          {!profile ? (
            <FooterSkeleton />
          ) : (
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
          )}
          <div className={'w-fit gap-x-16 flex items-start'}>
            {!profile ? (
              <ContactFooterSkeleton />
            ) : (
              <div>
                <p className="text-white font-semibold pl-2 border-l-4 border-yellow-600">Kontak</p>
                <ul className={'text-white mt-4 flex flex-col gap-4'}>
                  <Link href={`mailto:${profile?.SatuanOrganisasi?.email.toLowerCase() ?? ''}`}>
                    <li className={'flex items-center gap-2'}>
                      <MdMail className={'size-6'} />
                      {profile?.SatuanOrganisasi?.email ?? ''}
                    </li>
                  </Link>
                  <Link
                    href={`https://wa.me/${profile?.SatuanOrganisasi?.telepon}`}
                    target={'_blank'}
                  >
                    <li className={'flex items-center gap-2'}>
                      <FaPhone className={'size-6'} />
                      {profile?.SatuanOrganisasi?.telepon ?? ''}
                    </li>
                  </Link>
                  <li className={'flex items-center gap-2'}>
                    <MdFax className={'size-6'} />
                    {profile?.SatuanOrganisasi?.fax ?? ''}
                  </li>
                </ul>
              </div>
            )}

            <div>
              <p className="text-white font-semibold pl-2 border-l-4 border-yellow-600">
                Lihat Juga
              </p>
              <ul className={'text-white mt-4 flex flex-col gap-4'}>
                <Link href={'/profile'}>
                  <li>Profil</li>
                </Link>
                <Link href={'/accreditation'}>
                  <li>Akreditasi & Sertifikat</li>
                </Link>

                <Link href={'/lecturer'}>
                  <li>Dosen</li>
                </Link>
                <Link href={'/curriculum'}>
                  <li>Kurikulum</li>
                </Link>
                <Link href={'/gallery'}>
                  <li>Galeri</li>
                </Link>
                <Link href={'/contact'}>
                  <li>Kontak & Pendaftaran</li>
                </Link>
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold pl-2 border-l-4 border-yellow-600">
                Social Media
              </p>
              <ul className={'text-white mt-4 flex flex-col gap-4'}>
                <Link href={profile?.SatuanOrganisasi?.facebook ?? ''} target={'_blank'}>
                  <li>Facebook</li>
                </Link>

                <Link href={profile?.SatuanOrganisasi?.instagram ?? ''}>
                  <li>Instagram</li>
                </Link>
                <Link href={profile?.SatuanOrganisasi?.twitter ?? ''}>
                  <li>Twitter</li>
                </Link>
                <Link href={profile?.SatuanOrganisasi?.youtube ?? ''}>
                  <li>YouTube</li>
                </Link>
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
