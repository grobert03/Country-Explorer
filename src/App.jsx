import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./views/SearchBar";
import Country from "./components/Country";
const App = () => {
  return (
    <Router>
      <div className="bg-fixed pt-20 bg-center bg-cover bg-[url('/src/assets/world.svg')] h-screen">

        <Routes>
          <Route path="/" element={<SearchBar/>}></Route>
          <Route path="/country/:tld" element={<Country/>}></Route>
        </Routes>

        <Footer />
      </div>

    </Router>
  );
};

export default App;
