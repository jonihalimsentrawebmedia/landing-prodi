import { Skeleton } from '@/components/ui/skeleton'
import { MdFax, MdMail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa6'

export const FooterSkeleton = () => {
  return (
    <div className="flex flex-col gap-1.5 lg:max-w-[400px] w-full animate-pulse">
      {/* Logo */}
      <div className="size-14 bg-gray-300 rounded-md" />

      {/* Title */}
      <div className="h-6 bg-gray-300 rounded w-3/4" />

      {/* Subtitle */}
      <div className="h-4 bg-gray-300 rounded w-1/2" />

      {/* Address */}
      <div className="h-4 bg-gray-200 rounded w-full" />
    </div>
  )
}

export const ContactFooterSkeleton = () => {
  return (
    <div>
      {/* Judul */}
      <div className="flex items-center gap-2">
        <div className="h-5 w-1 bg-yellow-600" />
        <Skeleton className="h-5 w-24" />
      </div>

      {/* List kontak */}
      <ul className="text-white mt-4 flex flex-col gap-4">
        {/* Email */}
        <li className="flex items-center gap-2">
          <MdMail className="size-6 text-muted-foreground" />
          <Skeleton className="h-4 w-48" />
        </li>

        {/* Telepon */}
        <li className="flex items-center gap-2">
          <FaPhone className="size-6 text-muted-foreground" />
          <Skeleton className="h-4 w-40" />
        </li>

        {/* Fax */}
        <li className="flex items-center gap-2">
          <MdFax className="size-6 text-muted-foreground" />
          <Skeleton className="h-4 w-36" />
        </li>
      </ul>
    </div>
  )
}
