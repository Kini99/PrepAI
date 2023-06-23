import MainRoutes from "./pages/MainRoutes";
import 'tailwindcss/tailwind.css';
import "./App.css"

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
