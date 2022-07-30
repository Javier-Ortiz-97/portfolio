import React from "react";
import "./App.css";
import Header from "./Header";
import Projects from "./Projects";
import WelcomeMessage from "./WelcomeMessage";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
