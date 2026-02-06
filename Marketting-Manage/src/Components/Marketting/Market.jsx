import React from "react";

const Market = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            How to Use the Marketing Advisor
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get a clear marketing technique for your product in just a few simple steps.
            No marketing knowledge required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Start the Chat
            </h3>
            <p className="text-sm text-gray-600">
              Begin a conversation with the AI marketing advisor to describe your product.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Answer Simple Questions
            </h3>
            <p className="text-sm text-gray-600">
              Respond to a few short questions about your audience and goals.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Get a Marketing Technique
            </h3>
            <p className="text-sm text-gray-600">
              The AI suggests one focused marketing technique tailored to your product.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
              4
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Apply & Execute
            </h3>
            <p className="text-sm text-gray-600">
              Follow the step-by-step guide and start marketing immediately.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Market;
