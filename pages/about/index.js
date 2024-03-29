import React, { useState } from 'react';
import ParticlesContainer from '../../components/ParticlesContainer';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaShopify,
  FaPhp,
  FaNode,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Front-End Developer',
        icons: [FaHtml5,FaCss3,FaJs,
          FaReact,
          ,
          FaShopify,
          ],
      },
      {
        title: 'Back-End Developer',
        icons: [
          FaPhp,
          FaNode,
          FaGithub,
        ]
      },
      {
        title: 'UI/UX Design',
        icons: [
          FaFigma,
          SiAdobexd,
        ]
      },
    ]
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Bootcamp FullStack - Pixel',
        stage: '2022',
      },
      {
        title: 'Training FullStack - Oxygen Academy',
        stage: '2023',
      },
      {
        title: 'Front End Developer - Velites',
        stage: '2023',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';


//counter

import CountUp from 'react-countup';

const About = () => {

  const [index, setIndex] = useState(0);
  
  const renderIcons = (icons) => {
    return icons.map((Icon, index) => {
      // Asegúrate de que Icon sea un componente válido antes de renderizarlo
      if (typeof Icon === 'function' || typeof Icon === 'object') {
        return <Icon key={index} className="text-2xl text-cyan-800 dark:text-accent" />;
      }
      return null; // En caso de que no sea un componente válido, no renderizar nada (o manejar como se desee)
    });
  };

  return (
  <div className='h-full bg-primary dark:bg-black py-32 text-center xl:text-left'>
    <Circles />
    <motion.div 
    variants={fadeIn('right', 0.2)}
    initial='hidden'
    animate= 'show'
    exit= 'hidden'
    className='hidden xl:flex absolute bottom-0 -left-[370px]'
    >
      {/*<Avatar />*/}
    </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6' >
        <div className='flex-1 flex flex-col justify-center'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate= 'show'
            exit= 'hidden' 
            className='h2 text-cyan-800 dark:text-white'
            >
            This is my <span className='text-accent '>technical</span>  stack
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate= 'show'
            exit= 'hidden'
            className='hidden md:block max-w-[500px] text-slate-800 dark:text-white mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
              Two years into my programming journey, I’ve mastered the MERN stack through a focused full-stack bootcamp. Equipped with hands-on experience and a project portfolio, I am actively seeking employment where I can contribute to innovative tech solutions and grow professionally.
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate= 'show'
            exit= 'hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex  flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative  flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-8 after:right-0'>
                <div className='text-2xl  xl:text-4xl font-extrabold text-cyan-800 dark:text-accent mb-2'>
                  <CountUp start={0}  end={2} duration={10} /> +
                </div>
              <div className='text-xs text-cyan-800 dark:text-accent uppercase tracking-[1px] leading-[1.4] max-w-[100px]'> Years of experience</div>
              </div>
              {/* clients */}
              {/*<div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-8 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0}  end={250} duration={5} /> +
                </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'> Satisfaced client</div>
              </div>*/}
              {/* proyects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-8 after:right-0'>
                <div className='text-2xl text-cyan-800 dark:text-accent xl:text-4xl font-extrabold  mb-2'>
                  <CountUp start={0}  end={15} duration={5} /> +
                </div>
              <div className='text-xs text-cyan-800 dark:text-accent uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished proyects</div>
              </div>
              {/* awards */}
              
            </div>
          </motion.div>
          <ParticlesContainer />

          
        </div>
        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate= 'show'
          exit= 'hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gapx8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) =>{
            return (
            <div 
              key={itemIndex} 
              className={`${
                index === itemIndex && 
                'dark:text-white text-black    after:w-[100%] after:bg-accent   after:transition-all after:duration-300'
            } cursor-pointer   capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:-bottom-1   after:left-0 text-accent dark:text-accent`}
            onClick={()=> setIndex(itemIndex)}
              >
              {item.title}
              
              </div>
            );
          })}
        </div>
        <div className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
            <div key={itemIndex} 
              className=' flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center  text-black'>
              {/* title */}
              <div className='font-light mb-2 md:mb-0 dark:text-white text-black '>{item.title}</div>
              <div className='hidden md:flex text-cyan-800'>-</div>
              <div className='dark:text-white'>{item.stage}</div>
              <div className='flex gap-x-4 '> 
              {/* Icons */}
              {item.icons && renderIcons(item.icons)}

              </div>
            </div>
            );
          })}
        </div>
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
            className='bg-accent dark:bg-cyan-800 hover:bg-accent-hover text-white font-bold py-2 px-4 rounded'
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};

export default About;
