import './Input.css'

function Input(props) {
    return (
        <div id="input-container">
            <label>{props.name}</label>
            <input type="text" />
        </div>
    )
};

export default Input
