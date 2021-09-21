//styles
import './App.css';

//components
import Card from '../components/hotelCard/HotelCard';
import SelectBar from '../components/selectBar/SelectBar';
import Header from '../components/header/Header';
import NotAvailable from '../components/notAvailable/NotAvailable';

//Others
import hotelsData from '../db/data'
import { useState } from 'react';


function App(props) {

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [country, setCountry] = useState('Cualquier País');
  const [price, setPrice] = useState('Cualquier Precio');
  const [size, setSize] = useState('Cualquier Tamaño');
  const [hotels, setHotels] = useState(hotelsData);
  //main page filter
  const allFilters = (country, price, size, checkIn, checkOut) => {
    const filterHotels = hotelsData.filter((hotel) => {
      return (countryFilter(country, hotel) &&
        priceFilter(price, hotel) &&
        sizeFilter(size, hotel) &&
        dateFilter(checkIn, checkOut, hotel)
      )
    });
    setHotels(filterHotels)
  }
/*function that filters hotels that are available between
the selected dates*/ 
  const dateFilter = (checkInSelected, checkOutSelected, hotel) => {
    if ((new Date(checkInSelected).setHours(0, 0, 0, 0).valueOf() >= hotel.availabilityFrom &&
      new Date(checkOutSelected).setHours(0, 0, 0, 0).valueOf() <= hotel.availabilityTo) ||
      (checkOut === null &&
        checkIn === null)) {
      return true
    };
  }
/*function that filters hotels that are in the country selected */
  const countryFilter = (countrySelected, hotel) => {
    if (countrySelected === 'Cualquier País') {
      return true
    } else {
      return hotel.country.toUpperCase() === countrySelected.toUpperCase()
    }
  }
/*function that filters hotels that have the price selected */
  const priceFilter = (priceSelected, hotel) => {
    if (priceSelected === "$") {
      return hotel.price === 1
    } else if (priceSelected === "$$") {
      return hotel.price === 2
    } else if (priceSelected === "$$$") {
      return hotel.price === 3
    } else if (priceSelected === "$$$$") {
      return hotel.price === 4
    } else {
      return true
    }
  }
/*function that filters the hotels that match the selected size */
  const sizeFilter = (sizeSelected, hotel) => {
    if (sizeSelected === "Tamaño Pequeño") {
      return hotel.rooms <= 10
    } else if (sizeSelected === "Tamaño Mediano") {
      return hotel.rooms > 10 && hotel.rooms <= 20
    } else if (sizeSelected === "Tamaño Grande") {
      return hotel.rooms > 20
    } else {
      return true
    }
  }
/* below all the new states every time the user change them */
  const onChangeCountry = (countrySelected) => {
    setCountry(countrySelected);
    allFilters(countrySelected, price, size, checkIn, checkOut)
  }

  const onChangePrice = (priceSelected) => {
    setPrice(priceSelected);
    allFilters(country, priceSelected, size, checkIn, checkOut)
  }

  const onChangeSize = (sizeSelected) => {
    setSize(sizeSelected);
    allFilters(country, price, sizeSelected, checkIn, checkOut)
  }

  const checkInDate = (checkInSelected) => {
    setCheckIn(checkInSelected);
    allFilters(country, price, size, checkInSelected, checkOut)
  }

  const checkOutDate = (checkOutSelected) => {
    setCheckOut(checkOutSelected);
    allFilters(country, price, size, checkIn, checkOutSelected)
  }
/*function that resets all the filters and bring them to the inicial state */
  const resetSelects = () => {
    setCountry('Cualquier País');
    setPrice('Cualquier Precio');
    setSize('Cualquier Tamaño');
    setCheckIn(null);
    setCheckOut(null);
    setHotels(hotelsData)
  }

  return (
    <div className="app">
      <Header country={country} price={price} size={size} checkIn={checkIn} checkOut={checkOut} />
      <SelectBar
        country={country}
        price={price}
        size={size}
        onChangeCountry={onChangeCountry}
        onChangePrice={onChangePrice}
        onChangeSize={onChangeSize}
        resetSelects={resetSelects}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        checkIn={checkIn}
        checkOut={checkOut}
      />
      <main>
        {/* the next function inform the user if there is a date misssing 
        to select, doesn´t allowed the useer to select a check-in date
        after the check out date and also informs that there are not hotels available
        with the filters selected */}
        {checkIn && !checkOut ?
          <div>Por favor seleccione fecha de salida :)</div> :
          !checkIn && checkOut ?
            <div>Por favor seleccione fecha de ingreso :)</div> :
            checkIn > checkOut ?
            <div>La feha de salida debe ser posterior a la fecha de ingreso :)</div>:
            hotels.length === 0 ? <NotAvailable /> :
              hotels.map((item) => {
                return <Card
                  key={item.id}
                  photo={item.photo}
                  name={item.name}
                  availabilityFrom={item.availabilityFrom}
                  availabilityTo={item.availabilityTo}
                  description={item.description}
                  city={item.city}
                  country={item.country}
                  rooms={item.rooms}
                  price={item.price}
                />
              }
              )}
      </main>
      <footer></footer>
    </div>
  );
}
export default App;
