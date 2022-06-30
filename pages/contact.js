import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/dist/client/link'
import { AiOutlineMail } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import Footer from '../components/Footer';

function contact() {
    return (
        <div className='w-full flex flex-col absolute'>
            <Navbar />
            <section className='min-h-screen w-full bg-white mt-48 flex flex-col px-16 h-[70vh]'>
                <h1 className='text-3xl text-black font-semibold'>Contact Info</h1>
                <div className='mt-16'>
                    <Link href="mailto:suhas.bangalore16@gmail.com">
                        <span className='flex flex-row items-center cursor-pointer'>
                            <AiOutlineMail className='text-xl' />
                            <p className='break-all md:text-xl lg:text-xl ml-2'>suhas.bangalore16@gmail.com</p>
                        </span>
                    </Link>
                    <div className='mt-8'>
                        <Link href="">
                            <span className='flex flex-row items-center cursor-pointer'>
                                <FaDiscord className='text-xl' />
                                <p className='md:text-xl lg:text-xl ml-2'>suhas0903</p>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer/>


        </div>
    )
}

export default contact