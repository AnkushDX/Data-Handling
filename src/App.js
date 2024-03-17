import "./App.css";
import ApiData from "./Components/ApiData/ApiData";
import ApiDetails from "./Components/ApiDetails/ApiDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataFilter from "./Components/MemoDataFilter/DataFilter";
import Products from "./Components/Products/Slider01A/Slider01A"
import Shop from "./Components/Shop/Shop";
import ProductShop from "./Components/ProductShop/ProductShop";
import Example from "./Components/Exapmle/Example";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Example />}></Route>
          <Route path="/post/:postId" element={<ApiDetails />}></Route>
          <Route path="/data-filter" element={<DataFilter />}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/products-shop" element={<ProductShop/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
