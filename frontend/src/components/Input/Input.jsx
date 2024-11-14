import { useState } from 'react'
import './Input.css'

function Input(props) {
    const [text, setText] = useState('');

    function handleTextChange(event) {
        setText(event.target.value);
    }

    return (
        <div id="input-container">
            <label className={text !== '' ? 'has-text' : ''}>{props.name}</label>
            <input type={props.type} text={text} onChange={handleTextChange} />
        </div>
    )
};

export default Input
