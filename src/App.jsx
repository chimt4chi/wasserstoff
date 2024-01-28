import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  //Could be not responsive try viewing 1366x768 or laptop view port
  return (
    <div className="bg-[#05050F] h-full">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
