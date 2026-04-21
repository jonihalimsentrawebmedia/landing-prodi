import { cn } from '@/lib/utils'

interface props {
  text: string
  className?: string
}

export const TitleLine = (props: props) => {
  const { text, className } = props

  return (
    <>
      <div className="flex items-center gap-1.5">
        <p className={cn(className, 'text-xl text-primary whitespace-nowrap font-semibold')}>
          {text}
        </p>
        <div className="w-full mt-1 h-[1px] bg-yellow-500" />
      </div>
    </>
  )
}

export const TitleLineTextCenter = (props: props) => {
  const { text } = props
  return (
    <>
      <div className="flex items-center whitespace-nowrap gap-1 justify-center">
        <div className="w-full mt-1 h-[1px] bg-yellow-500" />
        <p className="lg:text-2xl text-footer whitespace-nowrap font-semibold">{text}</p>
        <div className="w-full mt-1 h-[1px] bg-yellow-500" />
      </div>
    </>
  )
}
