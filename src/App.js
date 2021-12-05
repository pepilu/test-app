import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

//klasne komponente
//funkcionalne komponente

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <NavBar />
      {/* <h3>Ovo je moj React sajt</h3> */}
      <Products />
    </div>
  );
}

export default App;
