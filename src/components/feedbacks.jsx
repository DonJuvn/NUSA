import React from "react";

const Feedbacks = ({ feedbacks }) => {
   const getRandomInRange = (min, max) => Math.random() * (max - min) + min;

   return (
      <div id="feedbacks">
         <div className="orbit-container">
            {/* Sun in the center */}
            <div className="sun"></div>

            {/* Orbits */}
            {[...Array(4)].map((_, orbitIndex) => {
               const orbitMembers = feedbacks.filter(
                  (_, idx) => idx % 4 === orbitIndex
               );

               return (
                  <div
                     key={orbitIndex}
                     className={`orbit orbit-${orbitIndex + 1}`}
                  >
                     {orbitMembers.map((member, memberIndex) => {
                        const angle = getRandomInRange(0, 360);
                        const radians = (angle * Math.PI) / 180;
                        const radius = 120 + orbitIndex * 30;
                        const x = Math.cos(radians) * radius;
                        const y = Math.sin(radians) * radius;

                        const style = {
                           transform: `translate(${x}px, ${y}px)`,
                        };

                        return (
                           <div key={memberIndex} className="avatar" style={style}>
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
