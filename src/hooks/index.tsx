import { useEffect, useState } from 'react'
import { IProfileResponse } from '@/contexts/types'
import { useQuery } from '@tanstack/react-query'
import AxiosClient from '@/provider/axios'

export const UseGetProfile = () => {
  const [profile, setProfile] = useState<IProfileResponse>()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['profile'],
    refetchOnWindowFocus: false,
    queryFn: () => AxiosClient.get('/public-prodi/profil').then((res) => res?.data?.data),
  })

  const loading = isLoading || isFetching

  useEffect(() => {
    if (data) {
      setProfile(data)
    }
  }, [data])

  return { profile, loading }
}

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Fungsi untuk memeriksa apakah layar adalah mobile
    const checkIsMobile = () => {
      const isMobileView = window.matchMedia('(max-width: 64em)').matches
      setIsMobile(isMobileView)
    }

    // Memeriksa pada saat komponen di-mount
    checkIsMobile()

    // Menambahkan event listener untuk mengubah status saat ukuran layar berubah
    window.addEventListener('resize', checkIsMobile)

    // Membersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return {
    isMobile,
  }
}

export const useDownloadFile = async (url: string, filename?: string) => {
  try {
    // Tambahkan cache-busting untuk menghindari cache browser
    const cacheBuster = `?t=${Date.now()}`
    const downloadUrl = url.includes('?')
      ? `${url}&${cacheBuster.substring(1)}`
      : `${url}${cacheBuster}`

    // Request dengan responseType 'blob' untuk menangani file binary
    const response = await AxiosClient.get(
      `/public-prodi/force-download?url=${encodeURIComponent(downloadUrl)}`,
      {
        responseType: 'blob', // Penting untuk file binary
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
        },
      }
    )

    console.log('Response headers:', response.headers)
    console.log('Response type:', response.headers['content-type'])
    console.log('Blob size:', response.data.size)
    console.log('Blob type:', response.data.type)

    // Dapatkan tipe konten dari response
    const contentType = response.headers['content-type'] || response.data.type

    // Buat blob dengan tipe MIME yang benar
    const blob = new Blob([response.data], {
      type: contentType || 'application/octet-stream',
    })

    // Cek jika blob kosong atau corrupt
    if (blob.size === 0) {
      throw new Error('File kosong atau tidak valid')
    }

    // Buat URL dari blob
    const blobUrl = window.URL.createObjectURL(blob)

    // Buat elemen anchor untuk download
    const link = document.createElement('a')
    link.href = blobUrl

    // Set properti link
    link.style.display = 'none'
    link.setAttribute('download', '')

    // Set nama file dengan ekstensi yang benar
    let finalFilename = filename || 'download'

    // Coba dapatkan nama file dari Content-Disposition header
    const contentDisposition = response.headers['content-disposition']
    if (contentDisposition) {
      console.log('Content-Disposition:', contentDisposition)

      // Handle UTF-8 encoded filenames (filename*=UTF-8'')
      const utf8FilenameRegex = /filename\*=UTF-8''([\w%\-.]+)(?:; ?|$)/i
      const asciiFilenameRegex = /filename=(["']?)(.*?[^\\])\1(?:; ?|$)/i

      let match = contentDisposition.match(utf8FilenameRegex)
      if (match && match[1]) {
        finalFilename = decodeURIComponent(match[1])
      } else {
        match = contentDisposition.match(asciiFilenameRegex)
        if (match && match[2]) {
          finalFilename = match[2].replace(/['"]/g, '')
        }
      }
    } else {
      // Fallback: ambil dari URL
      const urlParts = url.split('/')
      const lastPart = urlParts[urlParts.length - 1]

      if (lastPart) {
        // Hapus query parameters
        finalFilename = lastPart.split('?')[0]
      }
    }

    // Tambahkan ekstensi berdasarkan content type jika belum ada
    if (!finalFilename.includes('.')) {
      const extension = getExtensionFromContentType(contentType)
      if (extension) {
        finalFilename += extension
      }
    }

    link.download = finalFilename

    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Cleanup URL setelah delay
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl)
    }, 100)

    return {
      success: true,
      data: response.data,
      filename: finalFilename,
      size: blob.size,
      type: contentType,
    }
  } catch (error) {
    console.error('Download error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      errorDetails: error,
    }
  }
}

function getExtensionFromContentType(contentType: string): string {
  const extensions: Record<string, string> = {
    'application/pdf': '.pdf',
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
    'image/png': '.png',
    'image/gif': '.gif',
    'image/webp': '.webp',
    'image/svg+xml': '.svg',
    'application/msword': '.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    'application/vnd.ms-excel': '.xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
    'application/vnd.ms-powerpoint': '.ppt',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': '.pptx',
    'text/plain': '.txt',
    'text/csv': '.csv',
    'application/json': '.json',
    'application/zip': '.zip',
    'application/x-rar-compressed': '.rar',
    'application/x-7z-compressed': '.7z',
  }

  return extensions[contentType.toLowerCase()] || ''
}
