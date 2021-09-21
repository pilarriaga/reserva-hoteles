import './Select.css';
/*  function that captures from the "hotels data" different parameters
to create the select button with the correspondant option */
function Select(props) {
    const {list, onChangeValue, value} = props;
    const handleNewValue = (event) => {
        onChangeValue(event.target.value);
    }
    return (
    <select value={value} onChange={handleNewValue}>
        { list.map((option, index) => <option key={index} value={option}>{option}</option>) }
    </select>
    )
}
export default Select;