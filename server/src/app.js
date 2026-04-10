const express = require('express');
const authRouters = require('./routes/auth.routes');

const app = express();
app.use(express.json());

app.use("/api/auth", authRouters)


// app.post("/test", (req, res) => {
//     const { name } = req.body;
//     res.json({ message: `Hello, ${name}!` });
// })



module.exports = app;