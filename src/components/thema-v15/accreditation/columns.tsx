'use client'

import { useSearchParams } from 'next/navigation'
import { ColumnDef } from '@tanstack/react-table'
import { IAccreditation } from '@/app/accreditation/data/types'
import { format } from 'date-fns'
import ButtonDetailV15 from './buttonDetail'

const ColumnsAccreditationsV15 = () => {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page') ?? '1')
  const limit = Number(searchParams.get('limit') ?? '10')

  const columns: ColumnDef<IAccreditation>[] = [
    {
      accessorKey: 'id',
      header: 'No',
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center">
            {(page - 1) * limit + row.index + 1}
          </div>
        )
      },
    },
    {
      accessorKey: 'nama_satuan_organisasi_akreditas',
      header: 'Universitas / Prodi',
    },
    {
      accessorKey: 'nilai_akreditas',
      header: 'Nilai Akreditasi',
      cell: ({ row }) => {
        const data = row?.original
        return (
          <p className="capitalize font-semibold">
            {data?.nilai_akreditas?.split('_').join(' ').toLowerCase() ?? ''}
          </p>
        )
      },
    },
    {
      accessorKey: 'lembaga_penilaian',
      header: 'Lembaga Penilaian',
    },
    {
      accessorKey: 'mulai_berlaku',
      header: 'Masa Berlaku',
      cell: ({ row }) => {
        const data = row?.original
        return (
          <p>
            {data?.mulai_berlaku ? format(data.mulai_berlaku, 'dd-MM-yyyy') : ''} s/d{' '}
            {data?.akhir_berlaku ? format(data.akhir_berlaku, 'dd-MM-yyyy') : ''}
          </p>
        )
      },
    },
    {
      accessorKey: 'id_satuan_organisasi',
      header: 'Detail',
      cell: ({ row }) => {
        const data = row?.original
        return <ButtonDetailV15 data={data} />
      },
    },
  ]

  return columns
}

export default ColumnsAccreditationsV15
