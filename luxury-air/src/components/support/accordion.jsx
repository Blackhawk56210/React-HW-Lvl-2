import React, { useState, useRef, useEffect } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const items = [
    {
      title: "Q1: How far in advance should I book a private jet?",
      content: "A: While last-minute flights are possible, booking 1–2 weeks in advance ensures the best aircraft availability and tailored service. Although immediate needs are possible and will incur an extra fee.",
    },
    {
      title: "Q2: Can I choose the type of jet I fly on?",
      content: "A: Absolutely. We offer a curated selection of jets — from light aircraft to ultra-long-range luxury cabins — to match your route and preferences.",
    },
    {
      title: "Q3: Are there baggage restrictions on private flights?",
      content: "A: Yes, but they're more flexible than commercial airlines. Limits vary by aircraft, and we’ll help you select one that fits your luggage needs.",
    },
    {
      title: "Q4: Can I bring pets onboard?",
      content: "A: Of course. Most of our aircraft are pet-friendly. Just let us know in advance, and we’ll make sure your companion is as comfortable as you are. (Any and all damages will be charged to owner this dos not include cleaning of 'accidents')",
    },
    {
      title: "Q5: Is in-flight catering included?",
      content: "A: Premium catering is available on all flights. Whether it’s champagne and caviar or something custom, we’ll craft your onboard menu to your taste.",
    },
    {
      title: "Q6: What airports can private jets use?",
      content: "A: Private jets can access thousands of airports — including exclusive terminals and regional runways not served by commercial airlines.",
    },
    {
      title: "Q7: Do I need to go through TSA or airport security?",
      content: "A: No long lines here. You’ll enjoy private terminals with streamlined security, allowing you to arrive just minutes before your flight.",
    },
    {
      title: "Q8: Is Wi-Fi available during the flight?",
      content: "A: Yes, most of our jets offer high-speed Wi-Fi so you can stay connected — whether you're working or streaming at 40,000 feet.",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-md mb-2 overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-300 hover:cursor-pointer text-left font-medium text-gray-800">
            {item.title}
            <span className="text-xl">
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              maxHeight:
                activeIndex === index
                  ? contentRefs.current[index]?.scrollHeight + "px"
                  : "0px",
              transition: "max-height 0.3s ease",
            }}
            className="overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-3 text-gray-700 text-l font-semibold">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
