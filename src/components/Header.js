import React from 'react';

const Header = () => (

  <div className="px-6 pt-6 lg:px-8">
  <nav className="flex items-center justify-between" aria-label="Global">
    <div className="flex flex-1" />
    <div className="flex lg:hidden">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Open main menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      <a href="#/" className="link">About</a>

      <a href="#/" className="link">Experience</a>

      <a href="#/" className="link">Work</a>

      <a href="#/" className="link">Contact</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="./aqui-va-el-curriculum" download className="text-sm font-mono leading-6 text-blue py-2 px-4 border border-blue rounded-md">Resume</a>
    </div>
  </nav>
</div>
);

export default Header