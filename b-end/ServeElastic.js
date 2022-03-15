import express from "express";
import cors from "cors"
import router from "./routes/ElasticBackend.js";

const app = express()
const port = 2000
const toParseBody = express.json()


app.use(toParseBody)
app.use(cors())

app.use('/backend', router)


app.listen(port, () => {
    console.log(`Serving @ port ${port}`);
})