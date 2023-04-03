import "./App.css";
import Nav from "./components/Nav";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Brewery from "./pages/Brewery";

function App() {

  return (
    <div className="whole-page">
      <Nav />
      <div >
        <div className="display-box head-h1">
          <h1>
            <Link to="/" className="h1-color">Blue Sky Brewery 🍺 </Link>
          </h1>
        </div>
        <div>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brewery/:brewery" element={<Brewery />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;