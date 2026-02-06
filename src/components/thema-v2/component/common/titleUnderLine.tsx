import { clsx } from 'clsx'

interface Props {
  text: string
  className?: string
}

export const TitleUnderline = (props: Props) => {
  const { text, className } = props
  return (
    <h2
      className={clsx(
        className,
        'underline underline-offset-[8px] text-primary lg:text-2xl font-semibold decoration-primary',
        'dark:text-primary-foreground dark:decoration-yellow-600'
      )}
    >
      {text}
    </h2>
  )
}
