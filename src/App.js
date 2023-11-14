import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.scss";
import AppContext from "./Utils/Context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";

import Newsletter from "./components/Footer/Newsletter/Newsletter";
import CategoryProducts from "./components/CategoryProducts";
function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryProducts />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
