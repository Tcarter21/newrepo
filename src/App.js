
import './App.css';
import Navbar from './index.js';
import Card from './index.js';

function App() {
    return (
        <div className="App">
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container-fluid">
                    <p>Navbar</p>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <p>Home</p>
                            </li>
                            <li class="nav-item">
                                <p>About</p>
                            </li>
                            <li class="nav-item">
                                <p>Contact</p>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="text" placeholder="Search">
                                <button class="btn btn-primary" type="button">Search</button>
                            </input>
                        </form>
                    </div>
                </div>
            </nav>
            <h1>CS 230L</h1>
            <h2>Section-02</h2>
            <p>WVU ID: 800367910</p>
            <p>Hi I am Theodore</p>
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">Card 01</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-body">
                    <h3 class="card-title">Card 02</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-body">
                    <h3 class="card-title">Card 03</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
}

export default App;
