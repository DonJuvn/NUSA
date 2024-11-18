import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu";
import About from "./components/about";
import Counters from "./components/counters";
import MouseShadow from "./components/MouseShadow";

function App() {
   return (
      <div className="App">
         <MouseShadow />
         <Menu />
         <About />
         <Counters />
      </div>
   );
}

export default App;
