import React from 'react'
import Image from 'next/image'
import { FaLinkedinIn, FaGithub} from 'react-icons/fa';
import Link from 'next/link';
const Header = () => {
  return (
    <div className='flex justify-center items-center my-5 md:my-15'>
      <div className='flex flex-col lg:flex-row lg:justify-center items-center lg:mx-20 max-w-7xl p-5 gap-5 lg:gap-16'>
        <div className='flex flex-col'>
            <div>
            <div><h1 className='text-5xl md:text-6xl lg:text-[5rem] font-bebas-neue'>HI, I AM</h1></div>
            <div><h1 className='text-5xl md:text-6xl lg:text-[5rem] font-bebas-neue'>HASSAN RAJPUT.</h1></div>
            <p className='text-lg lg:text-xl font-manrope text-left text-[#C7C7C7] mt-3'>A passionate Student of IT , Cloud Computing, Gen AI, Web 3.0  & Full Stack Developer at Governor House Karachi.</p>
            </div>
            <div className='flex gap-5 ld:gap-15 items-center mt-5'>
                <Link href={''} className='bg-[#D3E97A] text-black px-1 py-1 rounded-full font-manrope font-bold flex items-center gap-2'><span className='ml-3'>CONTACT ME</span><span className='text-xl bg-black rounded-full text-white w-10 h-10 flex justify-center items-center'>↗</span></Link>
                <Link href={''} className='bg-[#222222] rounded-full w-10 h-10 flex justify-center items-center'><span><FaLinkedinIn color='#D3E97A'/> </span></Link>
                <Link href={''} className='bg-[#222222] rounded-full w-10 h-10 flex justify-center items-center'><span><FaGithub color='#D3E97A'/> </span></Link>
            </div>
        </div>
        <div><Image src="/images/pic1.jpg" alt="Header Pic" width={900} height={900} className='rounded-2xl'/></div>
      </div>
    </div>
  )
}

export default Header
