'use client'

import { JumbotronTitleV14 } from '@/components/thema-v14/component/common/jumbotronTitle'
import { BreadcrumbBasic } from '@/components/common/breadcrumb'
import { TitleLine } from '@/components/thema-v5/component/common/titleLine'
import { UseGetAccreditation } from '@/app/accreditation/hooks'
import ColumnsAccreditations from '@/components/thema-V6/Accreditation/columns'
import { FilterSelect } from '@/components/common/filter/select'
import { SearchInput } from '@/components/common/filter/search'
import { DataTable } from '@/components/common/table'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MdDownload } from 'react-icons/md'

export const AccreditationPageV14 = () => {
  const { accreditation, loading: load1 } = UseGetAccreditation({
    page: '1',
    limit: '1',
  })
  const LastData = accreditation?.[0]
  const columns = ColumnsAccreditations()

  const { accreditation: AllData, loading: load2 } = UseGetAccreditation({
    page: '1',
    limit: '10',
    no_include_id: LastData?.id_akreditas,
  })

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <>
      <JumbotronTitleV14 title={'Akreditasi'} context={'AKREDITASI'} />
      <div className={'bg-footer w-full max-w-[1920px] mx-auto lg:p-4 py-2'}>
        <div className="container-sm px-2!">
          <BreadcrumbBasic
            className={'text-white! hover:bg-primary!'}
            data={[{ name: 'Beranda', link: '/' }, { name: 'Akreditasi' }]}
          />
        </div>
      </div>

      <div className="container-sm py-5">
        <TitleLine text={'Akreditasi Terbaru'} className={'text-primary!'} />
        <Card className={'mt-8 border-footer'}>
          <CardContent className={'flex flex-col lg:flex-row items-center gap-5'}>
            {LastData?.gambar && (
              <div className={'relative'}>
                <Image
                  src={LastData?.gambar}
                  alt={'Certificate'}
                  className={'w-[313px] max-w-[3131px] h-[221px] object-contain lg:object-cover'}
                  width={313}
                  height={222}
                />
              </div>
            )}
            <div>
              <p className="text-xs">
                {LastData?.mulai_berlaku ? format(LastData?.mulai_berlaku, 'dd MMMM yyyy') : '-'}
              </p>
              <p className="text-xl text-footer">{LastData?.nama_satuan_organisasi_akreditas}</p>
              <p className="text-gray-500 dark:text-gray-100">{LastData?.uraian}</p>
              <p className="text-gray-500 mt-2 flex items-center gap-1.5">
                {LastData?.no_surat_keputusan}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 mt-2 lg:mt-4 w-full lg:w-fit">
              <Link href={LastData?.gambar ?? '#'} target={'_blank'} className={'w-full lg:w-fit'}>
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
          </CardContent>
        </Card>

        <div className="mt-8">
          <TitleLine text={'Semua Akreditasi'} />

          <div className="flex items-end w-full gap-x-4 mt-4">
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

          <DataTable data={AllData} columns={columns} className={'mt-5'} />
        </div>
      </div>
    </>
  )
}

export default AccreditationPageV14
