import React from 'react'
import Link from 'next/dist/client/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function projects() {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <section className='w-full bg-white mt-16 flex flex-col px-16'>
                <h1 className='text-3xl text-black font-semibold'>Recent Projects</h1>

                <div className='w-full my-8 flex flex-col items-start'>
                    <Link href="https://github.com/suhasBR/zku-final-project" passHref={true}>
                        <h2 className='text-xl text-sky-500 tracking-wide cursor-pointer'>zkEmailAuth</h2>
                    </Link>
                    <p className='text-base my-2'>Creating email verified anonymous identities with Zero Knowledge Proofs</p>
                    <p className='text-base'>Anonymous identities are of prime
                        importance today for applications that promise privacy and anonymity to its users.
                        However, often there is a need for these applications to confirm if their users are authentic, i.e,
                        probably belong to a certain group or an organization. One of the possible methods to confirm this
                        would be to verify the user's email, without compromising on the user's anonymity.
                        zkEmailAuth project aims to achieve the same.</p>
                    <Link href="https://github.com/suhasBR/zku-final-project" passHref={true}>
                        <p className='break-all text-base text-indigo-600 cursor-pointer'>https://github.com/suhasBR/zku-final-project</p>
                    </Link>
                </div>

                <div className='w-full my-8 flex flex-col items-start'>
                    <Link href="https://showcase.ethglobal.com/hackmoney2022/defi-explorer-q7v72" passHref={true}>
                        <h2 className='text-xl text-sky-500 tracking-wide cursor-pointer'>Defi Explorer</h2>
                    </Link>
                    <p className='text-base'>A simple interactive game built with Unity-ReactJS to encourage
                        new users to use Decentralized Finance products by gamifying the learning process. <span className='text-sky-500'>
                            Winner of EthGlobal HackMoney 2022 Hackathon (Best Use - WalletConnect category)</span></p>
                    <Link href="https://showcase.ethglobal.com/hackmoney2022/defi-explorer-q7v72" passHref={true}>
                        <p className='break-all text-base text-indigo-600 cursor-pointer'>https://showcase.ethglobal.com/hackmoney2022/defi-explorer-q7v72</p>
                    </Link>
                </div>

                <div className='w-full my-8 flex flex-col items-start'>
                    <Link href="https://showcase.ethglobal.com/daohacks/miningpetsdao-snf41" passHref={true}>
                        <h2 className='text-xl text-sky-500 tracking-wide cursor-pointer'>Minerpets DAO</h2>
                    </Link>
                    <p className='text-base'>This project acts as an opensource
                        framework to help people design and make their own world ,
                        IP and arrange the dat in a community.
                        The idea is to have people onboard themselves to the DAO as
                        quickly as possible and have them contribute to the project.
                        <span className='text-sky-500'>
                            Winner of EthGlobal DaoHacks 2022 Hackathon (Best Use - Unlock category)</span></p>

                    <Link href="https://showcase.ethglobal.com/daohacks/miningpetsdao-snf41" passHref={true}>
                        <p className='break-all w-100 text-base text-indigo-600 cursor-pointer'>https://showcase.ethglobal.com/daohacks/miningpetsdao-snf41</p>
                    </Link>
                </div>

                <div className='w-full my-8 flex flex-col items-start'>
                    <Link href="https://github.com/suhasBR/delta-racers" passHref={true}>
                        <h2 className='text-xl text-sky-500 tracking-wide cursor-pointer'>Delta Racers</h2>
                    </Link>
                    <p className='text-base'>Delta racers is a simple
                        game where you can participate in races which are controlled by cryptocurrency/asset prices.
                        Racers can buy individual car parts , build their own car , Hire drivers and race them in races against each other.
                        The combination of the different car components give different affinity towards specific cryptocurrency prices.
                        In all the Game plays very similar to ZED run ,
                        with the exception being that the cars performance directly depends on the underlying cryptocurrency Asset.</p>
                    <Link href="https://github.com/suhasBR/delta-racers" passHref={true}>
                        <p className='break-all text-base text-indigo-600 cursor-pointer'>https://github.com/suhasBR/delta-racers</p>
                    </Link>
                </div>

                <div className='w-full my-8 flex flex-col items-start'>
                    <Link href="https://www.landbroker.in" passHref={true}>
                        <h2 className='text-xl text-sky-500 tracking-wide cursor-pointer'>Land Broker</h2>
                    </Link>
                    <p className='text-base'>Real estate property listing application with admin controls.
                        Built with MERN stack</p>
                    <Link href="https://www.landbroker.in" passHref={true}>
                        <p className='text-base text-indigo-600 cursor-pointer'>https://www.landbroker.in</p>
                    </Link>
                </div>





            </section>
            <Footer />
        </div>
    )
}

export default projects