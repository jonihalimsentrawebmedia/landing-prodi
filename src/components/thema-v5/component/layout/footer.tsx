'use client'

import { useStateContext } from '@/contexts'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { UseGetProdiFaculty } from '@/components/common/hook/ref'
import { GoDotFill } from 'react-icons/go'

const FooterLayoutV5 = () => {
  const [{ profile }] = useStateContext()
  const { prodi } = UseGetProdiFaculty()
  console.log(prodi)

  return (
    <>
      <div className="bg-footer p-5 w-full max-w-[1920px] mx-auto pb-32 lg:pb-0">
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
              <ul className={'mt-4 space-y-4 text-white'}>
                {prodi?.map((row, k) => (
                  <Link
                    target={'_blank'}
                    href={'https://' + row?.domain}
                    key={k}
                    className={'hover:text-yellow-500'}
                  >
                    <li className={'text-base flex items-center gap-1.5'}>
                      <GoDotFill className={'size-4 text-yellow-500'} />
                      {row?.nama}   ({row?.kode_jenjang})
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <Separator className={'my-5 border-white hidden lg:block'} />
          <ul className={'pb-4 text-white justify-center items-center gap-5 hidden lg:flex'}>
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
      <div className="bg-[#444444] text-white text-center p-4 text-xs lg:text-base fixed lg:relative z-50 bottom-0 w-full">
        {profile?.SatuanOrganisasi?.kode_jenjang}-{profile?.SatuanOrganisasi?.nama} ©{' '}
        {new Date().getFullYear()}, All Rights Reserved.
        {/*<NavigationFooter profile={profile} />*/}
      </div>
    </>
  )
}

export default FooterLayoutV5
