//  body-1

import image from '../assets/bodyimg1.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image2 from '../assets/bodyimg(2).png';
import image3 from '../assets/bodyimg(3).png';
import { useNavigate } from 'react-router-dom';


function Body() {
  const navigate = useNavigate();

  const handleknowmore = () =>{
    navigate('/About')
  }

  const handleseemoreflavours = () =>{
    navigate('/Shop')
  }

  const handlesipsnack = () =>{
    navigate('/Shop')
  }

  return (
    <div>
      <section className="row featurette body-mt-4 ft-bold">
        <div className="col-md-7 order-md-2">
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '30px', fontSize: '20px', }}>
            Love in every cup — that’s the Pugazh Cafe promise.
          </p>
          <p>
            Pugazh Cafe is more than just a coffee spot — it's a place where flavors meet comfort, and every sip tells a story. Whether you're here for a quick espresso or a slow afternoon with friends, our cozy ambiance and handcrafted menu are designed to make you feel right at home.
          </p>
          <p>
            We take pride in sourcing the finest beans and ingredients, blending tradition with a modern twist. From aromatic South Indian filter coffee to indulgent desserts and savory bites, every item is prepared with care and served with a smile.
          </p>
          <p>
            At Pugazh Cafe, we believe in community, creativity, and great conversations. Come for the coffee, stay for the vibe — and let us be your favorite corner of calm in a busy world.
          </p>
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            "Coffee brewed with love, served with a smile."
          </p>
          <p className='lead'>
            Click Here to Know more about our shop.
          </p>
          <button type="button" className='btn btn-secondary' onClick={handleknowmore}>Know more</button>

        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={image}
            className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            alt="Descriptive alt text"
            width="400"
            height="300"
          ></img>
        </div>
      </section>



      {/* body-2 */}

      <section>
        
          <Row className='align-items-center ft-bold ms-auto'>
            <Col>
              <p className='body-p'>Coffe's and Milkshakes</p>
              <p>
                At Pugazh Cafe, coffee isn't just a drink – it's a craft. We source high-quality beans from trusted farms, roast them to perfection, and brew each cup with care.
              </p>
              <p>
                From rich espressos to smooth cappuccinos, every sip is designed to delight your senses. Whether you’re here to work, relax, or catch up with friends, our coffee makes every moment better.
              </p>
              <p>
                Freshly brewed. Lovingly served. Always satisfying.
              </p>
              <button type="button" className='btn btn-secondary' onClick={handleseemoreflavours}>See More Flavours</button>

            </Col>
            <Col md={5}>
              <img
                src={image2}
                alt="description all text"
                style={{ width: '100%', height:'500px', borderRadius: '10px' }}
              ></img>
            </Col>
          </Row>


          <Row className='align-items-center ft-bold ms-auto'>
            <Col md={5}>
              <img
                src={image3}
                alt="description all text"
                style={{ width: '100%', height: '400px', borderRadius: '10px' }}
              ></img>
            </Col>
            <Col>
              <p className='body-p'>Snacks and Drinks</p>
              <p>
                At Pugazh Café, our Snacks & Drinks menu is crafted to satisfy every craving, big or small. From crispy fries and cheesy garlic bread to soft muffins and fresh sandwiches, every snack is made to bring you comfort in every bite. Pair them with our refreshing range of drinks – from icy cold coffee and tangy lemonade to creamy milkshakes and aromatic masala chai. Whether you’re here for a quick bite, a relaxing chat, or just to treat yourself, our snacks and drinks are made to keep your taste buds happy and your heart full.
              </p>
              <button type="button" className='btn btn-secondary' onClick={handlesipsnack}>Sip & Snack</button>
            </Col>
          </Row>

        
      </section>
    </div>
  );
}
export default Body;
