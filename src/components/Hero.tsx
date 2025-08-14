import './Hero.css';
import Heroimage from '../assets/Heroimage.jpg';
import bgImage from '../assets/coffee-bg.jpg';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handlegetcoffee = () =>{
    navigate('/Shop')
  }

  const handlevisitus = () =>{
    navigate('/About')
  }


  
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="container-fluid">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={Heroimage}
                className="d-block mx-lg-auto img-fluid hero-img"
                alt="Bootstrap Themes"
                width="100%"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 text-white">
              <h1 className="display-5 fw-bold lh-1 mb-3">“Coffee and friends make the perfect blend.”</h1>
              <p className="lead">
                We serve hot, fresh coffee and tasty snacks every day. Come in, relax, and enjoy your favorite drink.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-center">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={handlegetcoffee}>Get a coffee</button>
                <button type="button" className="btn btn-outline-light btn-lg px-4" onClick={handlevisitus}>Visit us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
