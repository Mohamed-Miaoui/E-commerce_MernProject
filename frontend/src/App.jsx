import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Shop } from "./Pages/Shop";
//prettier-ignore
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/men" element={<ShopCategory category = "men"></ShopCategory>}></Route>
        <Route path="/women" element={<ShopCategory category = "women"></ShopCategory>}></Route>
        <Route path="/kid" element={<ShopCategory category = "kid"></ShopCategory>}></Route>
        <Route path="/product" element={<Product></Product>}>
          <Route path=":productId" element={<Product></Product>}></Route>
        </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/login" element={<LoginSignup></LoginSignup>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
