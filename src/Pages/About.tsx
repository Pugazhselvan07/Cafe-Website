import Image from '../assets/aboutimg2.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image2 from '../assets/aboutimg3.png';
import Image4 from '../assets/aboutimg4.png';

function About() {
    return (
        <div className='mt-5'>
            <div>
                <section className="row featurette body-mt-4 ft-bold">
                    <div className="col-md-7 order-md-2">
                        <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '30px', fontSize: '40px', }}>
                            About Our cafe
                        </p>
                        <p>
                            Welcome to <strong>Pugazh Cafe</strong> – where every cup of coffee is
                            brewed with love, passion, and the finest beans from around the world.
                            We believe coffee is more than just a drink – it’s an experience that
                            brings people together.
                        </p>
                        <p>
                            From our carefully roasted beans to our fresh pastries, we’re committed
                            to delivering flavors that warm your heart. Whether you’re stopping by
                            for your morning espresso, enjoying a latte with friends, or just
                            finding a quiet spot to relax, our cafe is your cozy escape.
                        </p>
                        <p >
                            Come in, take a seat, and let us make your day a little more delicious.
                        </p>


                    </div>
                    <div className="col-md-5 order-md-1 mt-5 ">
                        <img
                            src={Image}
                            className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            alt="Descriptive alt text"
                            width="450"
                            height="300"

                        ></img>
                    </div>
                </section>  



                {/* body-2 */}

                <section>

                    <Row className='align-items-center ft-bold ms-auto'>
                        <Col>
                            <p>
                                We take pride in using only fresh, high-quality ingredients to prepare our menu, which features a delightful mix of crispy bites, cheesy treats, creamy beverages, and refreshing coolers.
                            </p>
                            <p>
                                Whether you’re stopping by for a quick coffee on a busy morning, sharing snacks with friends in the afternoon, or winding down with a cold drink in the evening, we’re here to make it special.
                            </p>
                            <p>
                                From rich espressos to smooth cappuccinos, every sip is designed to delight your senses. Whether you’re here to work, relax, or catch up with friends, our coffee makes every moment better.
                            </p>


                        </Col>
                        <Col md={5}>
                            <img
                                src={Image2}
                                alt="description all text"
                                style={{ width: '100%', height: '500px', borderRadius: '10px' }}
                            ></img>
                        </Col>
                    </Row>

                    {/* body-3 */}

                    <Row className='align-items-center ft-bold ms-auto'>
                        <Col md={5}>
                            <img
                                src={Image4}
                                alt="description all text"
                                style={{ width: '100%', height: '400px', borderRadius: '10px' }}
                            ></img>
                        </Col>
                        <Col>
                            <p>
                                we believe that every sip and every bite should be an experience worth remembering. From freshly brewed coffee to delicious snacks and refreshing drinks, our menu is crafted to bring comfort and joy to your day.
                            </p>
                            <p>
                                We source quality ingredients, prepare everything with love, and serve it with a smile—because great taste deserves great care. Whether you’re here for a quick snack, a relaxing cup of coffee, or a refreshing drink with friends, we’ve got something to make your moment special.
                            </p>
                        </Col>
                    </Row>
                </section>
            </div>
        </div>
    );
}
export default About;