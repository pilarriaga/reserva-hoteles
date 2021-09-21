import './BookingDate.css';
//component that give us the date selected by the user
function BookingDate (props) {
    const {id, onChangeDate, value} = props
    const handleBookingDate = (event) => {
        onChangeDate(event.target.value);
    }
    return (
    <input type= "Date" onChange = {handleBookingDate} id = {id} value= {value || ''} />
    )
}

export default BookingDate;