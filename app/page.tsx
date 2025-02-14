export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-gray-900">Rekreate</div>
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#technology" className="text-gray-600 hover:text-gray-900">Research</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Pioneering the Future of
              <span className="text-blue-600"> Audio Intelligence</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Building foundational models that understand, generate, and transform the world of sound.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
          <div className="mt-6 text-gray-500">
            <p className="mt-4">
              Rekreate is pushing the boundaries of audio AI through groundbreaking research in 
              foundational models. Our team of researchers and engineers is dedicated to developing 
              the next generation of audio understanding and generation systems, enabling new 
              possibilities in how we interact with and create sound.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div id="technology" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Research</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">Foundational Audio Models</h3>
              <p className="mt-4 text-gray-500">
                Developing novel architectures for understanding and generating complex audio 
                patterns at unprecedented scales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900">Deep Audio Research</h3>
              <p className="mt-4 text-gray-500">
                Advancing the field through innovative approaches to audio processing, 
                representation learning, and neural synthesis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <div className="mt-6 text-gray-500">
            <p>Interested in collaborating or learning more about our research?</p>
            <p className="mt-2">Email: contact@rekreate.ai</p>
            <p>Headquarters: San Francisco </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2025 Rekreate, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
