import {
  espressoDrink,
  signitureLatte,
  tea,
  ade,
  beverages,
  hotTea,
  etc,
} from "@/components/melt/menu";

const Melt = () => {
  return (
    <div>
      <h1>Melt</h1>
      <div>
        <div>
          <h3>Espresso Drink</h3>
          {espressoDrink.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
            </div>
          ))}
        </div>
        <div>
          <h3>Signiture Latte</h3>
          {signitureLatte.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
            </div>
          ))}
        </div>
        <div>
          <h3>Tea</h3>
          {tea.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
            </div>
          ))}
        </div>
        <div>
          <h3>Ade</h3>
          {ade.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
            </div>
          ))}
        </div>
        <div>
          <h3>Beverages</h3>
          {beverages.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
            </div>
          ))}
        </div>
        <div>
          <h3>Hot Tea</h3>
          {hotTea.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
            </div>
          ))}
        </div>
        <div>
          <h3>ETC</h3>
          {etc.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Melt;
