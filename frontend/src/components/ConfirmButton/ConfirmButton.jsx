import './ConfirmButton.css'

function ConfirmButton(props) {
    return (
        <button type={props.type} onClick={props.func}>{props.text}</button>
    )
}

export default ConfirmButton
