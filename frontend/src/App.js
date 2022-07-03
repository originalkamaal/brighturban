import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import { auth, handleUserProfile } from "./utils/firebase";

const initialState = {
  currentUser: null
};


class App extends Component {

  authListener = null;

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            }
          })
        })
      }

      this.setState({
        ...initialState
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }


  render() {

    const { currentUser } = this.state;
    return (
      <Routes>
        <Route path='/' element={<HomeLayout currentUser={currentUser} />} >
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
        </Route>

        {!currentUser ? <Route path="login"
          element={<Login currentUser={currentUser} />}
        /> :
          <Route path="login"
            element={<Navigate to="/" replace />}
          />}

      </Routes>
    )

  }
}

export default App;
