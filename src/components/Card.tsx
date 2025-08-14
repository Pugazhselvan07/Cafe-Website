import { useNavigate } from "react-router-dom";
import coffeeImage from '../assets/coffee.jpg';
import coffeeImage2 from '../assets/coffee2.jpg';
import coffeeImage3 from '../assets/coffee3.jpg';
import coffeeImage4 from '../assets/coffee4.jpg';
import coffeeImage5 from '../assets/coffee5.jpg';
import coffeeImage6 from '../assets/coffee6.jpg';
import coffeeImage7 from '../assets/coffee7.jpg';
import coffeeImage8 from '../assets/coffee8.jpg';
import snackImage1 from '../assets/breadomlette.jpg';
import snackImage2 from '../assets/sandwich.jpg';
import snackImage3 from '../assets/burger.jpg';
import snackImage4 from '../assets/frenchfries.jpg';
import snackImage5 from '../assets/vegan-roll.jpg';
import snackImage6 from '../assets/cookies.jpg';
import snackImage7 from '../assets/chicken-puff.jpg';
import snackImage8 from '../assets/somosa.jpg';
import milkshake1 from '../assets/mangomilkshake.jpg';
import milkshake2 from '../assets/oreomilkshakes.jpg';
import milkshake3 from '../assets/chocolatepeanutshake.jpg';
import milkshake4 from '../assets/coconutshake.jpg';
import milkshake5 from '../assets/redvelvetmilkshake.jpg';
import milkshake6 from '../assets/venillamilkshake.jpg';
import milkshake7 from '../assets/blueberrymilkshakes.jpg';
import milkshake8 from '../assets/butterscartchshake.jpg';

function Card() {
   const navigate = useNavigate(); 

  const cardData1 = [
    {id:1,title: "Mocha Latte Coffee",image: coffeeImage,price:190},
    {id: 2,title: "Creamy Oreo Iced coffee",image: coffeeImage2,price:170},
    {id: 3,title: "Black Coffee",image: coffeeImage3,price:70 },
    {id: 4,title: "Chocolate Cream Cold Brew",image: coffeeImage4,price:175},
    {id: 5,title: "Temperos Descomplicados Coffee",image: coffeeImage5,price:195},
    {id: 6,title: "Dalgona Coffee",image: coffeeImage6,price:165},
    {id: 7,title: "Avocado Chocalate Mousse",image: coffeeImage7,price:205},
    {id: 8,title: "Mocha Cookie Crumble Frappuccino",image: coffeeImage8,price:187},
  ];

  const cardData2 = [  
    {id:9,title:"Egg Bread omlette",image:snackImage1,price:95},
    {id:10,title:"Veg Sandwich",image:snackImage2,price:150},
    {id:11,title:"Chicken Burger",image:snackImage3,price:95},
    {id:12,title:"French Fries",image:snackImage4,price:165},
    {id:13,title:"Vegan Filipino Spring Rolls ",image:snackImage5,price:107},
    {id:14,title:"Cookies",image:snackImage6,price:50},
    {id:15,title:"Chicken Puff",image:snackImage7,price:50},
    {id:16,title:"Veg Samosa",image:snackImage8,price:35},
  ];

  const cardData3 = [
    {id:17,title:" Mango Milkshakes",image:milkshake1,price:150},
    {id:18,title:" Oreo Milkshake",image:milkshake2,price:165},
    {id:19,title:" Chocolate Peanut Milkshake",image:milkshake3,price:185},
    {id:20,title:" Coconut Milkshake",image:milkshake4,price:215},
    {id:21,title:" Red Velvet Milkshake",image:milkshake5,price:205},
    {id:22,title:" Venilla Milkshake ",image:milkshake6,price:205},
    {id:23,title:" BlueBerry Milkshake",image:milkshake7,price:185},
    {id:24,title:" Butterscotch Milkshake ",image:milkshake8,price:195},

  ];


  return (
    <div className="container mt-4">
      {/* Coffee Section */}
      <h1 className='text-center mb-4'>Shop at Our Cafe</h1>
      <h2 className='text-center mb-4 text-decoration-underline'>Coffee</h2>
      <h4>Start your day with the bold aroma and smooth taste of our freshly brewed coffee...</h4>

      <div className="row">
        {cardData1.map((card) => (
          <div key={card.id} className="col-md-3 mb-4">
            <div className="card h-100 w-100">
              <img src={card.image} className="card-img-top" alt={card.title} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text mt-2">₹{card.price}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => navigate(`/product/${card.id}`)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Snacks Section */}
      <div className="col-12 text-center mb-4 mt-2">
        <h2 className='text-center mb-4 text-decoration-underline'>Snacks</h2>
        <h4>Our snacks are the perfect fuel for your day...</h4>
      </div>

      <div className="row">
        {cardData2.map((card) => (
          <div key={card.id} className="col-md-3 mb-4">
            <div className="card h-100 w-100">
              <img src={card.image} className="card-img-top" alt={card.title} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text mt-2">₹{card.price}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => navigate(`/product/${card.id}`)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Milkshakes Section */}
      <div className="col-12 text-center mb-4 mt-2">
        <h2 className='text-center mb-4 text-decoration-underline'>Milkshakes</h2>
        <h4>Sip, smile, repeat! Our milkshakes are more than drinks...</h4>
      </div>

      <div className="row">
        {cardData3.map((card) => (
          <div key={card.id} className="col-md-3 mb-4">
            <div className="card h-100 w-100">
              <img src={card.image} className="card-img-top" alt={card.title} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text mt-2">₹{card.price}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => navigate(`/product/${card.id}`)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;