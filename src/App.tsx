import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Discover from "./components/Discover/Discover";
import ForWho from "./components/ForWho/ForWho";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Discover />
        <ForWho />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
};

export default App;
