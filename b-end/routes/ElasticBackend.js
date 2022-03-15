import express from "express"
import axios from "axios"

const router = express.Router()

const callElastic = async () => {
    const response = await axios.get('http://localhost:9200/todos/task/_search?q=*:*&size=30')
    const hitsArray = response.data.hits.hits
    const mappedDataFromElastic = hitsArray.map((data) => data._source)
    return mappedDataFromElastic
}

router.get('/', async (req, res) => {
    const dataFromElastic = await callElastic()
    res.json(dataFromElastic)
})

router.route('/:id')
    .post(async (req, res) => {
        const { id } = req.params
        await axios.post(`http://localhost:9200/todos/task/${id}`, req.body)
        res.send(`todo with id ${id} added`)
    })
    .delete(async (req, res) => {
        const { id } = req.params
        await axios.delete(`http://localhost:9200/todos/task/${id}`)
        res.send(`todo with id ${id} deleted`)
    })

export default router