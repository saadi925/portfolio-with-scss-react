import { useState } from "react";
import { data } from "../../data";
import "./portfolio.scss";
const Portfolio = () => {
  const allCategories = [
    "All Demo",
    ...new Set(
      data.map((e) => {
        return e.category;
      })
    ),
  ];
  const [catValue] = useState(allCategories);

  const [Items, setItems] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);
  const filterMenu = (category, index) => {
    const updatedItems = data.filter((curElem) => {
      return curElem.category === category;
    });

    setActiveIndex(index);

    if (category === "All Demo") {
      setItems(data);
    } else {
      setItems(updatedItems);
    }
  };
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {catValue.map((element, index) => {
          return (
            <li
              onClick={() => {
                filterMenu(element, index);
              }}
              key={index}
              className={activeIndex === index ? "active" : ""}
            >
              {element}
            </li>
          );
        })}
      </ul>
      <div className="container">
        {Items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="ring absolute_ring_left">
        <div className="inner_ring"></div>
      </div>
    </div>
  );
};

export default Portfolio;
