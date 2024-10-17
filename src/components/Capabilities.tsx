
import React from 'react'

function Capabilities() {
    return (
        <div className='flex justify-center items-center my-14 md:my-15'>
            <div className='flex flex-col lg:flex-row lg:justify-between max-w-7xl p-5 gap-5 lg:gap-10 w-full'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bebas-neue lg:ml-10'>MY CAPABILITIES</h1>
                </div>
                <div className='w-full flex flex-col lg:w-1/2'>
                    <p className='text-lg lg:text-xl font-manrope text-left text-[#C7C7C7] mt-3'>Proficient in HTML, CSS, JavaScript, and Tailwind CSS, I have developed various dynamic projects. My hands-on experience includes participation in hackathons, enhancing my skills in frontend development and creative problem-solving.</p>
                    <div className='mt-10 flex gap-5 flex-wrap'>
                        <span className='border-2 border-[#484848] rounded-full px-10 py-3 font-manrope font-bold'>HTML</span>
                        <span className='border-2 border-[#484848] rounded-full px-10 py-3 font-manrope font-bold'>CSS</span>
                        <span className='border-2 border-[#484848] rounded-full px-10 py-3 font-manrope font-bold'>REACT</span>
                        <span className='border-2 border-[#484848] rounded-full px-10 py-3 font-manrope font-bold'>NEXTJS</span>
                        <span className='border-2 border-[#484848] rounded-full px-10 py-3 font-manrope font-bold'>TYPESCRIPT</span>
                        <span className='border-2 border-[#484848] rounded-full px-10 py-3 font-manrope font-bold'>FIGMA</span>
                        <span className='border-2 border-[#484848] rounded-full px-10 py-3 font-manrope font-bold'>TAILWINDCSS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Capabilities
