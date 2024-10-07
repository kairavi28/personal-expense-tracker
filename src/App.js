import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Stats from "./pages/Stats";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>

    </Router>
    </Provider>
  );
}

export default App;
