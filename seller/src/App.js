import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/dashboard/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AllListings from "./pages/dashboard/listings/AllListings";
import AddSingleListing from "./pages/dashboard/listings/AddSingleListing";




class App extends Component {

  render() {

    return (
      <Routes>
        <Route path='/' element={<HomeLayout />} >
          <Route index element={<Home />} />
          <Route path="listings" element={<AllListings />} />
          <Route path="/listings/add-single-listing" element={<AddSingleListing />} />
          <Route path="/listings/add-bulk-listings" element={<AddSingleListing />} />
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
