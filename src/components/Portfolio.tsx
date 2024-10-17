import React from 'react'
import PortfolioCard from './portfolioCard'

const Portfolio = () => {
    return (
        <div className='flex justify-center items-center my-14 md:my-15'>
            <div className='flex flex-col lg:flex-row lg:justify-center items-center lg:mx-20 max-w-7xl p-5 gap-5 lg:gap-16'>
                <div className=''>
                    <div>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bebas-neue ml-0'>FEATURE PROJECTS</h1>
                        <p className='text-lg lg:text-xl font-manrope text-left text-[#C7C7C7] mt-3'>A passionate student of Information Technology, I am currently focusing on Cloud Computing, Generative AI, and Web 3.0 technologies. I am also a Full Stack Developer at the Governor House in Karachi, where I am gaining valuable experience and applying my skills in real-world projects.</p>
                    </div>
                    <div className='mt-14 md:mt-15 flex gap-32 flex-col'>
                        <PortfolioCard
                            title="ShopKaro - Our Ultimate COD Shopping Destination"
                            desc="ShopKaro offers a seamless shopping experience with smooth scrolling, a contact form linked to email, and a secure cash on delivery (COD) checkout system. Buy with ease, and stay updated through email notifications!"
                            source="/images/ecommerce.png"
                            demo="https://shopkaro-hassanrj.vercel.app/"
                            githubLink="https://github.com/Hassan3108huzaifa/First-Ecommerce-Website-ShopKaro.git"
                        />
                        <PortfolioCard
                            title="Hassan’s Portfolio - A Frontend Web Developer"
                            desc="Explore my web development journey, featuring projects, skills, and a functional contact form that delivers direct email responses. Showcasing my passion for creating interactive and user-friendly websites!"
                            source="/images/personal-portfolio.png"
                            demo='https://hassanrj-portfolio.vercel.app/'
                            githubLink='https://github.com/Hassan3108huzaifa/Personal-Portfolio.git'
                            />
                        <PortfolioCard
                            title="Dynamic Resume Builder - Create, Edit, and Download"
                            desc="A dynamic resume builder that allows users to easily create, edit, and download their resumes. Built with HTML and CSS, it offers a user-friendly interface for personalizing resumes on the go!"
                            source="/images/resumegenerator.png"
                            demo='https://dynamic-resumebuilder.netlify.app/'
                            githubLink='https://github.com/Hassan3108huzaifa/dynamic-resume-builder.git'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
