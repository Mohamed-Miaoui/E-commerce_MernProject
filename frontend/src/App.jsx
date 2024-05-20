import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Shop } from "./Pages/Shop";
import { Footer } from "./Components/Footer/Footer";
import console_banner from "./Components/Assets/banner_console.jpg";
import game_banner from "./Components/Assets/banner_game.jpg";
import credit_banner from "./Components/Assets/banner_credit.png";
//prettier-ignore
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        {/* display banner and products based on category and banner props */}
        <Route path="/console" element={<ShopCategory banner={console_banner} category = "console & accessories"></ShopCategory>}></Route> 
        <Route path="/game" element={<ShopCategory banner={game_banner} category = "game"></ShopCategory>}></Route>
        <Route path="/credit" element={<ShopCategory banner={credit_banner} category = "credit"></ShopCategory>}></Route>
        <Route path="/product" element={<Product></Product>}>
          <Route path=":productId" element={<Product></Product>}></Route>
        </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/login" element={<LoginSignup></LoginSignup>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
