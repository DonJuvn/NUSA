import React from "react";const Counters = () => {
   return (
      <div id="counters">
         <div className="container">
            <h1 id="title">Про нас</h1>
            <a id="arrow-top" href="#top">
               <img src="img/arrow-down.png" alt="" />
            </a>
            <div className="counters">
               <div className="item">
                  <div className="two">
                     <img src="img/icon-1.png" alt="" />
                     <h3 id="stat">30+</h3>
                  </div>
                  <p id="stat-text">Экспертов в штате</p>
               </div>
               <div className="item">
                  <div className="two">
                     <img src="img/icon-2.png" alt="" />
                     <h3 id="stat">80+</h3>
                  </div>
                  <p id="stat-text">Довольных клиентов</p>
               </div>
               <div className="item">
                  <div className="two">
                     <img src="img/icon-3.png" alt="" />
                     <h3 id="stat">СНГ</h3>
                  </div>
                  <p id="stat-text">Работаем по всему</p>
               </div>
            </div>
            <h1 id="about-us">
               Nusa Corporation — это ведущая компания, специализирующаяся на
               разработке и внедрении инновационных IT-решений для бизнеса.
            </h1>
         </div>
      </div>
   );
};

export default Counters;
