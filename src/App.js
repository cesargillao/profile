import { Header, ProjectItem } from './components';

const App = () => {
  return (
    <div className="isolate min-h-screen">
      <Header />
      <main className="mt-14">
        <section className="projects">
          <h2 className="title">Some Things I've Built</h2>
          <ul>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </ul>
        </section>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Data to enrich your online business</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
