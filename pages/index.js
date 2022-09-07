import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <section className="bg-black flex flex-col items-center">
        <div className="w-72 h-72 rounded-full bg-white my-12">
          <img src='https://avatars.githubusercontent.com/u/14362923?v=4' alt="me" className='w-full h-full rounded-full' />
        </div>
        <div className='mb-20 flex flex-col items-center'>
          <h2 className='text-4xl text-slate-300 mb-4 font-semibold'>Suhas Sharma BR</h2>
          <p className='text-xl text-slate-400 mb-8'>Web3 Enthusiast</p>
          <p className='text-xl text-slate-400 mb-8'>Harmony ZKU Graduate</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
