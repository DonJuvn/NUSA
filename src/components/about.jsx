import React from "react";
const About = () => {
   return (
      <div id="about">
         <div className="container">
            <div className="about">
               <div className="welcome">
                  <h1>
                     Добро пожаловать в нашу цифровую лабораторию, где мы
                     превращаем ваши идеи в инновационные IT-продукты!
                  </h1>
                  <a id="cta" href="#">
                     Давайте начнем!
                     <img src="img/arrow-link.png" alt="" />
                  </a>
                  <a id="arrow-down" href="#counters">
                     <img src="img/arrow-down.png" alt="" />
                  </a>
               </div>
               <div className="white-bg"></div>
            </div>
         </div>
      </div>
   );
};

export default About;
