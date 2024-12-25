import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import OnlineOrder from "./pages/OnlineOrder";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderOnline" element={<OnlineOrder/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
