import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import React from 'react'

const About1 = () => {
  return (
    
<div className='flex justify-center items-center my-14 md:my-15'>
            <div className='flex flex-col lg:flex-row lg:justify-between max-w-7xl p-5 gap-5 lg:gap-10 w-full'>
                <div className='w-full lg:w-1/1'>
                    <h1 className='text-5xl md:text-6xl lg:text-8xl font-bebas-neue lg:ml-10'>ABOUT ME</h1>
                </div>
                <div className='w-full flex flex-col '>
                    <h1 className='font-manrope font-medium text-3xl '>Hassan | Enthusiastic Frontend Student at GIAIC, Exploring Web Development</h1>
                    <p className='text-lg lg:text-xl font-manrope text-left text-[#C7C7C7] mt-3'>I&apos;m Hassan, a passionate frontend development student at GIAIC. I&apos;ve learned HTML, CSS, JavaScript, and Tailwind CSS, building several impressive projects. I&apos;ve also participated in a hackathon, honing my skills further. Though my course covers IT, starting with full-stack and later advancing to AI, I&apos;m currently focused on mastering frontend technologies, preparing for more complex AI topics in the future.</p>
                    <div className='flex gap-5 ld:gap-15 items-center mt-10'>
                        <Link
                            href={'/resume/hassanrj-resume.pdf'}
                            className='bg-[#D3E97A] text-black px-1 py-1 rounded-full font-manrope font-bold flex items-center gap-2'
                            target='_blank'
                        ><span className='ml-3'>DOWNLOAD RESUME</span><span className='text-xl bg-black rounded-full text-white w-10 h-10 flex justify-center items-center'><FiDownload /></span></Link>
                        <Link
                            href={'https://www.linkedin.com/in/hassan-rj-148220295/'}
                            className='bg-[#222222] rounded-full w-10 h-10 flex justify-center items-center'
                            target='_blank'
                        ><span><FaLinkedinIn color='#D3E97A' /> </span></Link>
                        <Link
                            href={'https://github.com/Hassan3108huzaifa'}
                            className='bg-[#222222] rounded-full w-10 h-10 flex justify-center items-center'
                            target='_blank'
                        ><span><FaGithub color='#D3E97A' /> </span></Link>
                    </div>
                </div>
                    
            </div>
        </div>                          
  )
}

export default About1