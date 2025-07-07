import React, { useState, useRef, useEffect } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const items = [
    {
      title: "Mileage",
      content: "This is the first item’s accordion body...",
    },
    {
      title: "stop bitching",
      content: "This is the second item’s accordion body...",
    },
    {
      title: "3rd Q",
      content: "This is the third item’s accordion body...",
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
            className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-left font-medium text-gray-800">
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
            <div className="px-4 py-3 text-gray-700 text-sm">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
