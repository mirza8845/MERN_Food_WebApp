import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import CartScreen from "./Screens/CartScreen";
import Login from "./Screens/AuthScreens/Login";
import SignUp from "./Screens/AuthScreens/SignUp";
import OrderScreen from "./Screens/OrderScreen";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/order" element={<OrderScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
