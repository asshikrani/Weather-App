import { Facebook, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 font-sans text-gray-300 py-2 mt-6">
      <div className="flex flex-col  justify-center items-center gap-1.5"> 
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/ahmad.siddique.654365"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-siddique-2bb73430a//"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/asshikrani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-200"
          >
            <Github size={22} />
          </a>
        </div>
        
        {/* Left side - Brand / Copy */}
        <p className="text-sm text-center md:text-left">
          © 2025 Mosam. All rights reserved.
        </p>
        <p className="text-sm text-center md:text-left">
         Powered by <a className="text-green-600 cursor-pointer" href="https://ahmadsiddique.vercel.app/">AhmadSiddique</a>.
        </p>

        {/* Right side - Social Links */}
      </div>
    </footer>
  );
};

export default Footer;
