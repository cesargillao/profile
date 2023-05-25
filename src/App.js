import { About, Contact, Header, Work } from './components';

const App = () => {
  return (
    <div className="isolate min-h-screen">
      <Header />
      <main className="mt-14">
      <main className="pt-16">
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App;
