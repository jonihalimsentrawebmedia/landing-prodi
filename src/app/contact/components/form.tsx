import { Form } from '@/components/ui/form'
import TextInput from '@/components/common/form-input/text-input'
import { useForm } from 'react-hook-form'
import { ContactResolver, IContactResolver } from '@/app/contact/data/resolver'
import { zodResolver } from '@hookform/resolvers/zod'
import TextAreaInput from '@/components/common/form-input/textArea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import AxiosClient from '@/provider/axios'
import { toast } from 'react-toastify'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export const FormContact = () => {
  const [loading, setLoading] = useState(false)
  const form = useForm<IContactResolver>({
    resolver: zodResolver(ContactResolver),
  })

  const HandleOTP = async () => {
    setLoading(true)
    await AxiosClient.post('/public-prodi/pertanyaan-otp', {
      nama: form.getValues('nama'),
      email: form.getValues('email'),
    })
      .then((res) => {
        if (res?.status) {
          setLoading(false)
          toast.success(res?.data?.message || 'OTP Berhasil Dikirim')
        }
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.response?.data?.message)
      })
  }

  const HandleSubmit = async (data: IContactResolver) => {
    setLoading(true)
    await AxiosClient.post('/public-prodi/pertanyaan', data)
      .then((res) => {
        if (res?.status) {
          setLoading(false)
          toast.success(res?.data?.message || 'Pesan Berhasil Dikirim')
          form.reset()
        }
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.response?.data?.message)
      })
  }

  return (
    <>
      <Form {...form}>
        <form className={'flex flex-col gap-4 w-full'} onSubmit={form.handleSubmit(HandleSubmit)}>
          <TextInput
            isDisabled={loading}
            name={'nama'}
            inputClassName={'bg-white'}
            label={'Nama'}
            placeholder={'Ketikan Nama Anda'}
            form={form}
            isRequired
          />
          <TextInput
            isDisabled={loading}
            name={'email'}
            label={'Email'}
            inputClassName={'bg-white'}
            placeholder={'Ketikan Email Anda'}
            form={form}
            isRequired
          />
          <TextAreaInput
            isDisabled={loading}
            form={form}
            name={'pesan'}
            inputClassName={'bg-white rounded'}
            placeholder={'Ketikan Pesan Anda'}
            label={'Pesan'}
            isRequired
          />
          <div className={'flex flex-col space-y-1'}>
            <div className={'flex items-center justify-between'}>
              <Label className={'text-xs font-semibold text-gray-700'}>Kode OTP</Label>
              <button
                onClick={async (e) => {
                  e.preventDefault()
                  await HandleOTP()
                }}
                disabled={loading}
                className={'cursor-pointer text-primary underline underline-offset-2 text-xs'}
              >
                Kirim OTP
              </button>
            </div>
            <Input
              disabled={loading}
              onChange={(e) => {
                form.setValue('otp', e.target.value)
              }}
              className={'bg-white focus-visible:ring-0 rounded'}
              //eslint-disable-next-line
              value={form.watch('otp') ?? ''}
              name={'otp'}
              placeholder={'Tulis Kode OTP'}
            />
          </div>

          <div className="flex justify-center">
            <Button disabled={loading} className={'mx-auto  text-white'}>
              Kirim Pesan
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
