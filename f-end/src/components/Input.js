import React, { useState } from 'react'

const Input = ({ addFunc }) => {
    const [text, setText] = useState('')
    return (
        <form onSubmit={(e) => e.preventDefault()} >
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => { addFunc(text); setText('') }} >Add</button>
        </form>
    )
}

export default Input