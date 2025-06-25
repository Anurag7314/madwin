export default function RoundTable() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Round Table Discussions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join industry experts and thought leaders in intimate discussions about 
              the most pressing challenges facing modern businesses today.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Upcoming Round Tables
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-600 font-medium">December 15, 2024</span>
                  <span className="text-sm text-gray-500">2:00 PM EST</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  The Future of Remote Work
                </h3>
                <p className="text-gray-600 mb-6">
                  Join us for a deep dive into how remote work is reshaping organizational 
                  culture, productivity, and employee engagement in the post-pandemic era.
                </p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Featured Speakers:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sarah Johnson - HR Director, TechCorp</li>
                    <li>• Michael Chen - Organizational Psychologist</li>
                    <li>• Dr. Emily Rodriguez - Workplace Culture Expert</li>
                  </ul>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Register for Event
                </button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-green-600 font-medium">January 8, 2025</span>
                  <span className="text-sm text-gray-500">1:00 PM EST</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  AI in Business Strategy
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore how artificial intelligence is transforming business strategy 
                  and decision-making processes across industries.
                </p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Featured Speakers:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• David Kim - AI Strategy Consultant</li>
                    <li>• Lisa Thompson - CTO, Innovation Labs</li>
                    <li>• Prof. James Wilson - Business Technology Expert</li>
                  </ul>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
                  Register for Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Past Round Tables
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Past Event 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-500 mb-2">November 20, 2024</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Sustainable Business Practices
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Discussion on implementing sustainable practices in modern business operations.
              </p>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Watch Recording →
              </button>
            </div>

            {/* Past Event 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-500 mb-2">October 15, 2024</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Digital Marketing Evolution
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                How digital marketing strategies are evolving in the age of social media.
              </p>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Watch Recording →
              </button>
            </div>

            {/* Past Event 3 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-500 mb-2">September 28, 2024</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Leadership in the Digital Age
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Modern leadership challenges and strategies for the digital era.
              </p>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                Watch Recording →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Next Round Table
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Connect with industry leaders and gain valuable insights from our expert-led discussions.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
            View All Events
          </button>
        </div>
      </section>
    </div>
  )
} 