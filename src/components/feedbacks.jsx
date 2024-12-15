import React from "react";
const Feedbacks = ({ feedbacks }) => {
   const calculatePosition = (index, total, orbitIndex) => {
      const angle = (360 / total) * index; // Divide evenly around the orbit
      const radians = (angle * Math.PI) / 180;
      const radius = 65 + orbitIndex * 40; // Radius grows with each orbit
      const x = Math.cos(radians) * radius;
      const y = Math.sin(30) * radius;

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
                           orbitIndex
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
