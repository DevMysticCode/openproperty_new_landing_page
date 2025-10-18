import ChipsScene from './components/ChipsScene'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <nav className="flex-shrink-0 z-10 flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
          <span className="text-lg md:text-xl font-medium">OpenProperty</span>
        </div>
      </nav>

      <main className="flex-1 flex items-center py-8 md:py-0">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* ChipsScene moved to top on mobile */}
            <div className="order-1 md:order-2 flex items-center justify-center w-full h-full md:min-h-[400px]">
              <ChipsScene height="100%" />
            </div>

            {/* Text content */}
            <div className="order-2 md:order-1 space-y-6 md:space-y-8 text-center md:text-left">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-tight tracking-tight mb-4 md:mb-8">
                <span className="text-[#eb611d]">New website</span>
                <br />
                <span className="text-white">coming soon!</span>
              </h1>

              <div className="space-y-2 text-sm md:text-base lg:text-lg">
                <p className="text-gray-300">
                  Our current website is undergoing a{' '}
                  <em className="italic">facelift, </em>
                </p>
                <p className="text-gray-300">
                  we will be back shortly with something
                </p>
                <p className="text-gray-300">
                  <em className="italic">bigger</em> and{' '}
                  <em className="italic">better</em>. See you soon, OpenProperty
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Powered by Openproperty footer */}
      <footer className="flex-shrink-0 w-full py-6 text-center">
        <p className="text-gray-400 text-base md:text-lg">
          Powered by <span className="text-[#eb611d]">OpenProperty</span>
        </p>
      </footer>
    </div>
  )
}

export default App
