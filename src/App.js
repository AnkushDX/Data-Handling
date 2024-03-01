import "./App.css";
import ApiData from "./Components/ApiData/ApiData";
import ApiDetails from "./Components/ApiDetails/ApiDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataFilter from "./Components/MemoDataFilter/DataFilter";
import Product from  "./Components/Product/Slider01A"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApiData />}></Route>
          <Route  path="/post/:postId" element={<ApiDetails/>}></Route>
          <Route path="/data-filter" element={<DataFilter/>}></Route>
          <Route  path="/product" element={<Product/>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
