import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="w-full px-8 md:px-12 lg:px-12 py-4 bg-black">
        <div className="w-full flex flex-row justify-left items-left">
            <Link href="/">
            <h2 className="text-sm md:text-base lg:text-base mx-2 md:mx-8 lg:mx-8 text-gray-400 cursor-pointer uppercase hover:text-white">About</h2>
            </Link>
            <Link href="/projects">
            <h2 className="text-sm md:text-base lg:text-base mx-2 md:mx-8 lg:mx-8 text-gray-400 cursor-pointer uppercase hover:text-white">Projects</h2>
            </Link>
            <Link href="/contact">
            <h2 className="text-sm md:text-base lg:text-base mx-2 md:mx-8 lg:mx-8 text-gray-400 cursor-pointer uppercase hover:text-white">Contact</h2>
            </Link>
        </div>
    </div>
  )
}

export default Navbar