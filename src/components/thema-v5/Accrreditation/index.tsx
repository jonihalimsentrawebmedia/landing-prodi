'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { UseGetAccreditation } from '@/app/accreditation/hooks'
import { TitleLineTextCenter } from '@/components/thema-v5/component/common/titleLine'
import Image from 'next/image'
import { useStateContext } from '@/contexts'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { MdDownload } from 'react-icons/md'
import Link from 'next/link'

const AccreditationPageV5 = () => {
  const { accreditation, loading } = UseGetAccreditation()
  const LastData = accreditation?.[0]
  const [{ profile }] = useStateContext()

  if (loading) return <></>

  return (
    <>
      <ProfileLayout title={'Akrediatasi'} context={'AKREDITASI'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto p-4'}>
          <div className="container-sm">
            <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Akreditasi' }]} />
          </div>
        </div>
        <div className="p-5 bg-primary dark:bg-gray-800">
          <div className="container-sm">
            <TitleLineTextCenter text={'Akreditasi Terbaru'} />
            <div
              className={
                'flex flex-col lg:flex-row items-start gap-x-8 p-5 border border-footer rounded-xl mt-5'
              }
            >
              <Image
                width={400}
                height={278}
                src={LastData?.gambar ?? '/img/noimg.png'}
                alt={'logo'}
                className={'w-full lg:w-[400px] lg:h-[278px] object-contain lg:object-cover rounded-lg'}
              />
              <div className={'space-y-4'}>
                <p className={'text-footer'}>
                  {profile?.SatuanOrganisasi?.kode_jenjang}-{profile?.SatuanOrganisasi?.nama}
                </p>
                <p className={'text-lg lg:text-2xl font-semibold'}>{LastData?.nilai_akreditas}</p>
                <p>{LastData?.uraian}</p>
                <div className="grid lg:grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <p className="text-gray-500">Masa Berlaku</p>
                    <p>
                      {LastData?.mulai_berlaku ? format(LastData?.mulai_berlaku, 'dd-MM-yyyy') : ''}{' '}
                      s/d{' '}
                      {LastData?.akhir_berlaku ? format(LastData?.akhir_berlaku, 'dd-MM-yyyy') : ''}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-500">Lembaga Penilai</p>
                    <p>{LastData?.lembaga_penilaian}</p>
                  </div>
                </div>

                <div className="flex items-center gap-x-5">
                  <Link href={'#'}>
                    <Button className={'bg-footer hover:bg-footer text-white'}>
                      <MdDownload />
                      Sertifikat Akreditasi
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default AccreditationPageV5
