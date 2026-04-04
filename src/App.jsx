import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
};

export default App;
