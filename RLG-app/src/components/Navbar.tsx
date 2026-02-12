import { useEffect } from 'react';
import logo from './../assets/rlg_logo.png';
import './../styles/Navbar.css'

function Navbar() {
    useEffect(()=>{
        console.log("Loading navbar");
    },[]);
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <img src={logo} alt="RLJ Logo" width="300px" />
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">RLJ Global</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resources</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Business
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Export Division</a></li>
                                    <li><a className="dropdown-item" href="#">Import Division</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Merchant Trade</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Global Reach</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Investor/Media</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Navbar;