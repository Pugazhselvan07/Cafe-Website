import { FaWifi, FaCouch, FaTree, FaSnowflake, FaMusic, FaDog, FaPlug, FaBook, FaWheelchair, FaMugHot , FaShoppingBag } from "react-icons/fa";

import '../components/Service.css';
import bgimage from "../assets/serviceimg.jpg";

function Facilities() {
  const facilities = [
    { id: 1, title: "Cozy Ambience", icon: <FaMugHot size={30} /> },
    { id: 2, title: "Free Wi-Fi", icon: <FaWifi size={30} /> },
    { id: 3, title: "Comfortable Seating", icon: <FaCouch size={30} /> },
    { id: 4, title: "Outdoor Patio", icon: <FaTree size={30} /> },
    { id: 5, title: "Air Conditioning", icon: <FaSnowflake size={30} /> },
    { id: 6, title: "Live Music Nights", icon: <FaMusic size={30} /> },
    { id: 7, title: "Pet-Friendly Area", icon: <FaDog size={30} /> },
    { id: 8, title: "Charging Points", icon: <FaPlug size={30} /> },
    { id: 9, title: "Books & Magazines", icon: <FaBook size={30} /> },
    { id: 10, title: "Wheelchair Accessible", icon: <FaWheelchair size={30} /> },
    { id: 11, title: "Custamized Coffee", icon:  <FaMugHot size={30} /> },
    { id: 12, title: " Takeaway", icon: <FaShoppingBag size={30} /> }
  ];    

  return (
    <section className="py-5 service-page mt-5 " 
    style={{ backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",}}>
      <h2 className="text-center mb-4 text-decoration-underline text-white" >Our Facilities</h2>
      <div className="row mx-5 gy-3 text-center">
        {facilities.map((facility) => (
          <div key={facility.id} className="col-md-4 mb-3">
            <div className="card bg-white text-dark p-3 rounded shadow-sm h-100 border border-light">
              <div className="mb-2">{facility.icon}</div>
              <h5>{facility.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Facilities;
