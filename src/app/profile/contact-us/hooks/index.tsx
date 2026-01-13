import { useEffect, useState } from 'react'
import { IContactUs } from '@/app/profile/contact-us/data/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetContactUsProfile = () => {
  const [contactUse, setContactUse] = useState<IContactUs>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['contact-us'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/hubungi-kami').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setContactUse(data)
    }
  }, [data])

  return { contactUse, loading }
}
