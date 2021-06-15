import { NextSeo } from 'next-seo';
import CustomLink from '@/components/CustomLink';
import UnstyledLink from '@/components/UnstyledLink';
import { useState } from 'react';

const data = [
  {
    name: 'Perancangan Analisis dan Algoritma',
    kode: 'IF4401',
  },
  {
    name: 'Sistem Operasi',
    kode: 'IF4402',
  },
  {
    name: 'Kecerdasan Buatan',
    kode: 'IF4403',
  },
  {
    name: 'Manajemen Basis Data',
    kode: 'IF4404',
  },
  {
    name: 'Analisis dan Perancangan Sistem Informasi',
    kode: 'IF4406',
  },
  {
    name: 'Interaksi Manusia dan Komputer',
    kode: 'IF4601',
  },
  {
    name: 'Teori Graf dan Otomata',
    kode: 'IF4604',
  },
  {
    name: 'Pemrograman Berbasis Kerangka Kerja',
    kode: 'IF4605',
  },
];

export default function Home() {
  const [matkul, setMatkul] = useState('IF4402');
  const [kelas, setKelas] = useState('A');
  return (
    <>
      <NextSeo />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-12 space-y-7 layout'>
            <h1 class='mb-8'>Daftar Kelas Semester 4 2021</h1>
            <div>
              <h3 className='mb-2'>1. Login MyITS SI Akademik</h3>
              <p className='mb-4'>
                Buka sampai muncul{' '}
                <UnstyledLink
                  href='https://i.imgur.com/aAf0YKh.png'
                  className='font-medium text-blue-500'
                >
                  tampilan seperti ini
                </UnstyledLink>
              </p>
              <CustomLink href='https://akademik.its.ac.id/'>
                Open My ITS
              </CustomLink>
            </div>
            <div>
              <h3 className='mb-4'>2. Pilih Matkul</h3>
              <select
                name='select'
                id=''
                className='px-4 py-2 border rounded-lg appearance-none'
                value={matkul}
                onChange={(e) => setMatkul(e.target.value)}
              >
                {data.map((item) => (
                  <option value={item.kode}>{item.name}</option>
                ))}
              </select>
            </div>
            <div>
              <h3 className='mb-4'>3. Kelas (a, b, c, ...)</h3>
              <select
                name='select'
                id=''
                className='px-4 py-2 border rounded-lg appearance-none'
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
              >
                {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div>
              <h3 className='mb-2'>4. Open Link</h3>
              <p className='mb-4'>
                https://akademik.its.ac.id/lv_peserta.php?mkJur=51100&mkID=
                <span className='text-blue-500'>{matkul}</span>
                &mkSem=2&mkThn=2020&mkKelas=
                <span className='text-blue-500'>{kelas.toUpperCase()}</span>
              </p>

              <CustomLink
                href={`https://akademik.its.ac.id/lv_peserta.php?mkJur=51100&mkID=${matkul}&mkSem=2&mkThn=2020&mkKelas=${kelas.toUpperCase()}`}
              >
                Open Daftar Kelas
              </CustomLink>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
