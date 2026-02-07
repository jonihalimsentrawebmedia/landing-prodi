import { clsx } from 'clsx'

interface Props {
  text: string
  className?: string
  line_position?: 'left' | 'right' | 'top' | 'bottom'
}

export const TitleContent = (props: Props) => {
  const { text, className, line_position = 'left' } = props
  return (
    <h2
      className={clsx(
        className,
        'flex items-center gap-1 text-primary font-semibold text-2xl',
        line_position === 'bottom' && 'underline underline-offset-8 decoration-4'
      )}
    >
      {line_position === 'left' && <span className="w-[3px] h-6 bg-primary rounded-r-md" />}
      <span className={'-mt-1'}>{text}</span>
    </h2>
  )
}
