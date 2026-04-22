'use client'

import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import ProfileLayout from '@/components/thema-v5/profile/layout'
import { UseGetAccreditation } from '@/app/accreditation/hooks'
import { TitleLineTextCenter } from '@/components/thema-v5/component/common/titleLine'
import Image from 'next/image'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { MdDownload } from 'react-icons/md'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { FilterSelect } from '@/components/common/filter/select'
import { SearchInput } from '@/components/common/filter/search'
import { DataTable } from '@/components/common/table'
import ColumnsAccreditations from '@/components/thema-V6/Accreditation/columns'

const AccreditationPageV6 = () => {
  const { accreditation, loading } = UseGetAccreditation()
  const LastData = accreditation?.[0]
  const columns = ColumnsAccreditations()

  if (loading) return <></>

  return (
    <>
      <ProfileLayout title={'Akrediatasi'} context={'AKREDITASI'}>
        <div className={'bg-footer w-full max-w-[1920px] mx-auto p-4'}>
          <div className="container-sm">
            <BreadcrumbBasic data={[{ name: 'Beranda', link: '/' }, { name: 'Akreditasi' }]} />
          </div>
        </div>
        <div className="lg:p-5 py-5 bg-primary/20 dark:bg-gray-800">
          <div className="container-sm">
            <TitleLineTextCenter text={'Akreditasi Terbaru'} />
            <Card className={'mt-8'}>
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
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 mt-2 lg:mt-4 w-full lg:w-fit">
                    <Link
                      href={LastData?.gambar ?? '#'}
                      target={'_blank'}
                      className={'w-full lg:w-fit'}
                    >
                      <Button
                        className={
                          'col-span-2 border-footer hover:text-footer text-footer w-full lg:w-fit'
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
                          'col-span-2 border-footer hover:text-footer text-footer w-full lg:w-fit'
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
              <TitleLineTextCenter text={'Semua Akreditasi'} />

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
                <SearchInput
                  placeholder={'Cari Akreditasi'}
                  className={'w-full bg-white rounded'}
                />
              </div>

              <DataTable data={accreditation} columns={columns} className={'mt-5'} />
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  )
}

export default AccreditationPageV6
