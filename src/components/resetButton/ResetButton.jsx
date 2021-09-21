import './ResetButton.css';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

//button that clears all the filters appllied

function ResetButton (props) {
    const {text, resetSelects} = props
    const handleReset = () => {
        resetSelects();
    }
    return (
    <button onClick = {handleReset}><FontAwesomeIcon icon= {faTrash}/>   {text}</button>
    )
}

export default ResetButton;