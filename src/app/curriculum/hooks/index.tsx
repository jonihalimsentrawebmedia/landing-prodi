import { useEffect, useState } from 'react'
import { ICurriculum, ISubjectCurriculum } from '@/app/curriculum/data/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { Meta } from '@/contexts/types'

interface IProps {
  isGetAll?: boolean
  page?: string
  limit?: string
}

interface Props {
  tahun: string
  slug: string
  type: string
}

export const UseGetCurriculum = (props?: IProps) => {
  const { isGetAll, page, limit } = props ?? {}

  const [curriculum, setCurriculum] = useState<ICurriculum[]>([])
  const [meta, setMeta] = useState<Meta>()

  const paramsSearch = new URLSearchParams()
  if (isGetAll) {
    paramsSearch.append('page', '1')
    paramsSearch.append('limit', '9999')
  } else {
    paramsSearch.append('page', page ?? '1')
    paramsSearch.append('limit', limit ?? '10')
  }

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['curriculum', paramsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/kurikulum?${paramsSearch}`).then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setCurriculum(data?.data ?? [])
      if (isGetAll) setMeta(data?.meta)
    }
  }, [data, isGetAll])

  return { curriculum, meta, loading }
}

export const UseGetCurriculumDetail = (slug: string) => {
  const [detail, setDetail] = useState<ICurriculum>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['curriculum-detail', slug],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/kurikulum/${slug}`).then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setDetail(data)
    }
  }, [data])

  return { detail, loading }
}

export const UseGetCurriculumSubject = (props?: Props) => {
  const { tahun, slug, type } = props ?? {}

  const [subject, setSubject] = useState<{
    ganjil: ISubjectCurriculum[]
    genap: ISubjectCurriculum[]
  }>()

  const paramsSearch = new URLSearchParams({ page: '1', limit: '9999' })
  if (tahun) paramsSearch.append('tahun', tahun)
  if (slug) paramsSearch.append('slug_kurikulum', slug)
  if (type) paramsSearch.append('jenis_mata_kuliah', type)

  const { data, isLoading, isFetching } = useQuery<ISubjectCurriculum[]>({
    queryKey: ['curriculum-subject', paramsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/mata-kuliah?${paramsSearch}`).then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      const ganjil = data.filter((item) => item.semester === 'GANJIL')
      const genap = data.filter((item) => item.semester === 'GENAP')

      setSubject({
        ganjil,
        genap,
      })
    }
  }, [data])

  return { subject, loading }
}
