// import { ToastContainer, toast } from "react-toast";
// import { BsFill0CircleFill } from "react-icons/bs";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Details from "./Details";
import Notfound from "./Notfound";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/details" element={<Details />} />
        {/* <Route path="/product/:rafi" element={<ProductDetails />} /> */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
