import "./Header.css";
import Logo from "../../Logo-Image/Logo.png";

export const Header = () => {
  return (
    <header>
      <div className="hed-item">
        <p className="hed-item-p1">
          <img src={Logo} alt="" />
        </p>
        <div className="hed-item-search">
          <input type="search" placeholder="Поиск" />
          <span>
            <i className="fas fa-search"></i>
          </span>
        </div>
        <p className="hed-item-p2">
          <b> Вход</b>
        </p>
      </div>
    </header>
  );
};
