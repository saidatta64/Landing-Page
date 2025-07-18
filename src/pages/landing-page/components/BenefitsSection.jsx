import React from "react";
import Icon from "components/AppIcon";

const BenefitsSection = () => {
  const getColorClasses = (color) => {
    const colors = {
      yellow: {
        bg: "bg-yellow-100",
        text: "text-yellow-600",
        border: "border-yellow-200",
        gradient: "from-yellow-500 to-orange-500",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-500 to-violet-500",
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-500 to-cyan-500",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
        gradient: "from-green-500 to-emerald-500",
      },
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-200",
        gradient: "from-red-500 to-pink-500",
      },
      indigo: {
        bg: "bg-indigo-100",
        text: "text-indigo-600",
        border: "border-indigo-200",
        gradient: "from-indigo-500 to-purple-500",
      },
    };
    return colors[color];
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Comparison Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-[#987c6a] to-[#787A84] text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">
              FormAI vs Traditional Form Builders
            </h3>
            <p className="text-violet-100">
              See the difference AI makes in form creation
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-violet-600">
                    Form AI
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                    Traditional Builders
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    feature: "Setup Time",
                    formcraft: "30 seconds",
                    traditional: "2-5 hours",
                  },
                  {
                    feature: "Design Skills Required",
                    formcraft: "None",
                    traditional: "Advanced",
                  },
                  {
                    feature: "AI Assistance",
                    formcraft: "Full AI generation",
                    traditional: "None",
                  },
                  {
                    feature: "Mobile Optimization",
                    formcraft: "Automatic",
                    traditional: "Manual",
                  },
                  {
                    feature: "Learning Curve",
                    formcraft: "Zero",
                    traditional: "Steep",
                  },
                  {
                    feature: "Customization",
                    formcraft: "Unlimited",
                    traditional: "Limited",
                  },
                  {
                    feature: "Cost",
                    formcraft: "Free trial + affordable",
                    traditional: "$50-200/month",
                  },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500 mr-2"
                        />
                        <span className="text-sm text-green-700 font-medium">
                          {row.formcraft}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <Icon
                          name="X"
                          size={16}
                          className="text-red-500 mr-2"
                        />
                        <span className="text-sm text-red-600">
                          {row.traditional}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
