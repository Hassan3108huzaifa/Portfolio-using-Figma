import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

interface ProjectDara{
    title: string
    desc: string
    source: string
    demo: string
    githubLink: string
}

const PortfolioCard = (data: ProjectDara) => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-11'>
                <div className='max-w-10xl lg:max-w-10xl max-h-10xl bg-[#1A1A1A] rounded-2xl py-44 px-16'>
                    <div className='w-full md:w-full h-full flex justify-center items-center'>
                        <Image src={data.source} width={700} height={700} alt='E-commerce' />
                    </div>
                </div>
                <div className='w-full flex flex-col items-start justify-center'>
                    <div className='flex flex-col items-start'>
                        <h1 className='font-manrope font-medium text-4xl'>{data.title}</h1>
                        <div className='font-manrope'>
                            <p className='text-lg lg:text-xl font-manrope text-left text-[#C7C7C7] mt-6'>{data.desc}</p>
                        </div>
                        <div>
                            <h1 className='font-manrope font-semibold mt-6'>PROJECT INFO</h1>
                        </div>
                        <hr className='border-t border-white my-4 w-full' />
                        <div className='flex justify-between w-full'>
                            <div>Year</div>
                            <div>2024</div>
                        </div>
                        <hr className='border-t border-white my-4 w-full' />
                        <div className='flex justify-between w-full'>
                            <div>Role</div>
                            <div>Front-end Developer</div>
                        </div>
                        <hr className='border-t border-white my-4 w-full' />
                    </div>
                    <div className='flex gap-5 mt-10'>
                        <Link href={data.demo} target='_blank' className='text-[#D3E97A] hover:underline'>LIVE DEMO  ↗</Link>
                        <Link href={data.githubLink} target='_blank' className='flex hover:underline'>
                            <span className='text-[#D3E97A]'>SEE ON GITHUB</span>
                            <span><FaGithub color='#D3E97A' /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard
