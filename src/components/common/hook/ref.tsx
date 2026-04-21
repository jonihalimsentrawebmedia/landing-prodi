// public-prodi/ref/program-studi-fakultas

import { useEffect, useState } from 'react'
import { BasicProps, Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export interface IProdi {
  id_satuan_organisasi: string
  nama: string
  kelompok: 'PRODI' | string
  domain: string

  nama_jenjang_pendidikan: string | null
  kode_jenjang: string | null
}

export interface IFakultas {
  id_satuan_organisasi: string
  nama: string
  kelompok: 'FAKULTAS' | string
  domain: string

  nama_jenjang_pendidikan: string | null
  kode_jenjang: string | null

  prodi: IProdi[]
}

export const UseGetProdiFaculty = (props?: BasicProps) => {
  const { page, search, limit } = props ?? {}

  const [prodi, setProdi] = useState<IFakultas[]>([])
  const [meta, setMeta] = useState<Meta>()

  const Params = new URLSearchParams()
  if (page) Params.append('page', page ?? '1')
  if (limit) Params.append('limit', limit ?? '10')
  if (search) Params.append('search', search ?? '')

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['prodi-faculty', Params.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/ref/program-studi-fakultas?${Params}`).then((res) => res.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setProdi(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { prodi, meta, loading }
}
