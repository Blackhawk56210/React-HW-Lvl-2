import "./App.css";
import Home from "./pages/home.jsx";
import Inventory from "./pages/Inventory.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/footer-header/navbar";
import Footer from "./components/footer-header/footer.jsx";
import Support from "./pages/support.jsx";
import Todo from "./todo-app/todo.jsx"

function App() {
  return (
    <>
      {/* // <div className="App">
      //   <NavBar />
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/inventory" element={<Inventory />} />
      //     <Route path="/support" element={<Support />} />
      //   </Routes>
      //   <Footer />
      // </div> */}
      <Todo />
    </>
  );
}

export default App;
