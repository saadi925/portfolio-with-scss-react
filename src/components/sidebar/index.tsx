import "./sidebar.scss";
type menuProps = {
  menuState: {
    isMenuOpen: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
const SideBar = ({ menuState }: menuProps) => {
  const { isMenuOpen, setMenu } = menuState;
  const closeSideMenu = () => {
    setMenu(false);
  };
  return (
    <div className={`sidebar ${isMenuOpen ? "active" : ""}`}>
      <ul>
        <li onClick={closeSideMenu}>
          <a href="#intro">Introduction</a>
        </li>
        <li onClick={closeSideMenu}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={closeSideMenu}>
          <a href="#works">Works</a>
        </li>
        <li onClick={closeSideMenu}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={closeSideMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
