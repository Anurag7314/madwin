export default function Podcast() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What the Business Podcast
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, strategies, and conversations with industry leaders to help you 
              navigate the complex world of business consulting and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Episodes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Episode 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary-600 font-medium mb-2">Episode 23</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Digital Transformation Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore how leading companies are navigating digital transformation 
                  and what lessons we can learn from their journeys.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">45 min</span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Listen Now →
                  </button>
                </div>
              </div>
            </div>

            {/* Episode 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-green-600 font-medium mb-2">Episode 22</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Sustainable Business Growth
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover proven strategies for building sustainable business models 
                  that can weather economic uncertainties.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">38 min</span>
                  <button className="text-green-600 hover:text-green-700 font-medium">
                    Listen Now →
                  </button>
                </div>
              </div>
            </div>

            {/* Episode 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-2">Episode 21</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Leadership in Crisis
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn from industry leaders about effective crisis management 
                  and maintaining team morale during challenging times.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">52 min</span>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    Listen Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Never Miss an Episode of What the Business
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our podcast and get the latest insights delivered to your favorite platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/@MadwinAI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
            >
              <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 