import React, { useState } from 'react'

const Todo = ({ id, input, status, changeFunc, deleteFunc }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(input)

    return (
        <div>
            <input type="checkbox" checked={status} onChange={(e) => changeFunc({ id: id, status: e.target.checked })} />
            {
                isEditing ? (
                    <>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                        <button onClick={() => { setIsEditing(false); changeFunc({ id: id, input: text }) }} >Save</button>
                    </>
                ) : (
                    <>
                        <span>{input}</span>
                        <button onClick={() => setIsEditing(true)} >Edit</button>
                    </>
                )
            }
            <button onClick={() => deleteFunc(id)} >Delete</button>
        </div>
    )
}

export default Todo