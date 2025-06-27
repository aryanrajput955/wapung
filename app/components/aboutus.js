'use client';

export default function AboutUsSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      
      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          <span className="border-b-4 border-orange-500 inline-block pb-1">About Us</span>
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          We are a farmer producer company based in East Jaintia district of Meghalaya, registered under central sector scheme for formation & promotion of 10,000 FPOs with SFAC as our implementation agency.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-orange-500">150+</h3>
            <p className="text-gray-600 mt-1">Shareholders</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-500">15</h3>
            <p className="text-gray-600 mt-1">Nature-loving clients</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[40%]">
        <img
          src="aboutus.png" 
          alt="About Wapung Farm Fresh"
          width="600"
          height="400"
          loading="lazy"
          decoding="async"
          className="rounded-xl shadow-xl object-cover w-full h-auto"
        />
      </div>
    </section>
  );
}
