import { useEffect, useState } from 'react'
import { IFaq, IFAQCategory, IRegistration } from '@/app/contact/data/type'
import { Meta } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

interface Props {
  page?: string
  limit?: string
  slug?: string
}

export const UseGetFaq = (props?: Props) => {
  const { page, limit, slug } = props ?? {}

  const [faq, setFaq] = useState<IFaq[]>([])
  const [meta, setMeta] = useState<Meta>()

  const ParamsSearch = new URLSearchParams()
  if (page) ParamsSearch.append('page', page)
  if (limit) ParamsSearch.append('limit', limit)
  if (slug) ParamsSearch.append('slug_kategori_faq', slug)

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ['faq', ParamsSearch.toString()],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get(`/public-prodi/faq?${ParamsSearch}`).then((res) => res?.data),
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

export const UseGetFaqCategory = () => {
  const [faqCategory, setFaqCategory] = useState<IFAQCategory[]>([])

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['faq-category'],
    refetchOnWindowFocus: false,
    queryFn: () =>
      AxiosClient.get('/public-prodi/ref/kategori-faq?page=0&limit=0').then(
        (res) => res?.data.data
      ),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setFaqCategory(data)
    }
  }, [data])

  return { faqCategory, loading }
}
