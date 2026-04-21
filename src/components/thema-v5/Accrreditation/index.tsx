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
import { Card, CardContent } from '@/components/ui/card'

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
            <Card className={'mt-8'}>
              <CardContent className={'flex flex-col lg:flex-row items-center gap-5'}>
                {LastData?.gambar && (
                  <Image
                    src={LastData?.gambar}
                    alt={'Certificate'}
                    className={'max-w-[373px] w-full object-cover h-[280px]'}
                    width={373}
                    height={280}
                  />
                )}
                <div>
                  <p className="text-xs">
                    {LastData?.mulai_berlaku
                      ? format(LastData?.mulai_berlaku, 'dd MMMM yyyy')
                      : '-'}
                  </p>
                  <p className="text-xl text-footer">
                    {LastData?.nama_satuan_organisasi_akreditas}
                  </p>
                  <p className="text-gray-500 dark:text-gray-100">{LastData?.uraian}</p>
                  <p className="text-gray-500 mt-2 flex items-center gap-1.5">
                    {LastData?.no_surat_keputusan}
                  </p>
                  <div className="flex items-center gap-2">
                    <Link href={LastData?.gambar ?? '#'} target={'_blank'}>
                      <Button
                        className={'col-span-2 border-footer hover:text-footer text-footer'}
                        variant={'outline'}
                      >
                        <MdDownload />
                        Unduh Sertifikat Akreditasi
                      </Button>
                    </Link>
                    <Link href={LastData?.dokumen_akreditas ?? '#'} target={'_blank'}>
                      <Button
                        className={'col-span-2 border-footer hover:text-footer text-footer'}
                        variant={'outline'}
                      >
                        <MdDownload />
                        Unduh SK Akreditasi
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default AccreditationPageV5
