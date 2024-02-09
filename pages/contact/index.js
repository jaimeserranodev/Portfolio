// components 
import Circles from '/components/Circles';
import Link from 'next/link';

//icons
import {BsArrowRight} from 'react-icons/bs';
import { 
  RiLinkedinBoxLine,
} from 'react-icons/ri'

import React, { useState } from 'react';


// framer
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../../variants';
import Socials from '../../components/Socials';

const aboutData = [
  {
    title: 'Contact',
    info: [
      {
        title: 'Email',
        email: "jaime.serrano.dev@gmail.com",
      },
      {
        title: 'Linkedin',
        icons: RiLinkedinBoxLine,
        url: "https://www.linkedin.com/in/jaime-serrano-miño-4b8bab150/"
        
      },
      
    ]
  },
  
];


const Contact = () => {

  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary dark:bg-black'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        
          {/* text  & form*/}
          <div className='flex flex-col w-full max-w-[900px] items-center justify-center'>
          <motion.h2 
            initial='hidden'
            animate='show'
            exit='hidden'
            variants={fadeIn('up', 0.2)}

            className='h2 text-center mb-12 text-cyan-800 dark:text-white'>
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* SUBTITLE */}

          <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate= 'show'
          exit= 'hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[350px] items-center justify-center'>
            <motion.p 
            variants={fadeIn("down", 0.3)} 
            initial="hidden" 
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:text-center text-slate-800 dark:text-white">
              Welcome to my contact page! Here, you can easily reach out to me via email, connect with me on LinkedIn, or download my CV for a comprehensive overview of my skills and experiences. Let&apos;s make your next project a success together.
          </motion.p>
          <div className='flex gap-x-4 xl:gapx8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) =>{
            return (
            <div 
              key={itemIndex} 
              className={`${
                index === itemIndex && 
                'text-black dark:text-white after:w-[100%] after:bg-accent after:transition-all after:duration-300'
            } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:-bottom-1   after:left-0`}
            onClick={()=> setIndex(itemIndex)}
              >
              {item.title}
              {item.url ? (
          <Link href={item.url} target="_blank" rel="noopener noreferrer">
            <item.icons className="text-2xl text-white" /> {/* Asume que los íconos son componentes */}
          </Link>
        ) : item.icons ? (
          <item.icons className="text-2xl text-white " />
        ) : null}
              </div>
            );
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>

        {aboutData[index].info.map((item, itemIndex) => {
          const IconComponent = item.icons; // Asigna el componente del ícono a una variable
          return (
              <div key={itemIndex} 
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-black dark:text-white'>
                {/* title */}
                <div className='font-light mb-2 md:mb-0 text-black dark:text-white'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div className='flex gap-x-4 text-black dark:text-white'> 
                  {/* Renderiza el icono como un componente si existe, envuelto en un enlace si tiene una URL */}
                  {item.email && (
          <span >{item.email}</span> // Aplica estilos en línea para el email
        )}
                  {IconComponent && item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <IconComponent className="text-2xl text-black dark:text-white"  />
                    </a>
                  ) : IconComponent ? (
                    <IconComponent className="text-2xl text-black dark:text-white"  />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
        </motion.div>

          
          {/* form */}
          <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=' m-8'
        >
          <a 
            href='/CV-Jaime.pdf' // Asegúrate de que la ruta coincida con la ubicación de tu archivo CV
            download
            className='bg-cyan-800 hover:bg-accent-hover text-white font-bold py-2 px-4 rounded'
          >
            Download CV
          </a>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
