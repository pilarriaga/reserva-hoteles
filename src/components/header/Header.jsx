import './Header.css';

import DateButton from '../date/DateButton';


function Header(props) {
    const {country, size, price, checkIn, checkOut} = props
    /* function that shows a diferent text than the text in the selected button */
    const hotelPrice = (price) => {
        if (price === '$') {
            return 'Económico'        
        } else if (price === '$$') {
            return 'Confort'
        } else if (price === '$$$') {
            return 'Lujos'
        } else if (price === '$$$$') {
            return 'Magnífico'
        } else {
            return 'Cualquier precio'
        };
    };
    return(
        <div className="header">
            <h1>Hoteles</h1>
            <div>Desde {DateButton(checkIn)}</div>
            <div>Hasta {DateButton(checkOut)}</div>
            <div>En {country}</div>
            <div>{hotelPrice(price)}</div>
            <div>De {size}</div>
        </div>
    )
};

export default Header;