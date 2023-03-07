import {
  espressoDrink,
  signitureLatte,
  tea,
  ade,
  beverages,
  hotTea,
  etc,
} from "@/components/melt/menu";
import { useEffect, useState } from "react";

const Melt = () => {
  const [drink, setDrink] = useState([]);
  const [orderMenu, setOrderMenu] = useState([]);
  const handleClick = (item) => {
    setDrink([...drink, item]);
  };

  useEffect(() => {
    const orderedMenu = drink.filter(
      (item, index) =>
        drink.findIndex((data) => data.menu === item.menu) === index
    );
    setOrderMenu(() => orderedMenu);
  }, [drink]);

  return (
    <div>
      <h1>Melt</h1>
      {orderMenu &&
        orderMenu.map((item) => <div key={item.id}>{item.menu}</div>)}
      <div>
        <div>
          <h3>Espresso Drink</h3>
          {espressoDrink.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
              <span onClick={() => handleClick({ ...item, hot: true })}>
                🔥
              </span>
              <span onClick={() => console.log({ ...item, hot: false })}>
                🧊
              </span>
            </div>
          ))}
        </div>
        <div>
          <h3>Signiture Latte</h3>
          {signitureLatte.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
              <span>🔥</span>
              <span>🧊</span>
            </div>
          ))}
        </div>
        <div>
          <h3>Tea</h3>
          {tea.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
              <span>🔥</span>
            </div>
          ))}
        </div>
        <div>
          <h3>Ade</h3>
          {ade.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
              <span>🧊</span>
            </div>
          ))}
        </div>
        <div>
          <h3>Beverages</h3>
          {beverages.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
              <span>🔥</span>
              <span>🧊</span>
            </div>
          ))}
        </div>
        <div>
          <h3>Hot Tea</h3>
          {hotTea.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
              <span>🔥</span>
            </div>
          ))}
        </div>
        <div>
          <h3>ETC</h3>
          {etc.map((item) => (
            <div key={item.id}>
              <span>{item.menu}</span>
              <span>📦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Melt;
