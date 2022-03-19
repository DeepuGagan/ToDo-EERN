import React, { useState ,useEffect } from 'react'
import axios from 'axios'

const SelectTodo = ({ todos }) => {
    const options = [{ id: 1, label: "Completed", value: "completed" }, { id: 2, label: "Not-Completed", value: "uncompleted" }]

    const [currentOption, setCurrentOption] = useState(options[1].value)
    const [receivedTodo, setReceivedTodo] = useState(todos)
    
    useEffect(() => {
        const backendData = async () => {
            const forTodos = await getBackend()
            setReceivedTodo((prev) => { prev = forTodos; return prev })
        }
        backendData()
    },[todos])

    const getBackend = async () => {
        const response = await axios.get('http://localhost:2000/backend')
        return response.data
    }

    console.log("render");
    return (
        <div>
            <label >select here</label>
            <select value={currentOption} onChange={(e) => setCurrentOption(e.target.value)} >
                {
                    options.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)
                }
            </select>
            {
                currentOption === "completed"
                    ?
                    receivedTodo.filter((f) => f.status).map((m) => <div key={m.id} >{m.input} ✔</div>)
                    :
                    receivedTodo.filter((f) => !f.status).map((m) => <div key={m.id} >{m.input} ❌</div>)
            }
        </div>
    )
}

export default SelectTodo