import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigationabar from "./components/Navigationabar";
import Nav from "./components/Navbar";
import SectionFirst from "./components/SectionFirst";
import SectionSecond from "./components/SectionSecond";

function App() {
  return (
    <div className="App">
      <section className="">
        <Navigationabar />
        <Nav />
      </section>
      <Routes>
        <Route path="/" element={<SectionFirst />} />
      </Routes>
      <Routes>
        <Route path="/" element={<SectionSecond />} />
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
