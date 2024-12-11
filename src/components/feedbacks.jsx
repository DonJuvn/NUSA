import React from "react";
const Feedbacks = ({ feedbacks }) => {
   const predefinedAngles = [90, 120, 180, 240, 270];
   const getRandomInRange = (min, max) => Math.random() * (max - min) + min;

   return (
      <div id="feedbacks">
         <div className="orbit-container">
            {/* Sun in the center */}
            <div className="sun"></div>

            {/* Orbits */}
            {[...Array(4)].map((_, orbitIndex) => {
               // Divide members among orbits evenly
               const orbitMembers = feedbacks.filter(
                  (_, idx) => idx % 4 === orbitIndex
               );

               return (
                  <div
                     key={orbitIndex}
                     className={`orbit orbit-${orbitIndex + 1}`}
                  >
                     {orbitMembers.map((member, memberIndex) => {
                        // Random angle ensuring no overlaps
                        const angle = getRandomInRange(1, 2) * 360; // Random number between 1 and 100

                        const radians = (angle * Math.PI) / 180;

                        // Calculate x, y positions for circular placement
                        const radius = 50 + orbitIndex * 50; // Orbit radius
                        const x = Math.cos(radians) * radius;
                        const y = Math.sin(radians) * radius;

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
