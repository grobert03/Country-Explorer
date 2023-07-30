import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
const App = () => {
  return (
    <div className="bg-fixed pt-20 bg-center bg-cover  bg-[url('/src/assets/world.svg')] h-screen">
      <div className="">
        <Header />
        <Search />
      </div>
      <Footer />
    </div>
  );
};

export default App;
