import { About, Contact, Experience, Header, ResumeBar, Work } from './components';

const App = () => {
  return (
    <div className="isolate min-h-screen">
      <Header />
      <ResumeBar />
      <main>
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App;
