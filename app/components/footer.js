import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-orange-50 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Company Info with Logo */}
        <div>
          <img src="/logo.avif" alt="Company Logo" className="w-20 mb-3" />
          <h3 className="text-xl font-semibold text-gray-800">Wapung Farm Fresh FPCL</h3>
          <p className="text-gray-500 mt-3">
            Nature-loving clients can enjoy our agri-tourism services.
          </p>
      
                <div className="flex flex-col  justify-center gap-4 items-start  mt-4  pb-8">
        <a href="https://difgroup.in/" target="_blank" rel="noopener noreferrer">
          <img
            src="/footer1.png"
            alt="Agri-tourism View 1"
            className="rounded-lg shadow-md bg-white w-full md:w-[45%] object-contain"
          />
        </a>
        <a href="https://sfacindia.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/footer2.gif"
            alt="Agri-tourism View 2"
            className="rounded-lg shadow-md w-full md:w-[45%] object-contain"
          />
        </a>
      </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/"><span className="text-gray-500 hover:text-indigo-600 transition">Home</span></Link></li>
            <li><Link href="/farm-to-business"><span className="text-gray-500 hover:text-indigo-600 transition">Farm To Business</span></Link></li>
            <li><Link href="/farm-to-customer"><span className="text-gray-500 hover:text-indigo-600 transition">Farm To Customers</span></Link></li>
            <li><Link href="/stay-with-us"><span className="text-gray-500 hover:text-indigo-600 transition">Stay With Us</span></Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
          <ul className="mt-3 space-y-2">
            <li className="text-gray-500">🖂 jhanikas@gmail.com</li>
            <li className="text-gray-500">📞+91 9774779173</li>
            <li><Link href="https://www.mystore.in/en/seller/wapung-farm-fresh-farmer-producer-company-limited"><span className="text-gray-500 hover:text-indigo-600 transition">Vist: My Store</span></Link></li>
          </ul>
        </div>

        {/* Column 4: Map */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
          <div className="mt-3 w-full h-48 md:h-56 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47368.39084694457!2d-72.489386!3d42.096238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6c2db59be2a99%3A0xbde356c8e67617fc!2sTexas%20Roadhouse!5e0!3m2!1sen!2sus!4v1751039815600!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>


    </footer>
  );
}
