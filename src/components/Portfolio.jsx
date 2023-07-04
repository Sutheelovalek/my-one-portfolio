import React from 'react'
import myProject1 from "../assets/portfolio/myProject1.png"
import myProject5 from "../assets/portfolio/myProject5.png"
import myProject3 from "../assets/portfolio/myProject3.png"
import myProject2 from "../assets/portfolio/myProject2.png"
import myProject4 from "../assets/portfolio/myProject4.png"
import myProject6 from "../assets/portfolio/myProject6.png"
const Portfolio = () => {

        const portfolios = [
            {
                id: 1,
                src: myProject1,
                href1: 'https://effulgent-empanada-4c931c.netlify.app/',
                href2: 'https://github.com/Sutheelovalek/car_showcase'
            },
            {
                id: 2,
                src: myProject2,
                href1: null,
                href2: 'https://github.com/Sutheelovalek/Course-Flow'
            },
            {
                id: 3,
                src: myProject3,
                href1: 'https://darling-creponne-4054f2.netlify.app/',
                href2: 'https://github.com/Sutheelovalek/tic-tac-toe-app/'
            },
            {
                id: 4,
                src: myProject4,
                href1: 'https://magical-basbousa-64a8bb.netlify.app/',
                href2: 'https://github.com/Sutheelovalek/react-real-estate'
            },
            {
                id: 5,
                src: myProject5,
                href1: 'https://nimble-cascaron-c7eadb.netlify.app/',
                href2: 'https://github.com/Sutheelovalek/my-bmi-calculator-app'
            },
            {
                id: 6,
                src: myProject6,
                href1: 'https://bright-sable-666fc2.netlify.app/',
                href2: 'https://github.com/Sutheelovalek/my-to-do-app'
            },
        ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bole inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my project right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, href1, href2}) => (
                <div 
                key={id}
                className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} 
                    alt="" 
                    className='rounded-md duration-200 hover:scale-105'
                    />
                    <div className='flex items-center justify-center'>
                        <a 
                            href={href1}
                            className='w-1/2 px-10 py-3 m-4 duration-200 hover:scale-105'>
                                Demo
                        </a>
                        <a 
                            href={href2}
                            className='w-1/2 px-10 py-3 m-4 duration-200 hover:scale-105'>
                                Code
                        </a>
                    </div>
                </div>

                    ))
                }


            </div>
        </div>




    </div>
  )
}

export default Portfolio