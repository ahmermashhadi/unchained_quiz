import Header from "./common/containers/Header";
import { Routes, Route } from "react-router-dom";
import { ProductPage } from "./common/containers/ProductPage/ProductPage";
import productInfo from "./data/productInfo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mx-32">
        <Routes>
          <Route
            path="/product/end-of-arm-effectors/grippers/finger-grippers/:product_name"
            element={<ProductPage productInfo={productInfo} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
