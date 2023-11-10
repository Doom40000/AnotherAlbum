import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBarComponent/Navbar";
import FourZeroFour from "./components/404Component/404";
import AnotherAlbum from "./components/AnotherAlbumComponent/AnotherAlbum";
import Login from "./components/LoginComponent/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/AnotherAlbum" element={<AnotherAlbum />}/>
          <Route path="*" element={<FourZeroFour />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
