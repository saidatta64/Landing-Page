import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/ui/Button";
import Icon from "components/AppIcon";
import { AtomIcon, Edit, Share2 } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [typingText, setTypingText] = useState("");
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const demoTexts = [
    "Create a customer feedback form for my restaurant",
    "Build a registration form for my online course",
    "Make a survey for my college project",
    "Design a contact form for my freelance business",
  ];

  const generatedForms = [
    {
      title: "Restaurant Feedback Form",
      fields: ["Name", "Email", "Rating", "Comments", "Visit Date"],
      theme: "warm",
      time: "0.10",
    },
    {
      title: "Course Registration Form",
      fields: [
        "Full Name",
        "Email",
        "Phone",
        "Course Selection",
        "Payment Method",
      ],
      theme: "professional",
      time: "0.20",
    },
    {
      title: "College Survey Form",
      fields: [
        "Student ID",
        "Major",
        "Year",
        "Satisfaction Rating",
        "Suggestions",
      ],
      theme: "academic",
      time: "0.15",
    },
    {
      title: "Contact Form",
      fields: ["Name", "Email", "Service Needed", "Budget", "Project Details"],
      theme: "creative",
      time: "0.15",
    },
  ];

  useEffect(() => {
    const currentText = demoTexts[currentDemo];
    let index = 0;
    setTypingText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < currentText.length) {
        setTypingText(currentText.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentDemo((prev) => (prev + 1) % demoTexts.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentDemo]);

  const handleStartTrial = () => {
    navigate("/signup");
  };


  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Blobs */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center items-center">
            <div className="text-center inline-flex items-center px-4 py-2 bg-violet-50 backdrop-blur-sm rounded-full border border-violet-200 mb-6">
              <Icon
                name="Sparkles"
                size={16}
                className="text-violet-600 mr-2"
              />
              <span className="text-sm font-medium text-violet-600">
                AI-Powered Form Builder
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-center">
              Create Forms with AI In Seconds, Not Hours
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl text-center">
              Transform your ideas into professional forms instantly. Our AI
              understands your requirements and generates perfectly structured
              forms ready to collect responses.
            </p>

            <div className="sm:flex-row gap-4 mb-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const target = document.getElementById("features");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                iconName="Play"
                iconPosition="left"
                className="text-lg px-8 py-4"
              >
                How it Works
              </Button>
            </div>
          </div>

          {/* Right Content - Interactive Demo */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Try it now - Describe your form:
                </h3>
                <div className="relative">
                  <div className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-200 min-h-[60px] flex items-center">
                    <span className="text-gray-700 font-mono">
                      {typingText}
                      {isTyping && <span className="animate-pulse">|</span>}
                    </span>
                  </div>
                </div>
              </div>

              {/* Generated Form Preview */}
              <div className="bg-gradient-to-br from-[#f7f4ef] to-blue-50 rounded-lg p-6 border border-violet-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">
                    {generatedForms[currentDemo].title}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">
                      Generated in {generatedForms[currentDemo].time}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {generatedForms[currentDemo].fields.map((field, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-md p-3 border border-gray-200"
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field}
                      </label>
                      <div className="h-8 bg-gray-100 rounded border"></div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Palette"
                      size={16}
                      className="text-orange-500"
                    />
                    <span className="text-sm text-gray-600">
                      Theme: {generatedForms[currentDemo].theme}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Smartphone"
                      size={16}
                      className="text-sky-500"
                    />
                    <span className="text-sm text-gray-600">Mobile Ready</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleStartTrial}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full"
                >
                  Create Your Form Now
                </Button>
              </div>
            </div>

            {/* Floating Notifications */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-red-200 animate-bounce">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-xs font-medium text-red-700">
                  100+ forms created till date
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
