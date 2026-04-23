'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface MataKuliah {
  id_mata_kuliah: string
  tahun: number
  semester: 'GANJIL' | 'GENAP'
  nama_mata_kuliah: string
  sks: number
  jenis_mata_kuliah: 'WAJIB' | 'PILIHAN'
}

interface Props {
  data: MataKuliah[]
  namaKurikulum?: string
}

export default function CurriculumAccordion({ data }: Props) {
  const getSemesterNumber = (tahun: number, semester: 'GANJIL' | 'GENAP'): number => {
    return (tahun - 1) * 2 + (semester === 'GANJIL' ? 1 : 2)
  }

  // Grouping hanya untuk WAJIB
  const semesters = data.reduce<
    Record<
      number,
      {
        name: string
        items: MataKuliah[]
        totalSKS: number
      }
    >
  >((acc, mk) => {
    if (mk.jenis_mata_kuliah !== 'WAJIB') return acc

    const semNumber = getSemesterNumber(mk.tahun, mk.semester)
    const semName = `Semester ${semNumber}`

    if (!acc[semNumber]) {
      acc[semNumber] = {
        name: semName,
        items: [],
        totalSKS: 0,
      }
    }

    acc[semNumber].items.push(mk)
    acc[semNumber].totalSKS += mk.sks

    return acc
  }, {})

  // Semua mata kuliah pilihan
  const pilihan = data.filter((mk) => mk.jenis_mata_kuliah === 'PILIHAN')

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-primary mb-6"></h2>

      {Object.keys(semesters).length > 0 && (
        <Accordion type="multiple" className="space-y-3">
          {Object.values(semesters)
            .sort((a, b) => parseInt(a.name.split(' ')[1]) - parseInt(b.name.split(' ')[1]))
            .map((sem) => (
              <AccordionItem
                key={sem.name}
                value={sem.name}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="bg-emerald-700 hover:bg-emerald-800 text-white px-2 lg:px-6 py-2 lg:py-4 flex items-center justify-between">
                  <div className="flex-1 text-left font-semibold lg:text-lg">{sem.name}</div>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="opacity-90">Total SKS</span>
                    <span className="bg-white text-emerald-700 font-bold px-4 py-1 rounded-full text-xs lg:text-sm">
                      {sem.totalSKS} SKS
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="bg-white lg:px-6 lg:py-4 p-2">
                  <div className="divide-y divide-gray-100">
                    {sem.items.map((mk) => (
                      <div
                        key={mk.id_mata_kuliah}
                        className="flex justify-between items-center py-4 px-2 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-gray-700 font-medium">{mk.nama_mata_kuliah}</span>
                        <span className="font-semibold text-emerald-700">{mk.sks} SKS</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      )}

      {pilihan.length > 0 && (
        <div className="border border-amber-200 rounded-xl overflow-hidden">
          <div className="bg-amber-600 text-white px-6 py-4 font-semibold text-lg">
            Mata Kuliah Pilihan
          </div>
          <div className="bg-white divide-y">
            {pilihan.map((mk) => (
              <div
                key={mk.id_mata_kuliah}
                className="flex justify-between items-center px-6 py-4 hover:bg-amber-50"
              >
                <span className="text-gray-700 font-medium">{mk.nama_mata_kuliah}</span>
                <span className="font-semibold text-amber-600">{mk.sks} SKS</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
