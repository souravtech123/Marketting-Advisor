import { NavLink } from "react-router";

export default function Hero() {
    return (
      <section id="home" className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              AI-powered Marketing Advisor
            </span>
  
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Build the Product.  
              <br />
              <span className="text-blue-600">We Help You Market It.</span>
            </h1>
  
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Many students build amazing tech projects but struggle to get users.
              MarketAdvisor analyzes your product and gives you clear, actionable
              marketing guidance — for free.
            </p>
  
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <NavLink to={'/market'} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                Get Marketing Advice
              </NavLink >
  
              <button className="px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition">
                See How It Works
              </button>
            </div>
  
            {/* Trust Line */}
            <p className="mt-6 text-sm text-gray-500">
              Built for students, indie hackers, and early-stage founders.
            </p>
          </div>
  
          {/* Right Visual */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
  
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                AI Marketing Summary
              </h3>
  
              <div className="space-y-3 text-sm text-gray-600">
                <p>✔ Target Audience: College students & developers</p>
                <p>✔ Best Platform: LinkedIn & Twitter</p>
                <p>✔ Positioning: “Build smarter, not louder”</p>
                <p>✔ Growth Tip: Share weekly build updates</p>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  