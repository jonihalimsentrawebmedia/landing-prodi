import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { IAnnouncement } from '@/app/homepage/data/types'

export const UseGetAnnouncementYear = () => {
  const [year, setYear] = useState<number[]>([])

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['announcement-year'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('public-prodi/pengumuman-tahun').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setYear(data)
    }
  }, [data])

  return { year, loading }
}

export const UseGetAnnouncementDetail = (slug: string) => {
  const [announcementDetail, setAnnouncementDetail] = useState<IAnnouncement>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['announcement-detail', slug],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/pengumuman/${slug}`).then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAnnouncementDetail(data)
    }
  }, [data])

  return { announcementDetail, loading }
}
