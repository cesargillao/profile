import { Contact, Header, ProjectItem } from './components';

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
        <Contact />
      </main>
    </div>
  )
}

export default App;
