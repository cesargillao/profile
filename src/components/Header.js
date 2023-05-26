import Logo from '../assets/images/prusked.png';
import MenuIcon from '../assets/icons/menu.svg';

const Header = () => {

  function openResumeBar() {
    const element = document.getElementById('resume-bar');
    if (element.classList.contains('open')) return;
    element.classList.add('open');
  }

  return (
    <div className="w-full fixed">
      <nav className="bg-white/10 h-16 w-full absolute -z-10" />
      <nav className="h-16 px-6 lg:px-8 top-0 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">César Gil Lao</span>
            <img className="h-12" src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <img src={MenuIcon} alt="Menu" />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#about" className="link">About</a>

          <a href="#experience" className="link">Experience</a>

          <a href="#work" className="link">Work</a>

          <a href="#contact" className="link">Contact</a>
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
      </nav>
    </div>
  )
}

export default Header