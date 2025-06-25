import Image from "next/image";
import CTAButton from './CTAButton'

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F4C542] py-12 md:py-24 min-h-[500px] flex items-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10">
        {/* Left Side */}
        <div className="w-full md:w-5/12 flex flex-col items-start justify-center text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Fueling Growth Through <br className="hidden sm:block" />
            Conversations & Conversions
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-lg">
            We help businesses grow with Podcasts, Round Tables, and ROI-driven Sales &amp; Marketing.
          </p>
          <CTAButton
            href="/services"
            className="bg-gray-900 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Explore Our Services
          </CTAButton>
        </div>
        {/* Right Side - Even Larger Image */}
        <div className="w-full md:w-7/12 flex justify-center items-center mb-0">
          <Image
            src="/podcast_hero.png"
            alt="Consulting Firm Podcast Hero"
            width={700}
            height={560}
            className="w-[350px] h-[280px] md:w-[700px] md:h-[560px] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
} 