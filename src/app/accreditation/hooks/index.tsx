import { useEffect, useState } from 'react'
import { IAccreditation } from '@/app/accreditation/data/types'
import { Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

interface props {
  page?: string
  limit?: string
  no_include_id?: string
}

export const UseGetAccreditation = (props?: props) => {
  const { page, limit, no_include_id } = props ?? {}
  const [accreditation, setAccreditation] = useState<IAccreditation[]>([])
  const [meta, setMeta] = useState<Meta>()

  const ParamsSearch = new URLSearchParams()
  if (page) ParamsSearch.append('page', page)
  if (limit) ParamsSearch.append('limit', limit)
  if (no_include_id) ParamsSearch.append('no-include-id', no_include_id)

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['accreditation', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/akreditas?${ParamsSearch}`).then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAccreditation(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { accreditation, meta, loading }
}
