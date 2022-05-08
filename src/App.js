import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./common/Footer/Footer";
import Header from "./common/Header/Header";
import NotFound from "./common/NotFound/NotFound";
import RequireAuth from "./common/RequireAuth/RequireAuth";
import Inventory from "./components/Inventory/Inventory";
import AddItem from "./pages/AddItem/AddItem";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ManageInventory from "./pages/ManageInventory/ManageInventory";
import ManageItems from "./pages/ManageItems/ManageItems";
import MyItems from "./pages/MyItems/MyItems";
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
        <Route path="/manageitem" element={
          <RequireAuth>
              <ManageItems/>
          </RequireAuth>
        } />
        <Route path="/additem" element={
          <RequireAuth>
              <AddItem/>
          </RequireAuth>
        } />
        <Route path="/myitems" element={
          <RequireAuth>
              <MyItems/>
          </RequireAuth>
        } />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
