import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image1 from '../assets/menuimg.jpg';
import Image2 from '../assets/menuimg2.jpg';
import Image3 from '../assets/menuimg3.jpg';


function Menu() {
    return (
        <div style={{marginTop:'80px', }}>
            <div>
                <h1 className=' text-center mb-5 '>MENU</h1>
               
                <section>
                     <h4 style={{padding:'0 250px',textDecoration:'underline',}}>Coffee</h4>
                     <h4 style={{padding:'0 170px',textDecoration:'underline'}}> Hot And Soft Beverages</h4>
                    <Row style={{margin:'20px'}}>
                        <Col >
                        <div style={{marginTop:'50px',marginLeft:'90px'}}>
                           <h5 className='p-2 fs-4'>Mocha Latte Coffee -------------------₹ 230 </h5>    
                           <h5 className='p-2 fs-4'>Cappuccino --------------------------- ₹ 250 </h5>
                           <h5 className='p-2 fs-4'>Black coffee --------------------------- ₹ 200 </h5>
                           <h5 className='p-2 fs-4'>Americano ---------------------------- ₹ 350 </h5>
                           <h5 className='p-2 fs-4'>Oreo iced coffee ---------------------- ₹ 200 </h5>
                           <h5 className='p-2 fs-4'>Chocolate Cold Brew ------------------₹ 175</h5>
                           <h5 className='p-2 fs-4'>Dalgona coffee ------------------------₹ 165</h5>
                           <h5 className='p-2 fs-4'>Cookie Frappuccino -------------------₹ 187</h5>
                        </div>
                        </Col>
                        <Col md={5}>
                            <img
                                src={Image1}
                                alt="description all text"
                                style={{ width: '400px', height: '500px', borderRadius: '10px',marginRight:'570px' }}
                            ></img>
                        </Col>
                    </Row>
                </section>

                 <section>
                     <h4 style={{paddingLeft:'68%',marginTop:'50px',textDecoration:'underline',fontSize:'1.8rem'}}>Snacks</h4>
                    <Row style={{margin:'20px'}}>
                       
                        <Col md={5}>
                            <img
                                src={Image2}
                                alt="description all text"
                                style={{ width: '400px', height: '500px', borderRadius: '10px',marginLeft:'70px' }}
                            ></img>
                        </Col>
                         <Col >
                        <div style={{marginTop:'50px',marginLeft:'190px'}}>
                           <h5 className='p-2 fs-4'>Bread Omlette --------------------₹ 95</h5>    
                           <h5 className='p-2 fs-4'>Veg Sandwich --------------------₹ 150 </h5>
                           <h5 className='p-2 fs-4'>Chicken Burger -------------------₹ 95 </h5>
                           <h5 className='p-2 fs-4'>French Fries -----------------------₹ 165 </h5>
                           <h5 className='p-2 fs-4'>Vegan Fillopino roll ---------------₹ 107 </h5>
                           <h5 className='p-2 fs-4'>Cookies ----------------------------₹ 50</h5>
                           <h5 className='p-2 fs-4'>Chicken Puff -----------------------₹ 50</h5>
                           <h5 className='p-2 fs-4'>Veg samosa ------------------------ ₹ 35</h5>
                        </div>
                        </Col>
                    </Row>
                </section>

                 <section>
                     <h4 style={{paddingLeft:'220px',textDecoration:'underline',paddingTop:'40px'}}> Milkshakes</h4>
                    <Row style={{margin:'20px'}}>
                        <Col >
                        <div style={{marginTop:'50px',marginLeft:'90px'}}>
                           <h5 className='p-2 fs-4'>Mango Milkshakes -------------------₹ 150 </h5>    
                           <h5 className='p-2 fs-4'>Oreo Milkshake ---------------------- ₹ 160 </h5>
                           <h5 className='p-2 fs-4'>Chocolate Peanut Milkshake--------- ₹ 180 </h5>
                           <h5 className='p-2 fs-4'>Coconut Milkshake ------------------- ₹ 215 </h5>
                           <h5 className='p-2 fs-4'>Red Velvet Milkshake----------------- ₹ 205 </h5>
                           <h5 className='p-2 fs-4'>Venilla Milkshake ----------------------₹ 205</h5>
                           <h5 className='p-2 fs-4'>BlueBerry Milkshake -------------------₹ 185</h5>
                           <h5 className='p-2 fs-4'>Butterscotch Milkshake ----------------₹ 195</h5>
                        </div>
                        </Col>
                        <Col md={5}>
                            <img
                                src={Image3}
                                alt="description all text"
                                style={{ width: '400px', height: '500px', borderRadius: '10px',marginRight:'570px' }}
                            ></img>
                        </Col>
                    </Row>
                </section>
            </div>
        </div>
    );
}
export default Menu;