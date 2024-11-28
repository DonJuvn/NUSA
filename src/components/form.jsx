import React from "react";

const Form = () => {
   return (
      <div id="form">
         <div className="container">
            <div className="form">
               <div className="text">
                  <h1>Начните с нами работать</h1>
                  <p>Теперь, когда вы много о нас знаете, дайте знать, хотите ли вы с нами работать.</p>
               </div>
               <div className="zayavki">
                  <form>
                     <input type="text" placeholder="Имя" required />
                     <input type="tel" placeholder="Номер телефона" required />
                     <textarea placeholder="Сообщение" required></textarea>
                     <button type="submit">ОСТАВИТЬ ЗАЯВКУ</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Form;
