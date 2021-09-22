import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import FirstScreen from "./components/first_screen";
import Calculator from "./components/calculator";
import Gallery from "./components/gallery";
import About from "./components/about";
import Price from "./components/price";
import Modeling from "./components/modeling";
import Materials from "./components/materials";
import Delivery from "./components/delivery";
import Contacts from "./components/contacts";
import Sidebar from "./components/sidebar";


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <React.Fragment>
        <div className="container">
            <Header />
            <Sidebar />
            <FirstScreen />
            <About />
            <Calculator />
            <Gallery />
            <Materials />
            <Modeling />
            <Price />
            <Delivery />
            <Contacts />
        </div>
        <Footer />
    </React.Fragment>
  );
}

export default App;