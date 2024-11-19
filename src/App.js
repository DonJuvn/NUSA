import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu";
import About from "./components/about";
import Counters from "./components/counters";
import Cases from "./components/cases";
import Services from "./components/services";
// import ShadowBox from "./components/shadow-box";
// import MouseShadow from "./components/MouseShadow";

function App() {
   return (
      <div className="App">
         {/* <MouseShadow /> */}
         <Menu />
         <About />
         <Counters />
         <Cases />
         <Services />
         {/* <ShadowBox /> */}
      </div>
   );
}

export default App;
