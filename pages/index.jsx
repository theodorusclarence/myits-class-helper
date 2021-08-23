import { NextSeo } from 'next-seo';
import CustomLink from '@/components/CustomLink';
import UnstyledLink from '@/components/UnstyledLink';
import { useState } from 'react';

export default function Home() {
  const [sem, setSem] = useState('5');
  const [matkul, setMatkul] = useState('IF4402');
  const [kelas, setKelas] = useState('A');

  const filteredData = data.filter((datum) => datum.sem === sem);

  return (
    <>
      <NextSeo />

      <main>
        <section className=''>
          <div className='flex flex-col min-h-screen py-12 space-y-7 layout'>
            <h1 class='mb-8'>Daftar Kelas Informatika</h1>
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
              <h3 className='mb-4'>2. Pilih Semester</h3>
              <select
                name='select'
                id='semester'
                className='px-4 py-2 border rounded-lg appearance-none'
                value={sem}
                onChange={(e) => setSem(e.target.value)}
              >
                {[...new Array(8)].map((_, i) => (
                  <option value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <div>
              <h3 className='mb-4'>3. Pilih Matkul</h3>
              <select
                name='select'
                id='matkul'
                className='px-4 py-2 border rounded-lg appearance-none'
                value={matkul}
                onChange={(e) => setMatkul(e.target.value)}
              >
                {filteredData.map((item) => (
                  <option value={item.kode}>{item.nama}</option>
                ))}
              </select>
            </div>
            <div>
              <h3 className='mb-4'>4. Kelas (a, b, c, ...)</h3>
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
              <h3 className='mb-2'>5. Open Link</h3>
              <p className='mb-4'>
                https://akademik.its.ac.id/lv_peserta.php?mkJur=51100&mkID=
                <span className='text-blue-500'>{matkul}</span>
                &mkSem=1&mkThn=2021&mkKelas=
                <span className='text-blue-500'>{kelas.toUpperCase()}</span>
              </p>

              <CustomLink
                href={`https://akademik.its.ac.id/lv_peserta.php?mkJur=51100&mkID=${matkul}&mkSem=1&mkThn=2021&mkKelas=${kelas.toUpperCase()}`}
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

const data = [
  { sem: '1', kode: 'IF4101', nama: 'Dasar Pemrograman' },
  { sem: '3', kode: 'IF4201', nama: 'Sistem Digital' },
  { sem: '3', kode: 'IF4202', nama: 'Struktur Data' },
  { sem: '3', kode: 'IF4301', nama: 'Pemrograman Berorientasi Objek' },
  { sem: '3', kode: 'IF4302', nama: 'Aljabar Linier' },
  { sem: '3', kode: 'IF4303', nama: 'Komputasi Numerik' },
  { sem: '3', kode: 'IF4304', nama: 'Matematika Diskrit' },
  { sem: '3', kode: 'IF4305', nama: 'Organisasi Komputer' },
  { sem: '4', kode: 'IF4401', nama: 'Perancangan dan Analisis Algoritma' },
  { sem: '4', kode: 'IF4405', nama: 'Probabilitas dan Statistik' },
  { sem: '4', kode: 'IF4402', nama: 'Sistem Operasi' },
  { sem: '4', kode: 'IF4403', nama: 'Kecerdasan Buatan' },
  { sem: '4', kode: 'IF4404', nama: 'Manajemen Basis Data' },
  {
    sem: '4',
    kode: 'IF4406',
    nama: 'Analisis dan Perancangan Sistem Informasi',
  },
  { sem: '5', kode: 'IF4501', nama: 'Perancangan Perangkat Lunak' },
  { sem: '5', kode: 'IF4502', nama: 'Grafika Komputer' },
  { sem: '5', kode: 'IF4503', nama: 'Kecerdasan Komputasional' },
  { sem: '5', kode: 'IF4504', nama: 'Pemrograman Web' },
  { sem: '5', kode: 'IF4505', nama: 'Jaringan Komputer' },
  { sem: '5', kode: 'IF4506', nama: 'Manajemen Proyek Perangkat Lunak' },
  { sem: '7', kode: 'IF4701', nama: 'Keamanan Informasi dan Jaringan' },
  { sem: '7', kode: 'IF4702', nama: 'Pra-Tugas Akhir' },
  { sem: '8', kode: 'IF4801', nama: 'Kerja Praktik' },
  { sem: '8', kode: 'IF4802', nama: 'Tugas Akhir' },
];
