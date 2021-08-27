import React from "react";
import "./App.css";
import Header from "./components/header";
import Index from "./pages/index";
import Footer from "./components/footer";
import FirstScreen from "./components/first_screen";
import Calculator from "./components/calculator";
import Gallery from "./components/gallery";


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="container">
        <Header />
        <FirstScreen />
        <Calculator />
        <Gallery />
        {/*<Footer />*/}
    </div>
  );
}

export default App;