import Link from 'next/link'
import React from 'react'

function About() {
    return (
        <div className='flex justify-center items-center my-14 md:my-15'>
            <div className='flex flex-col lg:flex-row lg:justify-between max-w-7xl p-5 gap-5 lg:gap-10 w-full'>
                <div className='w-full lg:w-1/1'>
                    <h1 className='text-5xl md:text-6xl lg:text-8xl font-bebas-neue lg:ml-10'>ABOUT ME</h1>
                </div>
                <div className='w-full flex flex-col '>
                    <h1 className='font-manrope font-medium text-3xl '>Hassan | Enthusiastic Frontend Student at GIAIC, Exploring Web Development</h1>
                    <p className='text-lg lg:text-xl font-manrope text-left text-[#C7C7C7] mt-3'>I&apos;m Hassan, a passionate frontend development student at GIAIC. I&apos;ve learned HTML, CSS, JavaScript, and Tailwind CSS, building several impressive projects. I&apos;ve also participated in a hackathon, honing my skills further. Though my course covers IT, starting with full-stack and later advancing to AI, I&apos;m currently focused on mastering frontend technologies, preparing for more complex AI topics in the future.</p>
                    <Link href={'https://www.linkedin.com/in/hassan-rj-148220295/'}
                        target='_black'
                        className='underline text-[#D3E97A] font-manrope font-bold mt-20 mb-56'> More About Me</Link>
                </div>
            </div>
        </div>
    )
}

export default About
