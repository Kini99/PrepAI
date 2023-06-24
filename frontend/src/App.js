import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import MainRoutes from "./pages/MainRoutes";
import 'tailwindcss/tailwind.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
