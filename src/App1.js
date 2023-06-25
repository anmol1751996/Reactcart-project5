import {BrowserRouter as Router,Routes,Route} from "React-router-dom" 
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";



function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Coins" element={<Coins/>}/>
      <Route path="/Exchanges" element={<Exchanges/>}/>
      <Route path="/Coin/:id" element={<CoinDetails/>}/>

    </Routes>
    
  </Router> 
}

export default App;
