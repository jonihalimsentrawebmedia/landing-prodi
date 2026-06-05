'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { UseGetLecturer } from '@/app/homepage/hooks'
import { SearchInput } from '@/components/common/filter/search'
import Image from 'next/image'
import { PaginationCustom } from '@/components/common/pagination'
import { Card, CardContent } from '@/components/ui/card'
import { MdEmail, MdPhone } from 'react-icons/md'
import { JumbotronTitleV16 } from '@/components/thema-v16/component/jumbotronTitle'

const LecturerListPageV16 = () => {
  const searchParams = useSearchParams()

  const search = searchParams.get('search') ?? ''
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '9'

  const { lecturer, meta } = UseGetLecturer({
    page: page,
    limit: limit,
    search: search,
  })

  const router = useRouter()

  return (
    <>
      <JumbotronTitleV16
        data={[{ name: 'Beranda', link: '/' }, { name: 'Dosen' }]}
        title="Dosen"
        context="DOSEN"
      />

      <div className="container-sm lg:max-w-[1280px] mx-auto py-5">
        <SearchInput
          placeholder="Cari Dosen"
          className="w-full bg-white rounded border border-[#C8C8C8]"
        />

        <div className="grid lg:grid-cols-3 gap-5 mt-5">
          {lecturer?.map((row, k) => (
            <Card key={k} className="border border-[#C8C8C8] rounded-2xl shadow-sm">
              <CardContent className="space-y-3 p-5">
                <div className="flex items-start gap-4">
                  <Image
                    src={row?.gambar_url ?? '/img/noimg.png'}
                    alt={row?.nama}
                    width={85}
                    height={115}
                    className="w-[85px] min-w-[85px] h-[115px] object-cover rounded-xl"
                  />
                  <div className="space-y-1.5">
                    <p className="text-lg text-[#1F7A63] font-semibold">{row?.nama}</p>
                    <p className="text-sm text-[#1F7A63]">NIDN</p>
                    <p className="text-[#444444]">{row?.nidn}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <h3 className="text-[#1F7A63] text-sm font-semibold shrink-0">Kontak</h3>
                  <div className="h-px bg-[#C8C8C8] flex-1" />
                </div>
                <p className="flex items-center gap-1.5 text-[#444444]">
                  <MdPhone className="text-[#1F7A63]" /> {row?.no_hp ?? 'Belum Terdaftar'}
                </p>
                <p className="flex items-center gap-1.5 text-[#444444]">
                  <MdEmail className="text-[#1F7A63]" /> {row?.email ?? 'Belum Terdaftar'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {meta && (
        <div className="py-4">
          <PaginationCustom
            meta={meta}
            page={Number(page)}
            onPageChange={(e) => {
              const params = new URLSearchParams(searchParams.toString())
              params.set('page', e.toString())
              router.push(`?${params.toString()}`)
            }}
          />
        </div>
      )}
    </>
  )
}

export default LecturerListPageV16
