import Header from "./common/containers/Header";
import { Routes, Route } from "react-router-dom";
import { ProductPage } from "./common/containers/ProductPage/ProductPage";
import { Discussion } from "./common/containers/ProductPage/Discussion/Discussion";
import { Contact } from "./common/components/Contact/Contact";
import productInfo from "./data/productInfo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mx-32 mb-12">
        <Routes>
          <Route
            path="/product/end-of-arm-effectors/grippers/finger-grippers/:product_name"
            element={<ProductPage productInfo={productInfo} />}
          />
        </Routes>
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="discussion" style={{ height: 500 }}>
          <Discussion />
        </div>
    </div>
  );
}

export default App;
