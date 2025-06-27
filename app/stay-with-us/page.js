export default function AgriTourismHomestay() {
  const services = [
    {
      title: "Experience Nature's Tranquility",
      description: "Escape the hustle and bustle of everyday life and immerse yourself in the natural beauty of East Jaintia Hills. Our homestays provide the perfect setting to unwind and rejuvenate. Wake up to the symphony of birds, breathe in the fresh mountain air, and explore the verdant landscapes.",
      image: "/house1.avif", // Replace with your image path
      alt: "Experience Nature's Tranquility",
    },
    {
      title: "Comfort and Warm Hospitality",
      description: "Escape the hustle and bustle of everyday life and immerse yourself in the natural beauty of East Jaintia Hills. Our homestays provide the perfect setting to unwind and rejuvenate. Wake up to the symphony of birds, breathe in the fresh mountain air, and explore the verdant landscapes.",
      image: "/house2.avif", // Replace with your image path
      alt: "Comfort and Warm Hospitality",
    },
    {
      title: "Adventure Awaits",
      description: "For the adventure enthusiasts, East Jaintia Hills is a paradise waiting to be explored. Trek through dense forests, discover hidden waterfalls, and marvel at the diverse flora and fauna. The best season to visit is from October to May.",
      image: "/house3.avif", // Replace with your image path
      alt: "Adventure Awaits",
    },

  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 md:px-8 lg:px-12 font-poppins relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
          Agri-Tourism Homestay Services
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience the beauty of nature at our homestay while exploring our farm fresh products.
        </p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-6 break-inside-avoid"
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-48 md:h-56 object-cover rounded-xl mb-4 transform hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg md:text-xl font-bold text-orange-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
           
            </div>
          ))}
        </div>
        {/* CTA Section */}
        <div className="mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 py-10 md:py-12 px-4 md:px-8 rounded-2xl text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">
                Book a Stay Now!
              </h2>
              <p className="text-base md:text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Experience the ultimate getaway with our homestay services. Reserve your spot today!
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <a
                  href="tel:+918234567890"
                  className="bg-white text-orange-600 font-semibold px-5 py-2 md:px-6 md:py-3 rounded-full hover:bg-orange-100 transition-all duration-300 text-base md:text-lg"
                >
                  Contact Us: +91 82345-67890
                </a>
                <button className="bg-white text-orange-600 font-semibold px-5 py-2 md:px-6 md:py-3 rounded-full hover:bg-orange-100 transition-all duration-300 text-base md:text-lg">
                  Book Now
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-1/3 h-full bg-orange-400/30 transform -skew-x-12 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}