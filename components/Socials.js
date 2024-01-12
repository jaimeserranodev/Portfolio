// links
import Link from "next/link";

// icons
import { 
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
  RiBehanceLine,
  RiGithubLine,
  RiPinterestLine,
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      
      <Link href={'https://www.linkedin.com/in/jaime-serrano-mi%C3%B1o-4b8bab150/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine />
      </Link>
      <Link href={'https://github.com/jaimeserranodev'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
