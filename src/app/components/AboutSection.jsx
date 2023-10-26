'use client';
import React, { useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';


const TAB_DATA = [
  {
    id: "Keterampilan",
    title: "Keterampilan",
    content: (
      <ul className='list-disc pl-2'>
        <li>PHP</li>
        <li>Laravel</li>
        <li>Codeigniter</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>Javascript</li>
        <li>Node JS</li>
      </ul>
    )
  },
  {
    id: "Pendidikan",
    title: "Pendidikan",
    content: (
      <ul className='list-disc pl-2'>
        <li>Universitas Amikom Purwokerto - 2023</li>
      </ul>
    )
  },
  {
    id: "Sertifikat",
    title: "Sertifikat",
    content: (
      <ul className='list-disc pl-2'>
        <li>Bahasa Inggris - Amikom Purwokerto</li>
        <li>Digital Forensec - Academy Forensec Curam Victory</li>
        <li>Javascript - Dicoding Indonesia</li>
        <li>Dll</li>
      </ul>
    )
  },
  {
    id: "Penghargaan",
    title: "Penghargaan",
    content: (
      <ul className='list-disc pl-2'>
        <li>Asisten Praktikum Terfavorit 2021 - Universitas Amikom Purwokerto</li>
        <li>Top 8 Mahasiswa Terbaik Wisuda ke-27 - Universitas Amikom Purwokerto</li>
      </ul>
    )
  }
  
]
function AboutSection() {
  const [tab, setTab] = useState("Keterampilan");
  const [isPending, startTransition] = useTransition();

  const hanldeTabChange = (id) => {
    startTransition (() => {
      setTab(id);
    })  
  }

  return (
    <section className='text-white'>
      <div className='grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
          <Image className='rounded' src="/images/about-image.png" width={500} height={500} alt="about"/>
          <div className='mt-4 md:mt-0 text-left flex flex-col  h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>Tentang Saya</h2>
            <p className='text-base lg:text-lg justify-items-start'>Perkenalkan nama saya Gilang Miftakhul Fahmi lulusan teknik informatika Universitas Amikom Purwokerto pada bulan maret 2023, Sekarang saya berfokus pada bidang teknologi tentunya pada pemrograman baik website dengan pengalaman kurang lebih 1 Tahun. Pengalaman saya pada aplikasi yang saya buat merupakan teknologi dari HTML, CSS, Javascript maupun menggunakan framework PHP seperti Laravel dan Codeigniter, pada Javascript seperti Node.js ataupun menggunakan framework CSS Seperti Tailwind dan Boostraps 5. </p>
          <div className='flex flex-row justify-start mt-8'>
              <TabButton selecTab={() => hanldeTabChange('Keterampilan')} active={tab === "Keterampilan"}>
                {" "}
                Keterampilan {" "}
                </TabButton>

                <TabButton selecTab={() => hanldeTabChange('Pendidikan')} active={tab === "Pendidikan"}>
                {" "}
                Pendidikan {" "}
                </TabButton>

                <TabButton selecTab={() => hanldeTabChange('Sertifikat')} active={tab === "Sertifikat"}>
                {" "}
                Sertifikat {" "}
                </TabButton>

                <TabButton selecTab={() => hanldeTabChange('Penghargaan')} active={tab === "Penghargaan"}>
                {" "}
                Penghargaan {" "}
                </TabButton>

          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
      </div>
    </section>
  )
}

export default AboutSection;