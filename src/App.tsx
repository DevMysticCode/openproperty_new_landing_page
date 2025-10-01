import ChipsScene from './components/ChipsScene'

function App() {
  return (
    <div className="h-screen bg-black text-white overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
          <span className="text-lg md:text-xl font-medium">umovingu</span>
        </div>
      </nav>

      <main className="h-full flex items-center pt-16 md:pt-0">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* ChipsScene moved to top on mobile */}
            <div className="order-1 md:order-2 flex items-center justify-center w-full h-full md:min-h-[400px]">
              <ChipsScene height="100%" />
            </div>

            {/* Text content */}
            <div className="order-2 md:order-1 space-y-6 md:space-y-8 text-center md:text-left">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight tracking-tight mb-8">
                <span className="text-teal-400">New website</span>
                <br />
                <span className="text-white">coming soon!</span>
              </h1>

              <div className="space-y-2 text-base md:text-lg">
                <p className="text-gray-300">
                  Our current website is undergoing a{' '}
                  <em className="italic">small</em>
                </p>
                <p className="text-gray-300">
                  facelift, we will be back shortly with something
                </p>
                <p className="text-gray-300">
                  <em className="italic">bigger</em> and{' '}
                  <em className="italic">better</em>. See you soon, UMU
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Powered by Openproperty footer */}
        <footer className="absolute bottom-10 left-0 right-0 py-4 text-center">
          <p className="text-gray-400 text-lg">
            Powered by <span className="text-teal-400">OpenProperty</span>
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
