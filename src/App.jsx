
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation  } from "react-router-dom";

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

import Home from "./pages/Home.jsx"
import Blog from "./pages/Blog.jsx"
import Gallery from "./pages/Gallery.jsx"

function AnimatedRoutes(){
  const location = useLocation();

  return(
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/Anchor-Website" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <AnimatedRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
