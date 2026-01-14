import { useEffect, useState } from 'react'
import { IFaq, IRegistration } from '@/app/contact/data/type'
import { Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetFaq = () => {
  const [faq, setFaq] = useState<IFaq[]>([])
  const [meta, setMeta] = useState<Meta>()

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['faq'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/faq').then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setFaq(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { faq, meta, loading }
}

export const UseGetRegistration = () => {
  const [registration, setRegistration] = useState<IRegistration[]>([])
  const [meta, setMeta] = useState<Meta>()

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['registration'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/jalur-pendaftaran').then((res) => res?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setRegistration(data?.data)
      setMeta(data?.meta)
    }
  }, [data])

  return { registration, meta, loading }
}
