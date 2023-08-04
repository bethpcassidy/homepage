// import { Header } from "./Header";
import "./App.css";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Header } from "./Header";
import React from "react";

// import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
