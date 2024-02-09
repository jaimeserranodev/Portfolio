// links
import Link from "next/link";
import { useEffect, useState } from 'react';

// icons
import { 
  RiLinkedinBoxLine,
  RiGithubLine,
} from 'react-icons/ri'

const Socials = () => {
 // Estado para manejar el modo oscuro
 const [darkMode, setDarkMode] = useState(null);
 useEffect(() => {
  // Now that we are client-side, we can safely check the preference
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkMode(prefersDarkMode);
}, []);

useEffect(() => {
  if (darkMode !== null) { // Ensure darkMode has been set
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}, [darkMode]);

useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = () => setDarkMode(mediaQuery.matches);

  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);

// Comprobar preferencias del sistema en tiempo real (opcional)
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <button className="hover:text-accent dark:hover:text-accent text-black dark:text-white dark:filter-none" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Light' : 'Dark'}
    </button>
      <Link href={'https://www.linkedin.com/in/jaime-serrano-mi%C3%B1o-4b8bab150/'} className="dark:hover:text-accent hover:text-accent text-black dark:text-white dark:filter-none transition-all duration-300">
        <RiLinkedinBoxLine />
      </Link>
      <Link href={'https://github.com/jaimeserranodev'} className="dark:hover:text-accent hover:text-accent text-black dark:text-white dark:filter-none transition-all duration-300">
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
