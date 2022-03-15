import React, { useState } from 'react'

const Input = ({ addFunc }) => {
    const [text, setText] = useState('')
    return (
        <form onSubmit={(e) => e.preventDefault()} >
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add your task here.." />
            <button onClick={() => { addFunc(text); setText('') }} ><b>+</b></button>
        </form>
    )
}

export default Input