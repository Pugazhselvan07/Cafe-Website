import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
<nav className="navbar navbar-expand-lg nav-light bg-light text-white fixed-top fs-5 ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pugazh Cafe</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: 'transparent' }}>
      
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <Nav className="navbar-nav ms-auto nav-pills">
          <NavLink to="/" className="nav-item nav-link">Home</NavLink>
          <NavLink to="/Shop" className="nav-item nav-link">Shop</NavLink>
          <NavLink to="/About" className="nav-item nav-link">About</NavLink>
          <NavLink to="/Menu" className="nav-items nav-link">Menu</NavLink>
          <NavLink to="/Service" className="nav-items nav-link">Service</NavLink>
          <NavLink to="/Contact" className="nav-items nav-link">Contact</NavLink>
      </Nav>
    </div>
  </div>
</nav>
    );
}
export default Navbar;
