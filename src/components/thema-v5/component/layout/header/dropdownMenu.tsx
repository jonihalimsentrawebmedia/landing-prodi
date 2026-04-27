import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MdDashboard } from 'react-icons/md'
import { UseGetServiceProdi } from '@/app/homepage/hooks'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const ServiceDropdownMenu = () => {
  const { services } = UseGetServiceProdi()
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className={'bg-white p-1.5 rounded-full'}>
          <MdDashboard className={'text-primary'} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className={'rounded p-3'}>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Layanan</DropdownMenuLabel>
            {services.map((service, k) => (
              <DropdownMenuItem
                className={cn(
                  'border px-3 my-2  hover:bg-primary! hover:text-white group',
                  'rounded p-1.5 border-primary'
                )}
                key={k}
              >
                <Link href={service?.url_layanan} target={'_blank'} className={'group-hover:text-white'}>
                  {service?.nama_layanan}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default ServiceDropdownMenu
