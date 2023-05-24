import { Contact, Work, Header } from './components';

const App = () => {
  return (
    <div className="isolate min-h-screen">
      <Header />
      <main className="mt-14">
        <Work />
        <Contact />
      </main>
    </div>
  )
}

export default App;
