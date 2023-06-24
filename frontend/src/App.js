import logo from './logo.svg';
import './App.css';
import MainRoutes from './pages/MainRoutes';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Footer/>
      
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
