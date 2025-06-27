export default function FreshProduce() {
  return (
    <section className="bg-gradient-to-b from-gray-200 to-grey-100 py-16 px-4 md:px-12 font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Fresh <span className="text-orange-500">Produce</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Locally grown fruits and vegetables for your table
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Khasi Mandarin */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <img
              src="/fruit1.avif" // Replace with your image path in the public folder
              alt="Khasi Mandarin"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Khasi Mandarin</h3>
            <p className="text-gray-600 text-sm mb-4">Juicy and flavorful mandarins straight from our farm</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
              Explore
            </button>
          </div>

          {/* Radish */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <img
              src="/fruit2.avif" // Replace with your image path in the public folder
              alt="Radish"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Radish</h3>
            <p className="text-gray-600 text-sm mb-4">Crunchy and nutritious radishes harvested with care</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
              Explore
            </button>
          </div>

          {/* Cucumber */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <img
              src="/fruit3.avif" // Replace with your image path in the public folder
              alt="Cucumber"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cucumber</h3>
            <p className="text-gray-600 text-sm mb-4">Fresh and crisp cucumbers perfect for salads</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}