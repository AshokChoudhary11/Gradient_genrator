import React from "react";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
