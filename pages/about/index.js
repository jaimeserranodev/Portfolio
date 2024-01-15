import React, { useState } from 'react';

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
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaShopify />,
        ],
      },
      {
        title: 'Back-End Developer',
        icons: [
          <FaPhp />,
          <FaNode />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
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
  return (
  <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    <motion.div 
    variants={fadeIn('right', 0.2)}
    initial='hidden'
    animate= 'show'
    exit= 'hidden'
    className='hidden xl:flex absolute bottom-0 -left-[370px]'
    >
      <Avatar />
    </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6' >
        <div className='flex-1 flex flex-col justify-center'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate= 'show'
            exit= 'hidden' 
            className='h2'
            >
            Captivating <span className='text-accent'>stories</span> birth magnificent designs.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate= 'show'
            exit= 'hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
              Two years into my programming journey, I’ve mastered the MERN stack through a focused full-stack bootcamp. Equipped with hands-on experience and a project portfolio, I am actively seeking employment where I can contribute to innovative tech solutions and grow professionally.
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate= 'show'
            exit= 'hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-8 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0}  end={2} duration={10} /> +
                </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'> Years of experience</div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-8 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0}  end={250} duration={5} /> +
                </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'> Satisfaced client</div>
              </div>
              {/* proyects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-8 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0}  end={15} duration={5} /> +
                </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished proyects</div>
              </div>
              {/* awards */}
              
            </div>
          </motion.div>
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
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
            } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1   after:left-0`}
            onClick={()=> setIndex(itemIndex)}
              >
              {item.title}
              </div>
            );
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex)=>{
            return (
            <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
              {/* title */}
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className='hidden md:flex'>-</div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>
                {/* icons */}
              {item.icons?.map((icon, iconIndex) => {
                return (
                  <div key={iconIndex} className='text-2xl text-white'>
                  {icon}
                </div>
                );
              })}
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
            className='bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded'
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
