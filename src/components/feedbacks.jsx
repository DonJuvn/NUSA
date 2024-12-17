import React from "react";export const feedbacks = [
   {
      avatar: "img/avatar1.png",
      feedback:
         "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
      name: "Member 1",
      xOffset: 5,
      yOffset: -147,
   },
   {
      avatar: "img/avatar2.png",
      feedback:
         "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
      name: "Member 2 kjnsfv ",
      xOffset: 66,
      yOffset: -5,
   },
   {
      avatar: "img/avatar3.png",
      feedback:
         "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
      name: "Member 3",
      xOffset: -365,
      yOffset: -42,
   },
   {
      avatar: "img/avatar4.png",
      feedback:
         "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
      name: "Member 4",
      xOffset: -280,
      yOffset: 160,
   },
   {
      avatar: "img/avatar5.png",
      feedback:
         "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
      name: "Member 5",
      xOffset: -370,
      yOffset: -235,
   },
];

const Feedbacks = ({ feedbacks }) => {
   const calculatePosition = (index, total, orbitIndex, xOffset, yOffset) => {
      const angle = (360 / total) * index; // Divide evenly around the orbit
      const radians = (angle * Math.PI) / 180;
      const radius = 65 + orbitIndex * 40; // Radius grows with each orbit

      const x = Math.cos(radians) * radius + xOffset; // Add xOffset
      const y = Math.sin(radians) * radius + yOffset; // Add yOffset

      return { x, y };
   };

   return (
      <div id="feedbacks">
         <h1 id="title">Feedbacks</h1>
         <div className="orbit-container">
            <div className="sun"></div>

            {[...Array(5)].map((_, orbitIndex) => {
               const orbitMembers = feedbacks.filter(
                  (_, idx) => idx % 5 === orbitIndex
               );

               return (
                  <div
                     key={orbitIndex}
                     className={`orbit orbit-${orbitIndex + 1}`}
                  >
                     {orbitMembers.map((member, memberIndex) => {
                        const { x, y } = calculatePosition(
                           memberIndex,
                           orbitMembers.length,
                           orbitIndex,
                           member.xOffset,
                           member.yOffset
                        );

                        const style = {
                           transform: `translate(${x}px, ${y}px)`,
                        };

                        return (
                           <div
                              key={memberIndex}
                              className="avatar"
                              style={style}
                           >
                              <img src={member.avatar} alt={member.name} />
                              <div className="hover-info">
                                 <p id="feedback-f">{member.feedback}</p>
                                 <p id="feedback-name">{member.name}</p>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Feedbacks;
