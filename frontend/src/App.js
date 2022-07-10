import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";




class App extends Component {

  render() {

    return (
      <Routes>
        <Route path='/' element={<HomeLayout />} >
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
        </Route>

        <Route path="login"
          element={<Login />} />

        <Route path="register"
          element={<Register />} />


      </Routes>
    )

  }
}

export default App;
