import About1 from '@/components/About1'
import Capabilities from '@/components/Capabilities'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className="w-full overflow-hidden">
            <About1 />
            <div className="w-full max-w-7xl mx-auto px-4 flex justify-center mb-20">
                <Image
                    src={'/images/pic.jpg'}
                    layout="responsive"
                    width={800}
                    height={800}
                    alt="Developer Pic"
                />
            </div>
            <Capabilities />
            <hr className="border-[#484848] border-t" />
            <Experience/>
            <hr className="border-[#484848] border-t" />
            <Contact/>
        </div>
    )
}

export default About
