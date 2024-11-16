import React from "react";

const Menu = () => {
   return(
      <div id="menu">
         <div className="container">
            <div className="menu">
               <div className="logo">
                  <img src="img/logo.png" alt="" />
               </div>
               <div className="navbar">
                  <a id='white' href="#">Главная</a>
                  <a id='white' href="#">Про нас</a>
                  <a id='white' href="#">Кейсы</a>
                  <a href="#">Услуги</a>
                  <a href="#">Отзывы</a>
                  <a href="#">Сотрудники</a>
                  <a href="#">Контакты</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Menu;