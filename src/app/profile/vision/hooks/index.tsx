import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { IVisionMission } from '@/app/profile/vision/data/types'
import AxiosClient from '@/provider/axios'

export const UseGetProfileVisionMission = () => {
  const [visionMission, setVisionMission] = useState<IVisionMission>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['vision-mission'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/visi-misi').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setVisionMission(data)
    }
  }, [data])

  return { visionMission, loading }
}
