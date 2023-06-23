import logo from './logo.svg';
import './App.css';
import MainRoutes from './pages/MainRoutes';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <MainRoutes/>
      <Navbar/>
      <Home></Home>
    </div>
  );
}

export default App;
