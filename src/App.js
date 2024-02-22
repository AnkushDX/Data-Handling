import "./App.css";
import ApiData from "./Components/ApiData/ApiData";
import ApiDetails from "./Components/ApiDetails/ApiDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApiData />}></Route>
          <Route  path="/post/:postId" element={<ApiDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
