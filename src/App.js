import { About, Contact, Header, ResumeBar, Work } from './components';

const App = () => {
  return (
    <div className="isolate min-h-screen">
      <Header />
      <ResumeBar />
      <main>
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App;
