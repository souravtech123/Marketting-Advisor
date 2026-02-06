export default function Pricing() {
    return (
      <section id="pricing" className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Simple Pricing for Builders
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start free. Upgrade only when you need deeper insights.
            </p>
          </div>
  
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900">Free</h3>
              <p className="mt-2 text-gray-500">For beginners & students</p>
              <p className="mt-6 text-4xl font-extrabold text-gray-900">
                ₹0
              </p>
  
              <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li>✔ 1 product analysis</li>
                <li>✔ Basic target audience</li>
                <li>✔ Platform suggestions</li>
                <li>✔ Growth tips</li>
              </ul>
  
              <button className="mt-8 w-full px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>
  
            {/* Pro Plan */}
            <div className="border-2 border-blue-600 rounded-2xl p-8 text-center shadow-lg">
              <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
                Most Popular
              </span>
              <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
              <p className="mt-2 text-gray-500">For serious builders</p>
              <p className="mt-6 text-4xl font-extrabold text-gray-900">
                ₹199
                <span className="text-base font-medium text-gray-500"> /month</span>
              </p>
  
              <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li>✔ Unlimited product analysis</li>
                <li>✔ Detailed audience insights</li>
                <li>✔ Platform-wise content ideas</li>
                <li>✔ Positioning & branding tips</li>
                <li>✔ Weekly growth roadmap</li>
              </ul>
  
              <button className="mt-8 w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                Upgrade to Pro
              </button>
            </div>
  
            {/* Team Plan */}
            <div className="border border-gray-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900">Team</h3>
              <p className="mt-2 text-gray-500">For communities & startups</p>
              <p className="mt-6 text-4xl font-extrabold text-gray-900">
                ₹499
                <span className="text-base font-medium text-gray-500"> /month</span>
              </p>
  
              <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                <li>✔ Up to 5 team members</li>
                <li>✔ Shared marketing dashboard</li>
                <li>✔ Collaboration insights</li>
                <li>✔ Priority support</li>
              </ul>
  
              <button className="mt-8 w-full px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition">
                Contact Us
              </button>
            </div>
  
          </div>
  
          {/* Trust Note */}
          <p className="mt-12 text-center text-sm text-gray-500">
            No credit card required for the free plan.
          </p>
  
        </div>
      </section>
    );
  }
  