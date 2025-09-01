import React, { useState } from "react";
import Accordion from "../components/support/accordion.jsx";
import Team from "../assets/images/support.png";

function Support() {
  const [search, setSearch] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Implement your search logic here
      alert(`Searching for: ${search}`);
    }
  };

  return (
    <div>
      <div className="bg-amber-500 h-48 text-left pl-5 flex">
        <div className="w-full">
          <h1 className="text-5xl p-5 pl-0">
            We're Here for <span className="italic">You...</span>
          </h1>
          <input
            type="text"
            placeholder="Text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pb-2 bg-white rounded-l-full p-2 border border-black w-1/2"
          />
          {/* change button to keydown event */}
          <button
            type="button"
            className="p-2 cursor-auto rounded-r-full w-20 bg-gray-300 border hover:cursor-pointer"
            onClick={() => alert(`Searching for: ${search}`)}
          >
            Search
          </button>
        </div>
        <img src={Team} className="h-48 justify-start w-32 pr-12" alt="Support Team" />
      </div>
      <div className="bg-black p-7 border">
        <Accordion className="m-4" />
      </div>
    </div>
  );
}

export default Support;
