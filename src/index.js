import 'dotenv/config'
import express from 'express'

const app = express()

app.get('/', (req, res) => res.status(200).json({ message: 'Hello' }))

app.listen(process.env.APP_PORT, () =>
  console.log(
    `App is running on http://${process.env.APP_URL}:${process.env.APP_PORT}`,
  ),
)
