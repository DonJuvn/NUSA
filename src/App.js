import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Menu from "./components/menu";
import About from "./components/about";
import Counters from "./components/counters";
import Cases from "./components/cases";
import Services from "./components/services";
import Feedbacks, { feedbacks } from "./components/feedbacks"; // Import feedbacks here
import Members from "./components/members";
import Form from "./components/form";
import Footer from "./components/footer";

function App() {
   return (
      <div className="App">
         <Menu />
         <About />
         <Counters />
         <Cases />
         <Services />
         <Feedbacks feedbacks={feedbacks} /> {/* Pass feedbacks as props */}
         <Members />
         <Form />
         <Footer />
      </div>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App