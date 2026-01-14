import { z } from 'zod'

export const ContactResolver = z.object({
  nama: z.string({ error: 'Nama harus diisi' }),
  email: z.email({ error: 'Email Tidak valid' }),
  otp: z.string({ error: 'OTP harus diisi' }),
  pesan: z.string({ error: 'Pesan harus diisi' }),
})

export type IContactResolver = z.infer<typeof ContactResolver>
