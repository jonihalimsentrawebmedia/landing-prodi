'use client'

import { useStateContext } from '@/contexts'
import Image from 'next/image'
import Link from 'next/link'
import { MdEmail, MdFax } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'

export const FooterLayoutTheme4 = () => {
  const [{ profile }] = useStateContext()
  const data = profile?.SatuanOrganisasi

  return (
    <>
      <div className="bg-primary py-5 w-full mx-auto max-w-[1920px]">
        <div className="container">
          <div className="flex flex-col lg:items-center gap-2">
            <Image
              src={data?.logo ?? '/img/noimg.png'}
              alt={'logo'}
              width={150}
              height={150}
              className={'size-[60px] min-w-[60px] rounded-full'}
            />
            <h2 className="text-sm lg:text-4xl text-white font-semibold">{data?.nama}</h2>
          </div>

          <div className="mt-5 flex flex-col lg:flex-row gap-y-5 items-start justify-between">
            <div>
              <h3 className={'lg:text-xl text-white border-l-4 border-yellow-500 pl-2'}>Kontak</h3>
              <ul className={'text-xs lg:text-base text-white mt-4 flex flex-col gap-2'}>
                <Link
                  target="_blank"
                  href={`mailto:${data?.email}`}
                  className={'flex items-center gap-1.5'}
                >
                  <MdEmail />
                  {data?.email}
                </Link>
                <Link
                  target="_blank"
                  href={`https://wa.me/${data?.telepon}`}
                  className={'flex items-center gap-1.5'}
                >
                  <FaPhone />
                  {data?.telepon ?? ''}
                </Link>
                <li className={'flex items-center gap-2'}>
                  <MdFax />
                  {data?.fax ?? ''}
                </li>
              </ul>
            </div>

            <div>
              <h3 className={'lg:text-xl text-white border-l-4 border-yellow-500 pl-2'}>Alamat</h3>
              <p className="text-xs lg:text-base flex items-start gap-2 max-w-[265px] text-white mt-4">
                <IoLocationSharp className={'size-4 min-w-4'} />
                {data?.alamat ?? ''}
              </p>
            </div>

            <div>
              <h3 className={'lg:text-xl text-white border-l-4 border-yellow-500 pl-2'}>
                Lihat Juga
              </h3>
              <ul className={'flex flex-col gap-4 text-white mt-4 text-xs lg:text-base'}>
                <Link href={'/profile'}>
                  <li>Tentang Prodi</li>
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
              <h3 className={'lg:text-xl text-white border-l-4 border-yellow-500 pl-2'}>
                Social Media
              </h3>
              <ul className={'flex flex-col gap-4 text-white mt-4 text-xs lg:text-base'}>
                <Link target={'_blank'} href={data?.facebook ?? '#'}>
                  <li>Facebook</li>
                </Link>
                <Link target={'_blank'} href={data?.instagram ?? '#'}>
                  <li>Instagram</li>
                </Link>
                <Link target={'_blank'} href={data?.twitter ?? '#'}>
                  <li>Twitter</li>
                </Link>
                <Link target={'_blank'} href={data?.youtube ?? '#'}>
                  <li>Youtube</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto max-w-[1920px] text-white bg-[#112A2A] text-sm py-2 text-center font-semibold">
        Prodi S1 - Pendidikan Bahasa Inggris © 2025
      </div>
    </>
  )
}
