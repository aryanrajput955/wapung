export default function FarmFreshServices() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-16 font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          Farm Fresh <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover a serene range of services including agri-tourism, homestay, and fresh produce, crafted to bring you closer to nature.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <img
                src="service.avif" // Replace with your image path in the public folder
                alt="Farm Fresh Produce"
                className="object-cover w-full h-64 md:h-80"
              />
            

            </div>
          </div>
          <div className="w-full md:w-1/3 text-left space-y-8">
            <div className="group">
              <h3 className="text-xl font-semibold text-orange-500 mb-2 group-hover:text-gray-700 transition-colors">
                Fresh Produce Selection
              </h3>
              <p className="text-gray-600 text-base leading-loose">
                Choose from a variety of fresh produce including Khasi mandarin, radish, cucumber, and beans.
              </p>
            </div>
            <div className="group">
              <h3 className="text-xl font-semibold text-orange-500 mb-2 group-hover:text-gray-700 transition-colors">
                Agri-Tourism Experience Available Here
              </h3>
              <p className="text-gray-600 text-base leading-loose">
                Immerse yourself in nature with our agri-tourism services and experience farm life firsthand.
              </p>
            </div>
            <div className="group">
              <h3 className="text-xl font-semibold text-orange-500 mb-2 group-hover:text-gray-700 transition-colors">
                Homestay Accommodation Options
              </h3>
              <p className="text-gray-600 text-base leading-loose">
                Relax and unwind in our cozy homestay accommodations surrounded by lush greenery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}