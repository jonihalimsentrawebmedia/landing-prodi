'use client'

import { IoMdLink } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { toast } from 'react-toastify'

interface Props {
  title: string
  text: string
}

export const ShareContent = (props: Props) => {
  const { title, text } = props
  const [url, setUrl] = useState('')
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUrl(window.location.href)
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share)
  }, [])

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        })
      } catch (err) {
        console.error('Error sharing', err)
      }
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast.success('Link berhasil disalin')
    } catch (err) {
      console.error('Gagal menyalin link', err)
    }
  }

  const shareWhatsapp = () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    window.open(
      `https://wa.me/?text=${encodeURIComponent('Baca berita ini yuk!' + ' ' + url)}`,
      '_blank'
    )
  }

  const shareFacebook = () =>
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')

  const shareX = () =>
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank'
    )

  return (
    <>
      <p className={'text-gray-700 dark:text-white'}>{text}</p>
      <div className="mt-1 flex flex-wrap items-center gap-2">
        <button
          onClick={handleCopy}
          className={`text-sm text-gray-700 border-gray-500 border p-1 px-2 rounded-full flex items-center gap-1.5
          dark:text-white dark:border-white
          `}
        >
          <IoMdLink />
          Salin Link
        </button>

        {canShare && (
          <button
            onClick={handleNativeShare}
            className="share-btn bg-footer px-2 p-1 rounded text-white"
          >
            📤 Share
          </button>
        )}

        <button onClick={shareX}>
          <FaXTwitter className={'size-6'} />
        </button>
        <button onClick={shareWhatsapp}>
          <FaWhatsapp className={'size-6 text-green-500'} />
        </button>
        <button onClick={shareFacebook}>
          <FiFacebook className={'size-6 text-blue-500'} />
        </button>
      </div>
    </>
  )
}
