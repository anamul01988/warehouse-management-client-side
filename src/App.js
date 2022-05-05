import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/Header/Header";
import NotFound from "./common/NotFound/NotFound";
import RequireAuth from "./common/RequireAuth/RequireAuth";
import Inventory from "./components/Inventory/Inventory";
import AddItem from "./pages/AddItem/AddItem";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ManageInventory from "./pages/ManageInventory/ManageInventory";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory/:inventoryId" element={
          <RequireAuth>
              <Inventory/>
          </RequireAuth>
        } />
        <Route path="/manage_inventory" element={<ManageInventory/>} />
        <Route path="/additem" element={
          <RequireAuth>
              <AddItem/>
          </RequireAuth>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
