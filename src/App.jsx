import React from "react";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

const App = () => {
  return (
    <div className="relative">
      <Nav />
      <Homepage />
      <Footer />
      {/* <BottomNav /> */}
    </div>
  );
};

export default App;
