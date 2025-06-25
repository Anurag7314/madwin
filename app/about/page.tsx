import CTAButton from '@/components/CTAButton'

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "20+ years of experience in strategic consulting and business transformation.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Senior Partner",
      bio: "Expert in digital transformation and technology strategy implementation.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Research",
      bio: "PhD in Business Strategy with focus on organizational development.",
      image: "/api/placeholder/300/300"
    }
  ]

  const stats = [
    { number: "150+", label: "Clients Served" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
    { number: "$2B+", label: "Value Created" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Madwin Consulting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of experienced consultants passionate about helping businesses 
              navigate complex challenges and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Madwin Consulting, we believe that every business has the potential to 
                achieve extraordinary results. Our mission is to unlock that potential 
                through strategic guidance, innovative solutions, and unwavering commitment 
                to our clients' success.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We combine deep industry expertise with cutting-edge methodologies to 
                deliver measurable, sustainable results that transform businesses and 
                create lasting value for all stakeholders.
              </p>
              <CTAButton href="/services" variant="secondary">
                Explore Our Services
              </CTAButton>
            </div>
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Excellence</h4>
                      <p className="text-gray-600 text-sm">We strive for excellence in everything we do</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Integrity</h4>
                      <p className="text-gray-600 text-sm">Honest, transparent, and ethical in all our relationships</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Innovation</h4>
                      <p className="text-gray-600 text-sm">Constantly seeking new and better ways to solve problems</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team brings together diverse expertise and a shared passion 
              for helping businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8c0 2.208-1.79 4-3.998 4-2.208 0-3.998-1.792-3.998-4s1.79-4 3.998-4c2.208 0 3.998 1.792 3.998 4z"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how our team can help you achieve your business objectives.
          </p>
          <CTAButton href="/contact" variant="secondary" size="lg">
            Get in Touch
          </CTAButton>
        </div>
      </section>
    </div>
  )
} 