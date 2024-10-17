'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaLink } from 'react-icons/fa'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export default function Contact() {
    const [Name, setName] = useState<string>("");
    const [Email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [Message, setMessage] = useState<string>("");
    return (
        <div className='flex justify-center items-center mt-14 mb-0 md:my-15'>
            <div className='flex flex-col lg:flex-row lg:justify-between max-w-7xl p-5 gap-5 lg:gap-10 w-full'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bebas-neue'>Let&apos;s Connect</h1>
                    <span className='block mt-2 text-[#C7C7C7]'>
                        Say Hello at <Link href="mailto:huzaifa3108hassan@gmail.com" className='underline hover:text-[#D3E97A]'>huzaifa3108hassan@gmail.com</Link>
                    </span>
                    <span className='block mt-2 text-[#C7C7C7]'>
                        For more info, here&apos;s my <Link href="mailto:huzaifa3108hassan@gmail.com" className='underline hover:text-[#D3E97A]'>resume</Link>
                    </span>
                    <div className='flex py-10 gap-6'>
                        <Link href={'https://www.linkedin.com/in/hassan-rj-148220295/'} target='_blank' className='rounded-full w-10 h-10 flex justify-center items-center'><span><FaLinkedinIn color='#D3E97A' size={30} /> </span></Link>
                        <Link href={'https://github.com/Hassan3108huzaifa'} target='_blank' className='rounded-full w-10 h-10 flex justify-center items-center'><span><FaGithub color='#D3E97A' size={30} /> </span></Link>
                        <Link href={'https://www.instagram.com/mr.hassanbhai/'} target='_blank' className='rounded-full w-10 h-10 flex justify-center items-center'><span><FaInstagram color='#D3E97A' size={30} /> </span></Link>
                        <Link href={'https://hassanrj-portfolio.vercel.app/'} target='_blank' className='rounded-full w-10 h-10 flex justify-center items-center'><span><FaLink color='#D3E97A' size={30} /> </span></Link>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <form>
                        <div>
                            <label htmlFor="username" className='text-[#C7C7C7] text-sm mt-9 font-manrope font-medium'>Name</label>
                        </div>
                        <Input
                            value={Name}
                            type='text'
                            name='username'
                            onChange={(e) => setName(e.target.value)}
                            className='bg-[#1A1A1A] border-none mt-2 text-manrope py-6 px-5 text-xl'
                        />
                        <div className='mt-5'>
                            <label htmlFor="username" className='text-[#C7C7C7] text-sm mt-9 font-manrope font-medium'>Email</label>
                        </div>
                        <Input
                            value={Email}
                            type='email'
                            name='username'
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-[#1A1A1A] border-none mt-2 text-manrope py-6 px-5 text-xl'
                        />
                        <div className='mt-5'>
                            <label htmlFor="username" className='text-[#C7C7C7] text-sm mt-9 font-manrope font-medium'>Subject</label>
                        </div>
                        <Input
                            value={subject}
                            type='text'
                            name='username'
                            onChange={(e) => setSubject(e.target.value)}
                            className='bg-[#1A1A1A] border-none mt-2 text-manrope py-6 px-5 text-xl'
                        />
                        <div className='mt-5'>
                            <label htmlFor="username" className='text-[#C7C7C7] text-sm mt-9 font-manrope font-medium'>Message</label>
                        </div>
                        <Textarea
                            value={Message}
                            name='username'
                            onChange={(e) => setMessage(e.target.value)}
                            className='bg-[#1A1A1A] border-none mt-2 text-manrope py-6 px-5 text-xl'
                            rows={4}
                        />
                        <button
                            className='bg-[#D3E97A] text-black px-8 py-3 rounded-full font-manrope font-bold mt-12'
                            type='submit'
                        >
                            SUBMIT
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}