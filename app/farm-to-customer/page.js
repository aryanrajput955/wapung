
export default function DiscoverProducts() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-12 font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Discover Meghalaya's Finest
        </h2>
        <p className="text-orange-500 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Natural products delivered to your doorstep!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Himalayan Multi-Flora Forest Honey */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
            <img
              src="/prod1.avif" // Replace with your image path in the public folder
              alt="Himalayan Multi-Flora Forest Honey"
              className="w-full h-48 bg-gray-100 object-contain rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Himalayan Multi-Flora Forest Honey</h3>
            <p className="text-gray-600 text-sm mb-auto">
              Wapung Farm Fresh Farmer Producer Company Limited offers 100% Pure, Unprocessed Natural Forest Honey from the dense forest of Himalaya, North East (Meghalaya).
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors mt-auto">
              BUY NOW
            </button>
          </div>

          {/* Organic Black Pepper */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
            <img
              src="/prod2.avif" // Replace with your image path in the public folder
              alt="Organic Black Pepper"
              className="w-full h-48 object-contain bg-gray-100 rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Organic Black Pepper</h3>
            <p className="text-gray-600 text-sm mb-auto">
              Wapung Farm Fresh Farmers Producer Company Limited offers organic Raw Black Pepper to their Consumers.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors mt-auto">
              BUY NOW
            </button>
          </div>

          {/* Lakadong Turmeric Powder */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
            <img
              src="/prod3.png" // Replace with your image path in the public folder
              alt="Lakadong Turmeric Powder"
              className="w-full h-48 object-contain bg-gray-100 rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Lakadong Turmeric Powder</h3>
            <p className="text-gray-600 text-sm mb-auto">
              Wapung Farm Fresh Farmer Producer Company Limited is situated in East Jaintia district of Meghalaya. Our company offers high medicinal value organic Lakadong Turmeric to their consumers across India.
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors mt-auto">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
