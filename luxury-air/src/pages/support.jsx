import Accordion from "../components/support/accordion.jsx";

function Support() {
  return (
    <div>
      <div className="bg-amber-500 h-50">
        <h1 className="text-6xl p-5">How can we help</h1>
          <input
          type="text"
          placeholder="Text"
          className="pb-2 bg-white rounded-l-full p-2 border-black w-1/3"
        ></input>
        {/* change button to keydown event */}
        <button type="button" className="p-2 cursor-auto rounded-r-full w-20 bg-gray-300 border">Search</button>
      </div>
      <div className="bg-black p-7 border-">
        <Accordion className="m-4" />
      </div>
    </div>
  );
}

export default Support;
