
import './App.css';
import Navbar from './index.js';
import Card from './index.js';

function App() {
    return (
        <div className="App">
            <Navbar>Navbar</Navbar>
            <h1>CS 230L</h1>
            <h2>Section-02</h2>
            <p>WVU ID: 800367910</p>
            <p>Hi I am Theodore</p>
            <Card>Card 01</Card>
            <Card>Card 02</Card>
            <Card>Card 03</Card>
        </div>
    );
}

export default App;
