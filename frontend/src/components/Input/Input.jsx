import { useState } from 'react'
import './Input.css'

function Input(props) {
    return (
        <div id="input-container">
            <label className={props.value !== '' ? 'has-text' : ''}>
                {props.name}
            </label>
            <input type={props.type} onChange={props.function} />
        </div>
    )
};

export default Input
