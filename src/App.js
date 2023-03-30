const App = () => {
  return (
    <div className="isolate min-h-screen">
      {/* <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="img" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#/" className="text-sm font-semibold leading-6 text-white">Product</a>

            <a href="#/" className="text-sm font-semibold leading-6 text-white">Features</a>

            <a href="#/" className="text-sm font-semibold leading-6 text-white">Marketplace</a>

            <a href="#/" className="text-sm font-semibold leading-6 text-white">Company</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#/" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
      </div> */}
      <main className="">
        <section className="projects">
          <h2 className="title">Some Things I've Built</h2>
          <ul>
            <li className="project">
              <div className="project-image">
                <img src="http://placeimg.com/640/480/food" alt="" />
              </div>
              <div className="project-content">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">Halcyon Theme</h3>
                <div className="project-description">
                  <p>Veniam excepteur Lorem consectetur ipsum dolore ullamco. Sunt eu aliquip ullamco minim exercitation tempor eiusmod laborum magna nostrud eiusmod nulla.</p>
                </div>
                <ul className="project-tech-list">
                  <li>VS Code</li>
                  <li>Sublime</li>
                  <li>Atom</li>
                  <li>ITerm2</li>
                  <li>Hyper</li>
                </ul>
              </div>
            </li>
            <li className="project">
              <div className="project-image">
                <img src="http://placeimg.com/640/480/food" alt="" />
              </div>
              <div className="project-content">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">Halcyon Theme</h3>
                <div className="project-description">
                  <p>Veniam excepteur Lorem consectetur ipsum dolore ullamco. Sunt eu aliquip ullamco minim exercitation tempor eiusmod laborum magna nostrud eiusmod nulla.</p>
                </div>
                <ul className="project-tech-list">
                  <li>VS Code</li>
                  <li>Sublime</li>
                  <li>Atom</li>
                  <li>ITerm2</li>
                  <li>Hyper</li>
                </ul>
              </div>
            </li>
            <li className="project">
              <div className="project-image">
                <img src="http://placeimg.com/640/480/food" alt="" />
              </div>
              <div className="project-content">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">Halcyon Theme</h3>
                <div className="project-description">
                  <p>Veniam excepteur Lorem consectetur ipsum dolore ullamco. Sunt eu aliquip ullamco minim exercitation tempor eiusmod laborum magna nostrud eiusmod nulla.</p>
                </div>
                <ul className="project-tech-list">
                  <li>VS Code</li>
                  <li>Sublime</li>
                  <li>Atom</li>
                  <li>ITerm2</li>
                  <li>Hyper</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
        {/* <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Data to enrich your online business</h1>
            </div>
          </div>
        </div> */}
      </main>
    </div>

  )
}

export default App;
