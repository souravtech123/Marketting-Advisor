import { NavLink } from "react-router";

export default function HowItWorks() {
    return (
      <section id="features" className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              From Product to Marketing Plan in Minutes
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              No marketing experience required. Just answer a few questions and
              get clear, actionable guidance.
            </p>
          </div>
  
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Add Your Product
              </h3>
              <p className="text-gray-600">
                Share your project link or briefly explain what you’ve built and
                who it’s for.
              </p>
            </div>
  
            {/* Step 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Answer Smart Questions
              </h3>
              <p className="text-gray-600">
                Our AI asks a few focused questions to understand your audience,
                goals, and current traction.
              </p>
            </div>
  
            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Get a Clear Marketing Plan
              </h3>
              <p className="text-gray-600">
                Receive platform suggestions, positioning ideas, and growth steps
                tailored to your product.
              </p>
            </div>
  
          </div>
  
          {/* CTA */}
          <div className="mt-16 text-center">
            <NavLink to={'/market'} className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
              Try It Free
            </NavLink>
          </div>
  
        </div>
      </section>
    );
  }
  