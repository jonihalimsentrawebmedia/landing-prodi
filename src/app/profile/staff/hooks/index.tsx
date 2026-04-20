import { useEffect, useState } from 'react'
import { IStaff } from '@/app/profile/staff/data/types'
import { BasicProps, Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetProfileStaff = (props?: BasicProps) => {
  const { page, limit, search } = props ?? {}

  const [staff, setStaff] = useState<IStaff[]>([])
  const [meta, setMeta] = useState<Meta>()

  const ParamsSearch = new URLSearchParams()
  if (page) ParamsSearch.append('page', page ?? '1')
  if (limit) ParamsSearch.append('limit', limit ?? '10')
  if (search) ParamsSearch.append('search', search ?? '')

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['staff', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get(`/public-prodi/staff?${ParamsSearch}`).then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setStaff(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { staff, meta, loading }
}
