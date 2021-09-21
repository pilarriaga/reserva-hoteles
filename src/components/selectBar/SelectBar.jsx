//styles
import './SelectBar.css';
//components
import Select from '../select/Select';
import ResetButton from '../resetButton/ResetButton';
import BookingDate from '../bookingDate/BookingDate';


const countries = ["Cualquier País", "Argentina", "Chile", "Uruguay", "Brasil"]
const prices = ["Cualquier Precio", "$", "$$", "$$$", "$$$$"]
const sizes = ["Cualquier Tamaño", "Tamaño Pequeño", "Tamaño Mediano", "Tamaño Grande"]

function SelectBar(props) {
  const {onChangeCountry, onChangePrice, onChangeSize, country, price, size, resetSelects, checkInDate, checkOutDate, checkIn, checkOut } = props;
  return (
      <div className="select-bar">
        <div className ="date-select">
          <span>Desde</span>
          <BookingDate id="checkIn" onChangeDate = {(newValue) => 
            checkInDate (newValue)} value = {checkIn}/>
        </div>
        <div className ="date-select">
          <span>Hasta</span>
          <BookingDate id="checkOut" onChangeDate = {(newValue) => 
            checkOutDate (newValue)} value = {checkOut}/>
        </div>
        <Select list={countries} onChangeValue={(newValue) => onChangeCountry(newValue)} value={country} />
        <Select list={prices} onChangeValue={(newValue) => onChangePrice(newValue)} value={price} />
        <Select list={sizes} onChangeValue={(newValue) => onChangeSize(newValue)} value={size} />
        <ResetButton text="Limpiar" resetSelects = { resetSelects } />
      </div>
  )
};

export default SelectBar;