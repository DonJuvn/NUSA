import React from "react";

const Members = () => {
   // Array of member data
   const members = [
      { name: "John Doe", post: "CEO", avatar: "img/member1.png", insta: "#", facebook: "#", twitter: "#" },
      { name: "Jane Smith", post: "CTO", avatar: "img/member2.png", insta: "#", facebook: "#", twitter: "#" },
      { name: "Alex Johnson", post: "Lead Developer", avatar: "img/member3.png", insta: "#", facebook: "#", twitter: "#" },
      { name: "Emily Davis", post: "Designer", avatar: "img/member4.png", insta: "#", facebook: "#", twitter: "#" },
      { name: "Michael Brown", post: "Product Manager", avatar: "img/member5.png", insta: "#", facebook: "#", twitter: "#" },
      { name: "Sarah Wilson", post: "Marketing", avatar: "img/member6.png", insta: "#", facebook: "#", twitter: "#" }
   ];

   return (
      <div id="members">
         <div className="container">
            <h1 id="title">Сотрудники</h1>
            <div className="members">
               {/* Map through members array to display each member */}
               {members.map((member, index) => (
                  <div key={index} className="item">
                     <img src={member.avatar} alt={member.name} />
                     <div className="contacts">
                        <a href={member.insta}><img src="img/insta.png" alt="Instagram" /></a>
                        <a href={member.facebook}><img src="img/facebook.png" alt="Facebook" /></a>
                        <a href={member.twitter}><img src="img/twitter.png" alt="Twitter" /></a>
                     </div>
                     <div className="text">
                     <h3 id="name">{member.name}</h3>
                     <p id="post">{member.post}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Members;
