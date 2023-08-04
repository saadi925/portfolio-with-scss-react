import "./topbar.scss";
import { GoMail, GoPerson } from "react-icons/go";
type menuProps = {
  menuState: {
    isMenuOpen: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const Topbar = ({ menuState }: menuProps) => {
  const { isMenuOpen, setMenu } = menuState;
  return (
    <div className={`topbar ${isMenuOpen ? "active" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Your Way.
          </a>
          <div className="itemContainer">
            <GoPerson size={25} className="icon" />
            <span>+ 0 950 000 000</span>
          </div>
          <div className="itemContainer">
            <GoMail size={25} className="icon" />
            <span>userid925925@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenu(!isMenuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
