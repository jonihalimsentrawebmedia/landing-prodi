import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Dispatch, ReactNode, SetStateAction } from 'react'

interface Props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  title?: string
  description?: string
  children?: ReactNode
  className?: string
}

export const DialogCustom = (props: Props) => {
  const { open, setOpen, title, className, description, children } = props
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={className}>
          <DialogHeader>
            <DialogTitle>{title ?? ''}</DialogTitle>
            <DialogDescription>{description ?? ''}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    </>
  )
}
