
import './App.css';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <h1>Navbar</h1>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <h1>Home</h1>
                        </li>
                        <li className="nav-item">
                            <h1>About</h1>
                        </li>
                        <li className="nav-item">
                            <h1>Contact</h1>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search">
                            <button className="btn btn-primary" type="button">Search</button>
                
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
