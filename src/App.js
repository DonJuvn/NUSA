import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Menu from "./components/menu";
import About from "./components/about";
import Counters from "./components/counters";
import Cases from "./components/cases";
import Services from "./components/services";
import Feedbacks from "./components/feedbacks";
import Members from "./components/members";
import Form from "./components/form";
import Footer from "./components/footer";
// import ShadowBox from "./components/shadow-box";
// import MouseShadow from "./components/MouseShadow";

const feedbacks = [
   {
      avatar: "img/avatar1.png",
      feedback:
         "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
      name: "Member 2",
   },
   {
      avatar: "img/avatar2.png",
      feedback:
         "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
      name: "Member 1 kjnsfv ",
   },
   {
      avatar: "img/avatar3.png",
      feedback:
         "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
      name: "Member 3",
   },
   {
      avatar: "img/avatar4.png",
      feedback:
         "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
      name: "Member 4",
   },
   {
      avatar: "img/avatar5.png",
      feedback:
         "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
      name: "Member 5",
   },
];

function App() {
   return (
      <div className="App">
         {/* <MouseShadow /> */}
         <Menu />
         <About />
         <Counters />
         <Cases />
         <Services />
         <Feedbacks feedbacks={feedbacks} />
         <Members />
         <Form />
         <Footer />
         {/* <ShadowBox /> */}
      </div>
   );
}
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
