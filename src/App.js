import Header from "./common/containers/Header";
import { Routes, Route } from "react-router-dom";
import { ProductSection } from "./common/containers/ProductPage/ProductPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mx-12">
        <Routes>
          <Route
            path="/product/end-of-arm-effectors/grippers/finger-grippers/:product_name"
            element={<ProductSection />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
