export function NumberToOrdinalID(num: number, capitalize: boolean = false): string {
  if (num <= 0) return ''

  const satuan = [
    '',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
  ]

  function toWords(n: number): string {
    if (n < 10) {
      return satuan[n]
    } else if (n === 10) {
      return 'sepuluh'
    } else if (n === 11) {
      return 'sebelas'
    } else if (n < 20) {
      return satuan[n - 10] + ' belas'
    } else if (n < 100) {
      const puluh = Math.floor(n / 10)
      const sisa = n % 10
      return satuan[puluh] + ' puluh' + (sisa ? ' ' + toWords(sisa) : '')
    } else if (n < 200) {
      return 'seratus' + (n % 100 ? ' ' + toWords(n - 100) : '')
    } else if (n < 1000) {
      const ratus = Math.floor(n / 100)
      const sisa = n % 100
      return satuan[ratus] + ' ratus' + (sisa ? ' ' + toWords(sisa) : '')
    } else if (n < 2000) {
      return 'seribu' + (n % 1000 ? ' ' + toWords(n - 1000) : '')
    } else if (n < 1000000) {
      const ribu = Math.floor(n / 1000)
      const sisa = n % 1000
      return toWords(ribu) + ' ribu' + (sisa ? ' ' + toWords(sisa) : '')
    } else {
      return n.toString() // di luar batas
    }
  }

  let result = ''

  if (num === 1) result = 'pertama'
  else if (num === 2) result = 'kedua'
  else if (num === 3) result = 'ketiga'
  else if (num === 4) result = 'keempat'
  else if (num === 5) result = 'kelima'
  else if (num === 6) result = 'keenam'
  else if (num === 7) result = 'ketujuh'
  else if (num === 8) result = 'kedelapan'
  else if (num === 9) result = 'kesembilan'
  else if (num === 10) result = 'kesepuluh'
  else if (num === 11) result = 'kesebelas'
  else if (num < 100) result = 'ke' + ' ' + toWords(num)
  else if (num === 100) result = 'keseratus'
  else if (num < 1000) result = 'ke' + ' ' + toWords(num)
  else if (num === 1000) result = 'keseribu'
  else result = 'ke' + ' ' + toWords(num)

  if (capitalize) {
    result = result.charAt(0).toUpperCase() + result.slice(1)
  }

  return result
}
