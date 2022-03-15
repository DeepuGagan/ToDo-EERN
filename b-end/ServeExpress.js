import express from "express";
import cors from "cors"
import data from "./Data-DB.js";

const app = express()
const port = 1000
const toParseBody = express.json()


app.use(toParseBody)
app.use(cors())


app.get('/backend', (req, res) => {
    res.json(data)
})

app.get('/backend/:id', (req, res) => {
    const { id } = req.params
    let index = data.findIndex((f) => f.id === Number.parseInt(id))
    if (index >= 0) res.json(data[index])
    else {
        res.status(404)
        res.end()
    }
})

app.post('/backend/:id', (req, res) => {
    const { id, input, status } = req.body
    const objectToPush = { id: id, input: input, status: status }
    data.push(objectToPush)
    res.json(objectToPush)
})

app.put('/backend/:id', (req, res) => {
    const { id } = req.params
    const { input, status } = req.body
    let index = data.findIndex((f) => f.id === Number.parseInt(id))
    if (index >= 0) {
        let objectFromData = data[index]
        objectFromData.input = input
        objectFromData.status = status
        res.json(objectFromData)
    } else {
        res.status(404)
        res.end()
    }
})
app.delete('/backend/:id', (req, res) => {
    const { id } = req.params
    let index = data.findIndex((f) => f.id === Number.parseInt(id))
    if (index >= 0) {
        data.splice(index, 1)
        res.send(`Deleted todo with id ${id}`)
    } else {
        res.status(404)
        res.end()
    }
})

app.listen(port, () => {
    console.log(`Serving @ port ${port}`)
})