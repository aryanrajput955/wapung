export default function ExecutiveTeam() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-16 font-poppins">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-wide border-b-4 border-orange-500 inline-block pb-2">
          Executive Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* CEO */}
          <div className="flex items-center space-x-6 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="/person1.avif" // Replace with your image path in the public folder
              alt="Jhanika Siangshai"
              className="w-24 h-24 object-cover rounded-full border-4 border-orange-100"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">CEO</h3>
              <p className="text-gray-600 text-sm">jhanikas@gmail.com</p>
              <p className="text-gray-600 text-sm">9774179173</p>
              <p className="text-orange-500 mt-1">- Jhanika Siangshai</p>
            </div>
          </div>

          {/* Accountant */}
          <div className="flex items-center space-x-6 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="/person2.avif" // Replace with your image path in the public folder
              alt="Rikutmi Dkhar"
              className="w-24 h-24 object-cover rounded-full border-4 border-orange-100"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">Accountant</h3>
              <p className="text-gray-600 text-sm">thianghunsiangshai@gmail.com</p>
              <p className="text-orange-500 mt-1">- Rikutmi Dkhar</p>
            </div>
          </div>

          {/* Managing Director */}
          <div className="flex items-center space-x-6 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="/person3.avif" // Replace with your image path in the public folder
              alt="Phahdkaru Siangshai"
              className="w-24 h-24 object-cover rounded-full border-4 border-orange-100"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">Managing Director</h3>
              <p className="text-gray-600 text-sm">phahdkaru123@gmail.com</p>
              <p className="text-gray-600 text-sm">8837468423</p>
              <p className="text-orange-500 mt-1">- Phahdkaru Siangshai</p>
            </div>
          </div>

          {/* CBBO Nodal Person */}
          <div className="flex items-center space-x-6 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="/person4.avif" // Replace with your image path in the public folder
              alt="Jerry Jones Marwein"
              className="w-24 h-24 object-cover rounded-full border-4 border-orange-100"
            />
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">CBBO Nodal Person</h3>
              <p className="text-gray-600 text-sm">jerryjonesmarwein13@gmail.com</p>
              <p className="text-gray-600 text-sm">8257070792</p>
              <p className="text-orange-500 mt-1">- Jerry Jones Marwein</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}