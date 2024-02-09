import '../styles/globals.css';

// router
import { useRouter } from 'next/router';

//components
import Layout from '../components/Layout';
import  Transition  from '../components/Transition';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
  <Layout class="dark">
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
        <Transition />
        <Component {...pageProps} />
      </motion.div>
      
    </AnimatePresence>
        
  </Layout>
  )
}

export default MyApp;
