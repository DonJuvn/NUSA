import React from "react";

const Footer = () =>{
   return(
      <div id="footer">
         <img id='footer-bg' src="img/footer-bg.png" alt="" />
         <div className="container">
            <div className="footer">
               <div className="links">
                  <div className="item">
                     <img src="img/.png" alt="" />
                  </div>
                  <div className="item">
                     <img src="img/facebook.png" alt="" />
                  </div>
                  <div className="item">
                     <img src="img/instagram.png" alt="" />
                  </div>
                  <div className="item">
                     <img src="img/.png" alt="" />
                  </div>
               </div>
               <div className="quick-access">
                  <p id="p-title">Быстрый доступ</p>
                  <p>Home</p>
                  <p>Pricing Plan</p>
                  <p>Service</p>
                  <p>Blog</p>
                  <p>Our Team</p>
               </div>
               <div className="support">
               <p id="p-title">Поддержка</p>
               <p>About us</p>
               <p>Contact us</p>
               <p>FAQ</p>
               <p>Tems & Conditions</p>
               <p>Privacy Policy</p>
               </div>
               <div className="help">
               <p id="p-title">Нужна помощь?</p>
               <div className="item">
                  <img src="img/mark.png" alt="" />
                  <p>Астана, ул. Жошы хан 23</p>
               </div>
               <div className="item">
                  <img src="img/mail.png" alt="" />
                  <p>Support@VRNas.com</p>
               </div>
               <div className="item">
                  <img src="img/phone.png" alt="" />
                  <p>+123 456 7890</p>
               </div>
               </div>
            </div>
         </div>
      </div>
   )
};

export default Footer;