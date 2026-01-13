import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { IProfileImage } from '@/app/profile/structure-organization/data/types'

export const UseGetStructureOrganization = () => {
  const [organization, setOrganization] = useState<IProfileImage>()

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['structure-organization'],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get('/public-prodi/struktur-organisasi').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setOrganization(data)
    }
  }, [data])

  return { organization, loading }
}
