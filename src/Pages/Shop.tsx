import Card from '../components/Card';
import Image from '../assets/shop-heroimg.png';


const Shop: React.FC = () => {
    return (
        <div className='mt-5'>
        <div>
            <img
                src={Image}
                alt=""
                width='100%'
            ></img>
        </div>
        <Card />
        </div>

    );
}
export default Shop;