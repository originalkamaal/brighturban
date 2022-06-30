import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>

      <Route path='/' element={<HomeLayout />} >
        <Route index element={<Home/>}/>
        <Route path="search" element={<Search/>}/>
      </Route>
    </Routes>
  );
}

export default App;
