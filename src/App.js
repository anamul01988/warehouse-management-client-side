import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/Header/Header";
import NotFound from "./common/NotFound/NotFound";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
