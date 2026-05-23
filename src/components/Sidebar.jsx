// Sidebar.jsx
import {
  FcAbout, FcContacts, FcDocument, FcHome, FcManager, FcWorkflow
} from 'react-icons/fc';
import {
  FaFacebook, FaInstagram, FaSkype, FaLinkedin
} from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Sidebar = ({ isMobile = false, onCloseSidebar = () => { } }) => {
  const commonLinkClass =
    "flex items-center gap-4 px-5 py-3.5 rounded-xl hover:bg-slate-800/50 hover:text-cyan-400 text-gray-400 transition-all duration-300 group font-medium";

  const navLinks = [
    { href: "#hero", icon: <FcHome className="text-xl opacity-80 group-hover:opacity-100 transition-opacity" />, text: "Home" },
    { href: "#about", icon: <FcAbout className="text-xl opacity-80 group-hover:opacity-100 transition-opacity" />, text: "About" },
    { href: "#education", icon: <FcDocument className="text-xl opacity-80 group-hover:opacity-100 transition-opacity" />, text: "Education" },
    { href: "#experience", icon: <FcWorkflow className="text-xl opacity-80 group-hover:opacity-100 transition-opacity" />, text: "Experience" },
    { href: "#projects", icon: <FcManager className="text-xl opacity-80 group-hover:opacity-100 transition-opacity" />, text: "Projects" },
    { href: "#contact", icon: <FcContacts className="text-xl opacity-80 group-hover:opacity-100 transition-opacity" />, text: "Contact" },
  ];

  return (
    <section
      className={`
        bg-slate-950/95 backdrop-blur-xl z-50 text-gray-300 flex flex-col h-screen p-6 transition-all duration-300
        border-r border-white/5
        ${isMobile
          ? "fixed top-0 left-0 z-40 w-3/4 max-w-sm shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
          : "fixed top-0 left-0 w-1/5 max-lg:hidden"
        }
      `}
    >
      <div className="flex flex-col items-center mb-10 pt-4">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
          <img
            className="relative rounded-full w-32 h-32 object-cover border-4 border-slate-900 mb-4 transition-all duration-500"
            src="/Profile.jpg"
            alt="Profile"
          />
        </div>
        <a href="#" className="text-center mt-2 group" onClick={isMobile ? onCloseSidebar : undefined}>
          <h1 className="font-bold text-2xl mb-1 text-white group-hover:text-cyan-400 transition-colors">Gnana Prakash G</h1>
          <p className="text-cyan-500/80 text-sm font-medium tracking-wide uppercase">Code & Cloud</p>
        </a>

        <div className="flex justify-center gap-4 mt-6">
          <a href="https://github.com/GG-Prakash" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all duration-300" onClick={isMobile ? onCloseSidebar : undefined}>
            <BsGithub className="text-lg" />
          </a>
          <a href="https://www.linkedin.com/in/gg-prakash" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all duration-300" onClick={isMobile ? onCloseSidebar : undefined}>
            <FaLinkedin className="text-lg" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all duration-300" onClick={isMobile ? onCloseSidebar : undefined}>
            <FaInstagram className="text-lg" />
          </a>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <ul className="space-y-2">
          {navLinks.map(({ href, icon, text }) => (
            <li key={href}>
              <a
                href={href}
                className={commonLinkClass}
                onClick={isMobile ? onCloseSidebar : undefined}
              >
                {icon}
                <span className="tracking-wide">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
