/* function to get the date as shown on the hotel card (natural language)*/
function DateButton (date){
    const day = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];
    const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    if (date!== null) {
        let actualDate = new Date (date)
        return `el ${day[actualDate.getDay()]}, ${actualDate.getDate()} de ${month[actualDate.getMonth()]} de ${actualDate.getFullYear()}`
    } else {return 'Cualquier Fecha '}
    

};

export default DateButton;