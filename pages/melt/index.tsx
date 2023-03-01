const espressoDrink = [
  { id: 1, menu: "에스프레소" },
  { id: 2, menu: "아메리카노" },
  { id: 3, menu: "헤이즐넛 아메리카노" },
  { id: 4, menu: "카푸치노" },
  { id: 5, menu: "카페라떼" },
  { id: 6, menu: "헤이즐넛 라떼" },
  { id: 7, menu: "카페모카" },
  { id: 8, menu: "카라멜 마끼아또" },
  { id: 9, menu: "바닐라 라떼" },
];

const signitureLatte = [
  { id: 10, menu: "하와이안 라떼" },
  { id: 11, menu: "씨솔트 라떼" },
  { id: 12, menu: "스페니쉬 라떼" },
];

const tea = [
  { id: 13, menu: "플라워 레몬티" },
  { id: 14, menu: "자몽 블랙티" },
  { id: 15, menu: "제주 청귤티" },
];

const ade = [
  { id: 16, menu: "플라워 레몬에이드" },
  { id: 17, menu: "자몽 에이드" },
  { id: 18, menu: "제주청귤 에이드" },
];

const beverages = [
  { id: 19, menu: "초콜릿 라떼" },
  { id: 20, menu: "그린티 라떼" },
  { id: 21, menu: "밀크티 라떼" },
  { id: 22, menu: "카라멜 라떼" },
  { id: 23, menu: "민트초코 라떼" },
];

const hotTea = [
  { id: 24, menu: "얼그레이 티" },
  { id: 25, menu: "캐모마일 티" },
  { id: 26, menu: "페퍼민트 티" },
  { id: 27, menu: "히비스커스 티" },
];

const etc = [
  { id: 28, menu: "원두 200g" },
  { id: 29, menu: "드립박스(12EA)" },
];

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
