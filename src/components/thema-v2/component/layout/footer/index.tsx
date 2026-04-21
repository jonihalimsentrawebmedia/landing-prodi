'use client'

import Image from 'next/image'
import { FaPhone } from 'react-icons/fa6'
import { MdEmail, MdFax } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import { FooterSkeleton } from '@/components/layout/footer/skeleton'
import { useStateContext } from '@/contexts'

export const FooterLayout = () => {
  const [{ profile }] = useStateContext()
  const detail = profile?.SatuanOrganisasi

  const loading = !profile

  if (loading) return <FooterSkeleton />

  return (
    <>
      <div className={'w-full bg-footer py-2 lg:py-5 lg:p-5 mx-auto'}>
        <div className="container items-start justify-between flex flex-col lg:flex-row gap-5">
          <div className={'flex items-center lg:items-start lg:flex-col gap-2'}>
            {detail?.logo && (
              <Image
                src={detail?.logo}
                alt={detail?.nama ?? ''}
                width={150}
                height={150}
                className={'rounded-full size-10'}
              />
            )}
            <p className={'lg:text-2xl font-semibold text-white'}>
              {detail?.singkatan_universitas}
            </p>
          </div>

          <div>
            <h3 className={'lg:text-xl text-white border-l-4 border-yellow-500 pl-2'}>Kontak</h3>
            <ul className={'text-sm lg:text-base text-white mt-4 flex flex-col gap-2'}>
              <Link
                target="_blank"
                href={`mailto:${detail?.email}`}
                className={'flex items-center gap-1.5'}
              >
                <MdEmail />
                {detail?.email}
              </Link>
              <Link
                target="_blank"
                href={`https://wa.me/${detail?.telepon}`}
                className={'flex items-center gap-1.5'}
              >
                <FaPhone />
                {detail?.telepon ?? ''}
              </Link>
              <li className={'flex items-center gap-2'}>
                <MdFax />
                {detail?.fax ?? ''}
              </li>
            </ul>
          </div>

          <div>
            <h3 className={'lg:text-xl text-white border-l-4 border-yellow-500 pl-2'}>Alamat</h3>
            <p className="text-xs lg:text-base flex items-start gap-2 max-w-[265px] text-white mt-4">
              <IoLocationSharp className={'size-4 min-w-4'} />
              {detail?.alamat ?? ''}
            </p>
          </div>

          <div className={'flex items-center gap-5 lg:flex-col gap-2'}>
            <h3 className={'lg:text-xl text-white border-l-4 border-yellow-500 pl-2'}>
              Sosial Media
            </h3>
            <ul className={'flex gap-2 lg:mt-4'}>
              <Link target="_blank" href={detail?.facebook ?? '#'} className={'text-white'}>
                <FaFacebook className={'size-6'} />
              </Link>
              <Link target="_blank" href={detail?.instagram ?? '#'} className={'text-white'}>
                <FaInstagram className={'size-6'} />
              </Link>
              <Link target="_blank" href={detail?.twitter ?? '#'} className={'text-white'}>
                <FaTwitter className={'size-6'} />
              </Link>
              <Link target="_blank" href={detail?.youtube ?? '#'} className={'text-white'}>
                <FaYoutube className={'size-6'} />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className={'w-full mx-auto max-w-[1920px] bg-[#081D59] text-white py-2'}>
        <div className="container">
          <p className={'text-center text-sm'}>
            {detail?.kode_jenjang}-{detail?.nama} © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  )
}
