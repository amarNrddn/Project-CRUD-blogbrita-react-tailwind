import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CreateNew from "./components/CreateNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailNews from "./components/DetailNews";

function App() {

  return (
    <Router>
      <div className="flex justify-center w-full">
        <div className="w-[50%]">
          <div className="">
            <Navbar />
            <div className="pt-4">
              <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="createnews" element={<CreateNew/>} />
                <Route path="detailnews/:id" element={<DetailNews/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
