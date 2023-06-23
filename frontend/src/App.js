import MainRoutes from "./pages/MainRoutes";
import 'tailwindcss/tailwind.css';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
