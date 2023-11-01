import './App.css';
import Navbar from "./Navbar.js";
import Card from "./Card.js";
import react from "react";

function App() {
    return (
        <div className="App">
            <Navbar />
            <h1>CS 230L</h1>
            <h2>Section-02</h2>
            <p>WVU ID: 800367910</p>
            <p>Hi I am Theodore</p>
            <Card />
        </div>
    );
}

export default App;
