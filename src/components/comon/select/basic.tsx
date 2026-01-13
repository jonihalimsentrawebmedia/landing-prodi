import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface props {
  data: { label: string; value: string }[]
  label: string
  isRow?: boolean
  innerClassname?: string
  //eslint-disable-next-line
  onChange: (e: string) => void
  value: string
  placeholder?: string
}

export const BasicSelect = (props: props) => {
  const {
    data,
    label,
    isRow,
    onChange,
    value,
    placeholder,
    innerClassname = 'min-w-[250px]',
  } = props

  return (
    <>
      <div className={`${isRow ? 'flex flex-row gap-2' : 'flex flex-col gap-2'}`}>
        <Label>{label}</Label>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger
            className={`rounded border border-gray-500 focus-visible:ring-0 ${innerClassname}`}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {data?.map((item, k) => (
              <SelectItem key={k} value={item?.value}>
                {item?.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  )
}
