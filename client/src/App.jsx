// import { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Album from "./components/Album";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Body">
        <Album />
      </div>
    </div>
  );
}

export default App;