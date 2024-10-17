'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      // If not on the home page, navigate to home and then scroll
      router.push('/#contact-section')
    }
  }

  return (
    <div>
      <div className='flex justify-between items-center mx-auto max-w-7xl p-5'>
        <div className={`font-bebas-neue text-3xl`}>Hassan RJ</div>
        <ul className='flex gap-6 font-manrope text-[#C7C7C7]'>
            <button onClick={() => router.push('/')}>Home</button>
            <button onClick={() => router.push('/about')}>About</button>
            <button onClick={scrollToContact}>Contact</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
