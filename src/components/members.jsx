import React from "react";const Members = () => {
   // Array of member data
   const members = [
      {
         name: "Bondan Prabowo",
         post: "CEO",
         avatar: "img/member1.png",
         insta: "#",
         facebook: "#",
         twitter: "#",
      },
      {
         name: "Bayu Aji",
         post: "VR Development",
         avatar: "img/member2.png",
         insta: "#",
         facebook: "#",
         twitter: "#",
      },
      {
         name: "Agung Brandon",
         post: "VR Artist",
         avatar: "img/member3.png",
         insta: "#",
         facebook: "#",
         twitter: "#",
      },
      {
         name: "Aldo Boy",
         post: "3D Designer",
         avatar: "img/member4.png",
         insta: "#",
         facebook: "#",
         twitter: "#",
      },
      {
         name: "Aril Laso",
         post: "UI / UX Designer",
         avatar: "img/member5.png",
         insta: "#",
         facebook: "#",
         twitter: "#",
      },
      {
         name: "Beni Barak",
         post: "3D Artist",
         avatar: "img/member6.png",
         insta: "#",
         facebook: "#",
         twitter: "#",
      },
   ];

   return (
      <div id="members">
         <div className="container">
            <h1 id="title">Сотрудники</h1>
            <div className="members">
               {/* Map through members array to display each member */}
               {members.map((member, index) => (
                  <div key={index} className="item">
                     <img id="avatar" src={member.avatar} alt={member.name} />
                     <div className="image"></div>
                     <div className="contacts">
                        <a href={member.insta}>
                           <img src="img/instagram.png" alt="Instagram" />
                        </a>
                        <a href={member.facebook}>
                           <img src="img/facebook.png" alt="Facebook" />
                        </a>
                        <a href={member.twitter}>
                           <img src="img/twitter.png" alt="Twitter" />
                        </a>
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
