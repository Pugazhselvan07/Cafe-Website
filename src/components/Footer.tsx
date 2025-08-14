import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  border-top bg-wood ">
            <div className="col  footer-left ps-4 ">
                <div className="footer-left ps-4 text-white">
                    <h3>Pugazh Cafe</h3>
                    <p>"Brewing happiness, one cup at a time."</p>
                    <div className="mt-3">
                        <a href="#" className="text-white me-3 fs-4"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-white me-3 fs-4"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="text-white me-3 fs-4"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-white fs-4"><i className="bi bi-whatsapp"></i></a>
                    </div>
                </div>

            </div>
            <div className="col  text-center text-white " >
                <h5 style={{fontSize:'1.5rem'}}>Quick Links</h5>
                <ul className="nav flex-column ">
                    <li className="nav-item mb-2">
                        <NavLink to="/" className="nav-item nav-link text-white">Home</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/shop" className="nav-item nav-link text-white">Shop</NavLink>
                    </li> <li className="nav-item mb-2">
                        <NavLink to="/about" className="nav-item nav-link text-white">About</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                       <NavLink to="/menu" className="nav-item nav-link  text-white">Menu</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/service" className="nav-item nav-link text-white">Service</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                        <NavLink to="/contact" className="nav-item nav-link text-white">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="col text-center text-white">
                <h5 style={{fontSize:'1.5rem'}}>Customer Support</h5> 
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-white">FAQs</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-white">Order Tracking</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-white">Gift Cards</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-white">Feedback</a>
                    </li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a>
                    </li>
                </ul>
            </div>
            <div className="text-center text-white">
                <h5 style={{fontSize:'1.5rem'}}>Visit Us</h5>
                <p>123 Coffee Street ,Chennai,India</p>
                <p>+91 9239875468</p>
                <li>hello@PugazhCafe.com</li>
            </div>

        </footer>
    );
}
export default Footer;
