
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Blog from "./components/Blog";
import BookFerryPage from "./components/BookFerryPage";
import {  Box } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <Box w='100%' >
        <Navbar />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/bookFerry" element={<BookFerryPage />} />
        </Routes>

      </Box>

    </>
  );
}

export default App;
