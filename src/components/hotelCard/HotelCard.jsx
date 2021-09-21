//sytles
import './HotelCard.css';
//components
import DateButton from '../date/DateButton';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'


function Card(props) {
    const {photo, name, availabilityFrom, availabilityTo, description, city, country,rooms, price} = props;
    return (
        <div className="card">
            <img src={photo.default} alt="imágen del hotel"></img>
            <div className="information">
                <h2>{name}</h2>
                <div className = "green-button">Desde {DateButton(availabilityFrom)}</div>
                <div className = "green-button">Hasta {DateButton(availabilityTo)}</div>
                <p className = "scroll-bar">{description}</p>
                <div className= "shadow">
                    <div className= "icon"><FontAwesomeIcon icon={faMapMarkerAlt}/></div>
                    <div>{city}, {country}</div>
                </div>
                <div className = "container">
                    <div className= "rooms shadow">
                        <div className= "icon"><FontAwesomeIcon icon={faBed}/></div>
                        <div>{rooms} habitaciones</div>
                    </div>
                    <div className= "price shadow">
                        {/* function that shows diferent color $ signs depending on the hotel price */}
                        { price === 1 ? 
                            <div className = "price-flex">
                                <div className= "icon primary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon secondary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon secondary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon secondary"><FontAwesomeIcon icon={faDollarSign}/></div>
                            </div> :
                            price === 2 ? 
                            <div className = "price-flex">
                                <div className= "icon primary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon primary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon secondary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon secondary"><FontAwesomeIcon icon={faDollarSign}/></div>
                            </div> :
                            price=== 3 ?
                            <div className = "price-flex">
                                <div className= "icon primary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon primary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon primary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon secondary"><FontAwesomeIcon icon={faDollarSign}/></div>
                            </div> :
                            <div className = "price-flex">
                                <div className= "icon primary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon primary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon primary"><FontAwesomeIcon icon={faDollarSign}/></div>
                                <div className= "icon primary"><FontAwesomeIcon icon={faDollarSign}/></div>
                            </div>
                        }
                        
                    </div>
                </div>
                <button className= "green-button reserve">Reservar </button>
            </div>
        </div>
    );
};

export default Card;
