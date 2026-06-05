'use client'

import { UseGetAccreditation } from '@/app/accreditation/hooks'
import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MdDownload } from 'react-icons/md'
import { Card, CardContent } from '@/components/ui/card'
import { FilterSelect } from '@/components/common/filter/select'
import { SearchInput } from '@/components/common/filter/search'
import { DataTable } from '@/components/common/table'
import { useSearchParams } from 'next/navigation'
import { JumbotronTitleV16 } from '@/components/thema-v16/component/jumbotronTitle'
import { cn } from '@/lib/utils'
import ColumnsAccreditationsV16 from '@/components/thema-v16/accreditation/columns'

export const AccreditationPageV16 = () => {
  const { accreditation, loading: load1 } = UseGetAccreditation({
    page: '1',
    limit: '1',
  })
  const LastData = accreditation?.[0]
  const columns = ColumnsAccreditationsV16()
  const searchParams = useSearchParams()
  const search = searchParams.get('search') ?? ''

  const { accreditation: AllData, loading: load2 } = UseGetAccreditation({
    page: '1',
    limit: '10',
    no_include_id: LastData?.id_akreditas,
    search: search,
  })

  const loading = load1 || load2

  if (loading) return <></>

  return (
    <>
      <JumbotronTitleV16
        data={[{ name: 'Beranda', link: '/' }, { name: 'Akreditasi' }]}
        title="Akreditasi"
        context="AKREDITASI"
      />

      <div className="container-sm py-5 lg:max-w-[1280px] mx-auto">
        <div className="flex items-center gap-2 w-full">
          <div className="border-l-4 border-b-4 border-[#CDA327] px-4 py-2">
            <h2
              className={cn(
                'text-[25px] leading-[38px] font-normal text-[#0F766E] whitespace-nowrap'
              )}
            >
              Akreditas Terbaru
            </h2>
          </div>
        </div>

        <Card className="mt-8 border border-[#C8C8C8] rounded-2xl shadow-sm">
          <CardContent className="flex flex-col lg:flex-row items-center gap-5">
            {LastData?.gambar && (
              <div className="relative">
                <Image
                  src={LastData.gambar}
                  alt="Certificate"
                  className="w-[313px] max-w-[3131px] h-[221px] object-contain lg:object-cover"
                  width={313}
                  height={222}
                />
              </div>
            )}
            <div>
              <p className="text-xs text-[#444444]">
                {LastData?.mulai_berlaku ? format(LastData.mulai_berlaku, 'dd MMMM yyyy') : '-'}
              </p>
              <p className="text-xl text-[#1F7A63]">{LastData?.nama_satuan_organisasi_akreditas}</p>
              <p className="text-[#444444]">{LastData?.uraian}</p>
              <p className="text-[#444444] mt-2 flex items-center gap-1.5">
                {LastData?.no_surat_keputusan}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 mt-2 lg:mt-4 w-full lg:w-fit">
              <Link href={LastData?.gambar ?? '#'} target="_blank" className="w-full lg:w-fit">
                <Button
                  className="border-[#1F7A63] text-[#1F7A63] hover:bg-[#1F7A63] hover:text-white w-full lg:w-fit"
                  variant="outline"
                >
                  <MdDownload />
                  Unduh Sertifikat Akreditasi
                </Button>
              </Link>
              <Link
                href={LastData?.dokumen_akreditas ?? '#'}
                target="_blank"
                className="w-full lg:w-fit"
              >
                <Button
                  className="border-[#1F7A63] text-[#1F7A63] hover:bg-[#1F7A63] hover:text-white w-full lg:w-fit"
                  variant="outline"
                >
                  <MdDownload />
                  Unduh SK Akreditasi
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 w-full pt-5">
          <div className="border-l-4 border-b-4 border-[#CDA327] px-4 py-2">
            <h2
              className={cn(
                'text-[25px] leading-[38px] font-normal text-[#0F766E] whitespace-nowrap'
              )}
            >
              Semua Akreditas
            </h2>
          </div>
        </div>

        <div className="flex items-end w-full gap-x-4 mt-4">
          <FilterSelect
            name="limit"
            label="Jumlah Data"
            placeholder="Jumlah Data"
            className="whitespace-nowrap"
            innerClassname="bg-white text-[#1F7A63] w-full max-w-[200px]"
            data={[
              { label: '10', value: '10' },
              { label: '25', value: '25' },
              { label: '50', value: '50' },
              { label: '100', value: '100' },
            ]}
          />
          <SearchInput placeholder="Cari Akreditasi" className="w-full bg-white rounded" />
        </div>

        <DataTable data={AllData} columns={columns} className="mt-5" />
      </div>
    </>
  )
}

export default AccreditationPageV16
