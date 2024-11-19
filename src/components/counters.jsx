import React from "react";const Counters = () => {
   return (
      <div id="counters">
         <div className="container">
            <h1 id="title">Про нас</h1>
            <div className="counters">
               <div className="stats">
                  <div className="item">
                     <img src="img/icon-1.png" alt="" />
                     <h3 id="stat"></h3>
                     <p id="stat-text"></p>
                  </div>
                  <div className="item">
                     <img src="img/icon-2.png" alt="" />
                     <h3 id="stat"></h3>
                     <p id="stat-text"></p>
                  </div>
                  <div className="item">
                     <img src="img/icon-3.png" alt="" />
                     <h3 id="stat"></h3>
                     <p id="stat-text"></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Counters;
