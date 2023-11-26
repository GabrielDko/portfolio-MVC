const express = require("express");

const app = express();


const path = require("path")

const PORT = 3000

const mainRoutes = require("./routes/mainRoutes")

app.use(express.static(path.join(__dirname, "public")))
app.listen(PORT, ()=> console.log(`Servidor arrancado en el puerto ${PORT}`))

app.use("/", mainRoutes)