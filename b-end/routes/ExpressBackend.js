import express from "express";

import data from "../Data-DB.js";

const router = express.Router()


router.get('/', (req, res) => {
    res.json(data)
})


router.route('/:id')
    .get((req, res) => {
        const { id } = req.params
        let index = data.findIndex((f) => f.id === Number.parseInt(id))
        if (index >= 0) res.json(data[index])
        else {
            res.status(404)
            res.end()
        }
    })
    .post((req, res) => {
        const { id, input, status } = req.body
        const objectToPush = { id: id, input: input, status: status }
        data.push(objectToPush)
        res.json(objectToPush)
    })
    .put((req, res) => {
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
    .delete((req, res) => {
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


export default router