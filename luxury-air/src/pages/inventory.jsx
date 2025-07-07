import Card from "../components/card";
import sStock from "../data/sStock";
import mStock from "../data/mStock.js";

function Inventory() {
  return (
    <>
      <div className="flex flex-col gap-6 mt-24">
        {sStock.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            linkText={card.linkText}
            linkHref={card.linkHref}
            images={card.images}
          />
        ))}
      </div>
      <div className="flex flex-col gap-6 mt-24">
        {mStock.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            linkText={card.linkText}
            linkHref={card.linkHref}
            images={card.images}
          />
        ))}
      </div>
    </>
  );
}

export default Inventory;
