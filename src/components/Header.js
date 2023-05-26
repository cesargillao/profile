import { useState } from 'react';
import Logo from '../assets/images/prusked.png';
import MenuIcon from '../assets/icons/menu.svg';
import CloseCircleIcon from '../assets/icons/close-circle.svg';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openResumeBar() {
    const element = document.getElementById('resume-bar');
    if (element.classList.contains('open')) return;
    element.classList.add('open');
  }

  function toggleMenu() {
    const menu = document.getElementById('link-group');
    const isOpen = !menu.classList.contains('hidden');

    if (isOpen) {
      menu.classList.add('hidden')
      menu.classList.remove('flex');
    } else {
      menu.classList.remove('hidden');
      menu.classList.add('flex');
    }

    setIsMenuOpen(!isOpen);
  }

  return (
    <div className="w-full fixed">
      <nav className="bg-white/10 h-16 w-full absolute -z-10" />
      <nav className="h-16 lg:px-8 top-0 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1 pl-4">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">César Gil Lao</span>
            <img className="h-12" src={Logo} alt="Logo" />
          </a>
        </div>
        <div id="link-group" className="hidden">
          <a href="#about" className="link">About</a>
          <a href="#experience" className="link">Experience</a>
          <a href="#work" className="link">Work</a>
          <a href="#contact" className="link">Contact</a>
          <span
            className="link text-blue lg:hidden"
            onClick={() => {
              toggleMenu();
              openResumeBar();
            }}
          >
            Resume
          </span>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            onClick={() => openResumeBar()}
            className="text-sm font-mono leading-6 text-blue py-2 px-4 border border-blue rounded-md"
          >
            Resume
          </button>
        </div>
        <div className="flex pr-4 lg:hidden">
          <img
            className="w-7"
            src={isMenuOpen ? CloseCircleIcon : MenuIcon}
            alt="Menu"
            onClick={() => toggleMenu()}
          />
        </div>
      </nav>
    </div>
  )
}

export default Header