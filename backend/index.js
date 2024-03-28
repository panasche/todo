const express = require('express')
const { createTodo } = require('./types')
const app = express()

app.use(express.json())

/*
body {
    title: string,
    description: string
}
*/
app.post("/todo", (req, res) => {
})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {

})