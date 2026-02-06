import { useRouter, useSearchParams } from 'next/navigation'
import { clsx } from 'clsx'
import { NewsCategory } from '@/app/information/news/hooks'

interface Props {
  data: NewsCategory[]
}

export const ChipCategoryNews = (props: Props) => {
  const { data } = props

  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const router = useRouter()

  const HandleFilter = (slug: string) => {
    const ParamsSearch = new URLSearchParams()
    if (category) {
      if (category === slug) {
        ParamsSearch.delete('category')
      } else {
        ParamsSearch.set('category', slug)
      }
    } else {
      ParamsSearch.append('category', slug)
    }
    router.push(`?${ParamsSearch.toString()}`, { scroll: false })
  }

  return (
    <>
      <div className="w-full gap-2 flex flex-nowrap overflow-x-auto">
        {data?.map((item, index) => (
          <button
            onClick={() => {
              HandleFilter(item?.slug)
            }}
            className={clsx(
              category === item?.slug && 'bg-primary text-white',
              `p-1.5 px-3 rounded-full border border-primary text-sm text-primary font-semibold whitespace-nowrap`,
              'dark:text-white dark:border-gray-100'
            )}
            key={index}
          >
            {item?.nama_kategori}
          </button>
        ))}
      </div>
    </>
  )
}
