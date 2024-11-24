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
// import ShadowBox from "./components/shadow-box";
// import MouseShadow from "./components/MouseShadow";

const members = [
   { avatar: "img/avatar1.png", name: "Member 2" },
   { avatar: "img/avatar2.png", name: "Member 1" },
   { avatar: "img/avatar3.png", name: "Member 3" },
   { avatar: "img/avatar4.png", name: "Member 4" },
   { avatar: "img/avatar5.png", name: "Member 5" },
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
         <Feedbacks members={members} />
         {/* <ShadowBox /> */}
      </div>
   );
}
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
