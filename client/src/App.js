import React from "react";
import "./App.css";
import Header from "./components/header";
import MyCarousel from "./components/gallery";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
      <div className="App">
        <Header />
      </div>
  );
}

export default App;