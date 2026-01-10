function Footer() {
  return (
    <footer className="w-full bg-gray-600 py-8 px-4 md:px-10 lg:px-20 z-40">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {/* Company */}
        <div>
          <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Company</h3>
          <ul className="text-sm md:text-base">
            <li><a href="#" className="text-white hover:underline">About</a></li>
            <li><a href="#" className="text-white hover:underline">Careers</a></li>
            <li><a href="#" className="text-white hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Help</h3>
          <ul className="text-sm md:text-base">
            <li><a href="#" className="text-white hover:underline">Contact Us</a></li>
            <li><a href="#" className="text-white hover:underline">Support</a></li>
            <li><a href="#" className="text-white hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Legal</h3>
          <ul className="text-sm md:text-base">
            <li><a href="#" className="text-white hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="text-white hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Download */}
        <div>
          <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Download</h3>
          <ul className="text-sm md:text-base">
            <li><a href="#" className="text-white hover:underline">iOS</a></li>
            <li><a href="#" className="text-white hover:underline">Android</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6 md:mt-8 text-gray-300 text-xs md:text-sm">
        &copy; 2025 The Electronic Tool. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
