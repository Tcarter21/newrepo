
import './App.css';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-dark">
            <div className="container-fluid text-light">
                <span className="navbar-brand text-light">Navbar</span>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item text-light">
                            Home
                        </li>
                        <li className="nav-item text-light">
                            About
                        </li>
                        <li className="nav-item text-light">
                            Contact
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search"> 
                        </input>
                        <button className="btn btn-primary" type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
