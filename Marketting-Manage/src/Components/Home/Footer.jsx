export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold text-white">
                Market<span className="text-blue-500">Advisor</span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-sm">
                Helping students and early-stage builders market their tech
                products with clarity and confidence.
              </p>
            </div>
  
            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
  
            {/* Creator Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Built By
              </h3>
              <p className="text-gray-400">
                Created with ❤️ by
              </p>
              <p className="mt-2 font-semibold text-white">
                Sourav & Sristi
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Full-Stack Developers
              </p>
            </div>
  
          </div>
  
          {/* Bottom Line */}
          <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} MarketAdvisor. All rights reserved.
          </div>
  
        </div>
      </footer>
    );
  }
  