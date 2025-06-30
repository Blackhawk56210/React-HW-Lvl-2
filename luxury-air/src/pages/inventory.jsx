import Card from "../components/card";
import smallStock from "../data/smallStock";

function Inventory() {
  return (
    <div className="flex flex-col gap-6 mt-24">
      {smallStock.map((card, index) => (
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
  );
}

export default Inventory;
