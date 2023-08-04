import { GoChevronLeft, GoChevronRight, GoDeviceMobile } from "react-icons/go";
import "./works.scss";
import { images } from "../../src_images";
const Works = () => {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="iconContainer">
                  <GoDeviceMobile />
                </div>
                <h2>title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus velit, aspernatur incidunt cupiditate voluptatum,
                  harum molestias expedita vitae laboriosam laudantium nam,
                  explicabo ut repellat dolor?
                </p>
              </div>
            </div>
            <div className="right">
              <img src={images.portfolio5} alt="" />
            </div>
          </div>
        </div>
      </div>
      <GoChevronLeft className="arrow-left" />
      <GoChevronRight className="arrow-right" />
    </div>
  );
};

export default Works;
