import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'
import { Context } from '@/contexts/types'
import { IAboutProfile } from '@/app/profile/data/types'

interface IImgBackground {
  context: 'PROFIL'
  gambar_key: string
  gambar_url: string
}

interface Props {
  context: Context
}

export const UseGetProfileBackground = (props: Props) => {
  const { context } = props
  const [profileBackground, setProfileBackground] = useState<IImgBackground[]>([])

  const ParamsSearch = new URLSearchParams()
  if (context) ParamsSearch.append('context', context)

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['content-background', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get(`/public-prodi/prodi-backgrounds?${ParamsSearch}`).then(
        (res) => res?.data?.data
      ),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setProfileBackground(data)
    }
  }, [data])

  return { profileBackground, loading }
}

export const UseGetAboutProfile = () => {
  const [aboutProfile, setAboutProfile] = useState<IAboutProfile>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['about-profile'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/tentang').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setAboutProfile(data)
    }
  }, [data])

  return { aboutProfile, loading }
}
