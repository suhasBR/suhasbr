import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="fixed z-50 w-full px-8 md:px-12 lg:px-12 py-4 bg-black drop-shadow-md">
        <div className="w-full flex flex-row md:justify-left lg:justify-left xl:justify-left justify-evenly items-left">
            <Link href="/">
            <h2 className="text-base md:text-base lg:text-base mx-2 md:mx-8 lg:mx-8 text-gray-400 cursor-pointer uppercase hover:text-white">About</h2>
            </Link>
            <Link href="/projects">
            <h2 className="text-base md:text-base lg:text-base mx-2 md:mx-8 lg:mx-8 text-gray-400 cursor-pointer uppercase hover:text-white">Projects</h2>
            </Link>
            <Link href="/contact">
            <h2 className="text-base md:text-base lg:text-base mx-2 md:mx-8 lg:mx-8 text-gray-400 cursor-pointer uppercase hover:text-white">Contact</h2>
            </Link>
        </div>
    </div>
  )
}

export default Navbar