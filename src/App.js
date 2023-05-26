import { About, Contact, Header, ResumeBar, Work } from './components';

const App = () => {
  return (
    <div className="isolate min-h-screen">
      <Header />
      <ResumeBar />
      <main className="pt-16">
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App;
