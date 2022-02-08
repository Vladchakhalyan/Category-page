import "./App.css";
import { HeaderContaner } from "./Components/Header/HeaderContaner";
import ProductContainer from "./Components/Product/ProductContainer";

import { Route } from "react-router-dom";
import { useState } from "react";
function App() {
  let [state3, setstate3] = useState([]);
  return (
    <subCategoryContextProvider>
      <div className="App">
        <HeaderContaner state3={state3} setstate3={setstate3} />
        <ProductContainer state3={state3} setstate3={setstate3} />
      </div>
    </subCategoryContextProvider>
  );
}

export default App;
