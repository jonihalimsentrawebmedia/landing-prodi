import { useRouter, useSearchParams } from 'next/navigation'
import { clsx } from 'clsx'

interface Props {
  data: number[]
}

export const ChipYear = (props: Props) => {
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
              HandleFilter(item.toString())
            }}
            className={clsx(
              category === item.toString() && 'bg-primary text-white',
              `p-1.5 px-3 rounded border border-primary text-sm text-primary font-semibold`,
              'dark:text-white dark:border-gray-100'
            )}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  )
}
