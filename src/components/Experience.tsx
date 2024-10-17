import React from 'react'

const Experience = () => {
    return (
        <div className='flex justify-center items-center my-14 md:my-15'>
            <div className='flex flex-col lg:flex-row lg:justify-between max-w-7xl p-5 gap-5 lg:gap-10 w-full'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bebas-neue lg:ml-10'>MY CAPABILITIES</h1>
                </div>
                <div className='w-full flex flex-col lg:w-1/2'>
                    <div>
                        <div className='md:flex justify-between items-center'>
                            <h1 className='font-manrope font-medium text-xl '>HTML, CSS & Next.js Mastery</h1>
                            <p className='font-manrope text-[#C7C7C7] mt-1 md:mt-0'>Nov 2024 — Present </p>
                        </div>
                        <p className='text-lg lg:text-xl font-manrope text-left text-[#C7C7C7] mt-5'>Learning HTML, CSS, and Next.js to create dynamic user interfaces and beautify applications, focusing on improving user experiences and design aesthetics in web development.</p>
                    </div>
                    <div>
                        <div className='md:flex justify-between items-center mt-20'>
                            <h1 className='font-manrope font-medium text-xl '>JavaScript & TypeScript Proficiency</h1>
                            <p className='font-manrope text-[#C7C7C7] mt-1 md:mt-0'>Jun 2023 — feb 2024 </p>
                        </div>
                        <p className='font-manrope text-[#D3E97A] mt-1 md:mt-2'>Roos Tech</p>
                        <p className='text-lg lg:text-xl font-manrope text-left text-[#C7C7C7] mt-5'>Gained proficiency in JavaScript and TypeScript while developing CLI projects and publishing them on npm, enhancing my coding skills and understanding of package management.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience