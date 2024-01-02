import express from "express"

const app = express()
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
  next()
})
const port = 3000

app.get("/*", (req: express.Request, res) => {
  res.json({ message: "fake proxy!!", url: req.url, headers: req.headers })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
