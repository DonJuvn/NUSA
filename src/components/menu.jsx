import React, { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="menu">
      <div className="container">
        <div className="menu">
          <div className="logo">
            <img src="img/logo.png" alt="Logo" />
          </div>
          <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <a id="white" href="#about">
              Главная
            </a>
            <a id="white" href="#counters">
              Про нас
            </a>
            <a id="white" href="#cases">
              Кейсы
            </a>
            <a id="white" href="#services">
              Услуги
            </a>
            <a id="white" href="#feedbacks">
              Отзывы
            </a>
            <a id="white" href="#members">
              Сотрудники
            </a>
            <a id="white" href="#footer">
              Контакты
            </a>
          </div>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
