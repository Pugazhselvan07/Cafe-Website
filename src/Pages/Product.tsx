import { useState } from "react";

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

type ProductType = {
    id: number;
    title: string;
    image: string;
    price: number;
};

type CartItemType = ProductType & {
    qty: number;
};

export default function Product() {
    const allProducts: ProductType[] = [
        { id: 1, title: "Mocha Latte Coffee", image: coffeeImage, price: 190 ,},
        { id: 2, title: "Creamy Oreo Iced coffee", image: coffeeImage2, price: 170 },
        { id: 3, title: "Black Coffee", image: coffeeImage3, price: 70 },
        { id: 4, title: "Chocolate Cream Cold Brew", image: coffeeImage4, price: 175 },
        { id: 5, title: "Temperos Descomplicados Coffee", image: coffeeImage5, price: 195 },
        { id: 6, title: "Dalgona Coffee", image: coffeeImage6, price: 165 },
        { id: 7, title: "Avocado Chocolate Mousse", image: coffeeImage7, price: 205 },
        { id: 8, title: "Mocha Cookie Crumble Frappuccino", image: coffeeImage8, price: 187 },
        { id: 9, title: "Egg Bread Omelette", image: snackImage1, price: 95 },
        { id: 10, title: "Veg Sandwich", image: snackImage2, price: 150 },
        { id: 11, title: "Chicken Burger", image: snackImage3, price: 95 },
        { id: 12, title: "French Fries", image: snackImage4, price: 165 },
        { id: 13, title: "Vegan Filipino Spring Rolls", image: snackImage5, price: 107 },
        { id: 14, title: "Cookies", image: snackImage6, price: 50 },
        { id: 15, title: "Chicken Puff", image: snackImage7, price: 50 },
        { id: 16, title: "Veg Samosa", image: snackImage8, price: 35 },
        { id: 17, title: "Mango Milkshake", image: milkshake1, price: 150 },
        { id: 18, title: "Oreo Milkshake", image: milkshake2, price: 165 },
        { id: 19, title: "Chocolate Peanut Milkshake", image: milkshake3, price: 185 },
        { id: 20, title: "Coconut Milkshake", image: milkshake4, price: 215 },
        { id: 21, title: "Red Velvet Milkshake", image: milkshake5, price: 205 },
        { id: 22, title: "Vanilla Milkshake", image: milkshake6, price: 205 },
        { id: 23, title: "Blueberry Milkshake", image: milkshake7, price: 185 },
        { id: 24, title: "Butterscotch Milkshake", image: milkshake8, price: 195 },
    ];

    const [cart, setCart] = useState<CartItemType[]>([]);

    const addToCart = (product: ProductType) => {
        setCart((prev) =>
            prev.some((item) => item.id === product.id)
                ? prev.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                )
                : [...prev, { ...product, qty: 1 }]
        );
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: number, qty: number) => {
        if (qty <= 0) {
            removeFromCart(id);
        } else {
            setCart((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, qty } : item
                )
            );
        }
    };

    const buyNow = () => {
        alert(`Order placed successfully! Total: ₹${totalPrice}`);
        setCart([]);
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div className="container-fluid mt-5">
            <h2 className="text-center mb-4 pt-5 fs-bold">Select Your Items</h2>

            <div className="row">
                {allProducts.map((p) => (
                    <div key={p.id} className="col-sm-6 col-md-4 col-lg-3 text-center mb-4">
                        <img
                            src={p.image}
                            alt={p.title}
                            className="img-fluid"
                            style={{ height: "350px", objectFit: "cover", width: "100%",borderRadius:"20px"}}
                        />
                        <h5>{p.title}</h5>
                        <p>₹{p.price}</p>
                        <button className="btn btn-primary" onClick={() => addToCart(p)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-5 mx-5">
                <h3 >Your Cart</h3>
                {cart.length === 0 ? (
                    <p >No items added.</p>
                ) : (
                    <ul className="list-group">
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                className="list-group-item d-flex justify-content-between align-items-center fs-5"
                            >
                                <span>{item.title}</span>
                                <div className="d-flex  gap-2 ">
                                    <button
                                        className="btn btn-sm btn-secondary ms-2 quantity-btn"
                                        onClick={() => updateQuantity(item.id, item.qty - 1)}
                                    >
                                        -
                                    </button>
                                    <span className="fw-bold">{item.qty}</span>
                                    <button
                                        className="btn btn-sm btn-secondary ms-2 quantity-btn"
                                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="fs-5">₹{item.price * item.qty}</span>
                                <button
                                    className="btn btn-sm btn-danger ms-3 fs-5"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                <h4 className="mt-3 text-white">Total: ₹{totalPrice}</h4>
                {cart.length > 0 && (
                    <button className="btn btn-success mb-4 fs-5" onClick={buyNow}>
                        Buy Now
                    </button>
                )}
            </div>
        </div>
    );


}
