// import React, { useEffect } from "react";

// const MouseShadow = () => {
//    useEffect(() => {
//       const handleMouseMove = (e) => {
//          const shadow = document.createElement("div");
//          shadow.classList.add("cursor-shadow");

//          // Set the position of the shadow at the mouse's location
//          shadow.style.left = `${e.clientX}px`;
//          shadow.style.top = `${e.clientY}px`;

//          // Append the shadow to the body
//          document.body.appendChild(shadow);

//          // Remove the shadow after the animation ends
//          shadow.addEventListener("animationend", () => {
//             shadow.remove();
//          });
//       };

//       document.addEventListener("mousemove", handleMouseMove);

//       // Cleanup event listener on component unmount
//       return () => {
//          document.removeEventListener("mousemove", handleMouseMove);
//       };
//    }, []);

//    return null; // No visible content; all effects are DOM-based
// };

// export default MouseShadow;
