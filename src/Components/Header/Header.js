import "./Header.css";

export const Header = (props) => {
  return (
    <header>
      <div className="hed-item">
        <div className="hed-item-search">
          <input type="search" placeholder="Поиск" onChange={() => {}} />
          <span>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </header>
  );
};
