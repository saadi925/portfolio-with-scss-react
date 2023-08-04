import "./intro.scss";
import { GoChevronDown } from "react-icons/go";
import { images } from "../../src_images";
const Introduction = () => {
  return (
    <div className="intro" id="intro">
      <div className="ring absolute_ring_top">
        <div className="inner_ring"></div>
      </div>
      <div className="ring absolute_ring_bottom">
        <div className="inner_ring"></div>
      </div>
      <div className="left">
        <div className="imgContainer">
          <img src={images.man_image} alt="my_image" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi! I 'am</h2>
          <h1>Saad Bukhari</h1>
          <h3>
            Freelance
            <span>Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <GoChevronDown size={45} />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
