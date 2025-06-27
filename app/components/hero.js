'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center md:justify-between gap-0 md:gap-6">
      


      {/* Left Section: Text */}
      <div className="max-w-lg text-center md:text-left z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Wapung Farm Fresh <span className="text-orange-500">FPCL</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">Based in East Jaintia District of Meghalaya</p>

        <Link href="#"
          className="mt-6 inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-md hover:scale-105"
        >
          EXPLORE
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
          </svg>
        </Link>
      </div>

      {/* Right Section: Orange image (hidden on mobile) */}
      <div className="relative hidden md:block z-10">
        <img src="/orange.png" alt="Fresh Orange Stack" className="h-48 md:h-64 mx-auto drop-shadow-xl" />
      
      </div>
    <div className="relative hidden md:block z-10 ">
        <img src="/turmeric.png" alt="Fresh Orange Stack" className="h-48 md:h-64 mx-auto drop-shadow-xl" />
      
      </div>

      {/* Scroll Indicator (desktop only) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block z-0">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-gray-400 animate-scroll-down rounded-full"></div>
        </div>
      </div>

      {/* Extra CSS for animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-scroll-down {
          animation: scrollDown 1.2s infinite;
        }
        @keyframes scrollDown {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
