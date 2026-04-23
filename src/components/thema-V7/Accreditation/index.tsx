'use client'

import JumbotronTitleV7 from '@/components/thema-V7/component/common/jumbotron'
import { UseGetAccreditation } from '@/app/accreditation/hooks'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { TitleLineTextCenter } from '@/components/thema-v5/component/common/titleLine'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MdDownload } from 'react-icons/md'
import { FilterSelect } from '@/components/common/filter/select'
import { SearchInput } from '@/components/common/filter/search'
import ButtonDetailV7 from '@/components/thema-V7/Accreditation/buttonDetail'

const AccreditationPageV7 = () => {
  const { accreditation, loading: load1 } = UseGetAccreditation({
    page: '1',
    limit: '1',
  })
  const LastData = accreditation?.[0]
  const { accreditation: AllData, loading: load2 } = UseGetAccreditation({
    page: '1',
    limit: '10',
    no_include_id: LastData?.id_akreditas,
  })

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <>
      <JumbotronTitleV7 title={'Akreditas'} context={'AKREDITASI'} />
      <div className={'bg-primary w-full max-w-[1920px] mx-auto p-4'}>
        <div className="container-sm">
          <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Akreditasi' }]} />
        </div>
      </div>

      <div className="lg:p-5 py-5 bg-footer dark:bg-gray-800">
        <div className="container-sm">
          <TitleLineTextCenter text={'Akreditasi Terbaru'} className={'text-primary!'} />
          <Card className={'mt-8 bg-transparent rounded-md shadow-none border-primary'}>
            <CardContent className={'flex flex-col lg:flex-row items-center gap-5'}>
              {LastData?.gambar && (
                <div className={'max-w-[373px] w-full lg:h-[280px] relative'}>
                  <Image
                    src={LastData?.gambar}
                    alt={'Certificate'}
                    className={'w-full object-contain lg:object-cover'}
                    fill
                  />
                </div>
              )}
              <div className={'space-y-1.5'}>
                <p className="text-xs">
                  {LastData?.mulai_berlaku ? format(LastData?.mulai_berlaku, 'dd MMMM yyyy') : '-'}
                </p>
                <p className="text-xl text-primary font-semibold">
                  {LastData?.nama_satuan_organisasi_akreditas}
                </p>

                <p className="text-2xl font-bold capitalize">
                  {LastData?.nilai_akreditas?.split('_').join(' ').toLowerCase()}
                </p>
                <p>{LastData?.uraian}</p>

                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 mt-2 lg:mt-4 w-full lg:w-fit">
                  <Link
                    href={LastData?.gambar ?? '#'}
                    target={'_blank'}
                    className={'w-full lg:w-fit'}
                  >
                    <Button
                      className={
                        'col-span-2 border-primary hover:text-primary text-primary w-full lg:w-fit'
                      }
                      variant={'outline'}
                    >
                      <MdDownload />
                      Unduh Sertifikat Akreditasi
                    </Button>
                  </Link>
                  <Link
                    href={LastData?.dokumen_akreditas ?? '#'}
                    target={'_blank'}
                    className={'w-full lg:w-fit'}
                  >
                    <Button
                      className={
                        'col-span-2 border-primary hover:text-primary text-primary w-full lg:w-fit'
                      }
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

          <div className="mt-8">
            <TitleLineTextCenter text={'Semua Akreditasi'} className={'text-primary!'} />
            <div className="flex items-end w-full gap-x-4">
              <FilterSelect
                name={'limit'}
                label={'Jumlah Data'}
                placeholder={'Jumlah Data'}
                className={'whitespace-nowrap'}
                innerClassname={'bg-white text-primary w-full max-w-[200px]'}
                data={[
                  { label: '10', value: '10' },
                  { label: '25', value: '25' },
                  { label: '50', value: '50' },
                  { label: '100', value: '100' },
                ]}
              />
              <SearchInput placeholder={'Cari Akreditasi'} className={'w-full bg-white rounded'} />
            </div>

            <div className="grid grid-cols-2 gap-5 mt-5">
              {AllData?.map((row, k) => (
                <div key={k}>
                  <Card className={'bg-transparent rounded-md shadow-none'}>
                    <CardContent className={'flex items-start gap-5'}>
                      <div className={'w-[246px] h-[174px] relative rounded-md overflow-hidden'}>
                        <Image
                          src={row?.gambar}
                          alt={'certificate'}
                          fill
                          className={'object-cover'}
                        />
                      </div>
                      <div className={'flex items-start flex-col gap-1.5 justify-between'}>
                        <p>{row?.nama_satuan_organisasi_akreditas}</p>
                        <p className="text-2xl font-bold capitalize">
                          {row?.nilai_akreditas.split('_').join(' ').toLowerCase()}
                        </p>
                        <p className="text-gray-500">Masa Belaku</p>
                        <p>
                          {row?.mulai_berlaku ? format(row?.mulai_berlaku, 'dd-MM-yyyy') : ''} s/d{' '}
                          {row?.akhir_berlaku ? format(row?.akhir_berlaku, 'dd-MM-yyyy') : ''}
                        </p>
                        <ButtonDetailV7 data={row} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccreditationPageV7
