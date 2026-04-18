import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight, Moon, Sun } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function BerandaPage() {
  return (
    <div className="bg-[#FFFCF5] min-h-screen font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#FFFCF5]/90 backdrop-blur-md border-b-2 border-[#CDA327]">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-white rounded-full border-2 border-[#278374] flex items-center justify-center relative">
              <Image src="/img/noimg.png" fill alt="Logo" className="w-12 h-12 rounded-full" />
            </div>
            <div>
              <h1 className="text-[#278374] text-2xl font-semibold leading-none">
                Pendidikan Agama Islam
              </h1>
              <p className="text-[#CDA327] text-lg font-medium">STAIN MADINA</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8 text-[#278374] font-medium">
            <a href="#" className="hover:text-[#CDA327] transition">
              Profil
            </a>
            <a href="#" className="hover:text-[#CDA327] transition">
              Akreditasi
            </a>
            <a href="#" className="hover:text-[#CDA327] transition">
              Dosen
            </a>
            <a href="#" className="hover:text-[#CDA327] transition">
              Kurikulum
            </a>
            <a href="#" className="hover:text-[#CDA327] transition">
              Informasi
            </a>
            <a href="#" className="hover:text-[#CDA327] transition">
              Galeri
            </a>
            <a href="#" className="hover:text-[#CDA327] transition">
              Kontak & Pendaftaran
            </a>
          </nav>

          {/* Toggle Dark Mode */}
          <div className="flex items-center gap-2 bg-white border border-[#278374] rounded-full p-1">
            <Sun className="w-5 h-5 text-[#278374]" />
            <div className="w-9 h-5 bg-[#278374] rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5" />
            </div>
            <Moon className="w-5 h-5 text-[#278374]" />
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        className="relative h-[720px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://your-image-link.com/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#CDA327] text-2xl font-medium mb-2">
            Selamat datang di Website Resmi
          </p>
          <h1 className="text-[#278374] text-5xl md:text-6xl font-semibold leading-tight mb-8">
            S1 - Pendidikan Agama Islam
          </h1>

          <div className="flex justify-center gap-4">
            <Button className="bg-[#278374] hover:bg-[#1f5f52] text-white px-8 py-6 text-lg rounded-xl">
              Jelajahi
              <ArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-[#278374] text-[#278374] px-8 py-6 text-lg rounded-xl"
            >
              Pendaftaran
            </Button>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="bg-[#278374] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-white text-4xl font-semibold text-center mb-12">Layanan</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['SIAM Mahasiswa', 'SIAM Dosen', 'SIMPEG', 'Penerimaan Mahasiswa Baru'].map(
              (item, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#278374] rounded-2xl p-8 text-center hover:shadow-xl transition"
                >
                  <p className="text-[#278374] font-semibold text-lg">{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section className="py-20 bg-gradient-to-b from-[#278374]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://your-image-link.com/about.jpg"
            alt="Tentang"
            className="rounded-2xl w-full h-[360px] object-cover"
          />

          <div>
            <div className="inline-flex items-center gap-3 border-b-4 border-[#CDA327] pb-4 mb-6">
              <h2 className="text-[#278374] text-4xl font-semibold">Tentang Program Studi</h2>
            </div>
            <p className="text-[#444444] leading-relaxed text-lg">
              Program Studi S1 Ilmu Hadis STAIN Mandailing Natal merupakan salah satu program studi
              di bawah Jurusan Ushuluddin, Adab, dan Dakwah yang fokus pada kajian sumber-sumber
              utama ajaran Islam...
            </p>
            <Button className="mt-8 bg-[#278374] text-white px-8 py-6 rounded-xl">
              Baca Selengkapnya <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* BERITA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 border-b-4 border-[#CDA327] pb-4">
              <h2 className="text-[#278374] text-4xl font-semibold">Berita Program Studi</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                <img
                  src="https://your-image-link.com/news.jpg"
                  alt="Berita"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <p className="text-[#278374] font-bold">Prestasi</p>
                  <h3 className="font-semibold text-xl mt-2 mb-3 leading-tight">
                    Torehkan Prestasi Nasional, Mahasiswa PAI STAIN Madina Juarai Lomba Mengaji
                  </h3>
                  <p className="text-sm text-[#278374]">17-04-2026</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-[#278374] text-white px-10 py-6">Lihat Semua Berita</Button>
          </div>
        </div>
      </section>

      {/* PENGUMUMAN & AGENDA */}
      <section className="py-20 bg-[#FFFCF5]">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10">
          {/* Pengumuman */}
          <div className="bg-white border border-[#278374] rounded-2xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-semibold text-[#278374]">Pengumuman</h3>
              <Button variant="default" className="bg-[#278374]">
                Lihat Semua
              </Button>
            </div>
            {/* List Pengumuman */}
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-l-4 border-gray-300 pl-6">
                  <p className="text-sm text-gray-600">17-04-2026</p>
                  <p className="font-medium text-[#278374] mt-1">
                    Penerimaan Mahasiswa Baru S1 Keguruan Tahun Akademik 2026/2027
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Agenda */}
          <div className="bg-white border border-[#278374] rounded-2xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-semibold text-[#278374]">Agenda</h3>
              <Button variant="default" className="bg-[#278374]">
                Lihat Semua
              </Button>
            </div>
            {/* List Agenda */}
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-l-4 border-gray-300 pl-6">
                  <p className="text-sm text-gray-600">17-04-2026</p>
                  <p className="font-medium text-[#278374] mt-1">
                    Kuliah Umum: Memajukan Industri Bangsa
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOSEN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 border-b-4 border-[#CDA327] pb-4">
              <h2 className="text-[#278374] text-4xl font-semibold">Dosen Kami</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="border border-gray-300 rounded-2xl p-6 text-center hover:border-[#278374] transition"
              >
                <div className="w-64 h-64 mx-auto bg-gray-200 rounded-2xl mb-6" />
                <h4 className="font-semibold text-xl">John Doe Simanipar, S.Pd., M.Pd.</h4>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#278374] text-white px-10 py-6">Lihat Semua Dosen</Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#278374] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Logo & Alamat */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white rounded-full" />
                <div>
                  <h3 className="text-3xl font-semibold">Pendidikan Agama Islam</h3>
                  <p className="text-[#CDA327] text-xl">STAIN MADINA</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed opacity-90">
                Jl. Prof. Dr. Andi Hakim Nst Komplek Stain, Pidoli Lombang, Kec. Panyabungan,
                Kabupaten Mandailing Natal, Sumatera Utara 22977
              </p>
            </div>

            {/* Kontak */}
            <div>
              <h3 className="text-[#CDA327] text-2xl mb-6">Kontak</h3>
              <div className="space-y-4 text-sm">
                <p>
                  <span className="opacity-70">Email:</span> prodi.keguruan@stain-madina.ac.id
                </p>
                <p>
                  <span className="opacity-70">Telepon:</span> 081234567890
                </p>
                <p>
                  <span className="opacity-70">Fax:</span> 0123456789
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-[#CDA327] text-2xl mb-6">Social Media</h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: FaFacebook, name: 'Facebook' },
                  { icon: FaInstagram, name: 'Instagram' },
                  { icon: FaTwitter, name: 'Twitter' },
                  { icon: FaYoutube, name: 'Youtube' },
                ].map((sosmed, i) => (
                  <div key={i} className="flex items-center gap-3 hover:text-[#CDA327] transition">
                    <sosmed.icon className="w-6 h-6" />
                    <span>{sosmed.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/30 mt-16 pt-8 text-center text-sm opacity-75">
            © 2026 S1 - Keguruan STAIN MADINA. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
