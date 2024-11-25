import React from "react";
const Menu = () => {
   return (
      <div id="menu">
         <div className="container">
            <div className="menu">
               <div className="logo">
                  <img src="img/logo.png" alt="" />
               </div>
               <div className="navbar">
                  <a id="white" href="#about">
                     Главная
                  </a>
                  <a id="white" href="#counters">
                     Про нас
                  </a>
                  <a id="white" href="#cases">
                     Кейсы
                  </a>
                  <a href="#services">Услуги</a>
                  <a href="#feedbacks">Отзывы</a>
                  <a href="#members">Сотрудники</a>
                  <a href="#contacts">Контакты</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Menu;
