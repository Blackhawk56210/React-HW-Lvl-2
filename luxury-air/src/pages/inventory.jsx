import Card from "../components/card";
import sStock from "../data/sStock";
import mStock from "../data/mStock.js";
import lStock from "../data/lStock.js";

// Modals ??
/** import Modal from '../components/support/modal.jsx' */

function Inventory() {
  return (
    <div>
      <p className="text-white text-4xl font-serif pt-20">Small AirCrafts</p>
      <div className="bg-white w-4/6 h-1 mb-5 translate-x-[23%] opacity-65"></div>
      <div className="grid grid-flow-col grid-row-1 pb-40">
        {sStock.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            size={card.size}
            seats={card.seats}
            range={card.range}
            linkText={card.linkText}
            linkHref={card.linkHref}
            images={card.images}
          />
        ))}
      </div>
      <p className="text-white text-4xl font-serif">Medium AirCrafts</p>
      <div className="bg-white w-4/6 h-0.5 mb-5 translate-x-[23%] opacity-65 shadow-xl"></div>
      <div className="grid grid-flow-col grid-row-1 pb-40">
        {mStock.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            size={card.size}
            seats={card.seats}
            range={card.range}
            linkText={card.linkText}
            linkHref={card.linkHref}
            images={card.images}
          />
        ))}
      </div>
      <p className="text-white text-4xl font-serif">Large AirCrafts</p>
      <div className="bg-white w-4/6 h-0.5 mb-5 translate-x-[23%] opacity-65 shadow-xl"></div>
      <div className="grid grid-flow-col grid-row-1 pb-40">
        {lStock.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            size={card.size}
            seats={card.seats}
            range={card.range}
            linkText={card.linkText}
            linkHref={card.linkHref}
            images={card.images}
          />
        ))}
      </div>
      <div className="bg-white w-4/6 h-0.5 translate-x-[23%] opacity-65"></div>
    </div>
  );
}

export default Inventory;
