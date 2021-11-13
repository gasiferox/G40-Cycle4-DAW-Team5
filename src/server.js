const PORT = 7500
const express = require('express')
const app = express()
const colors = require('colors')
const mongoose = require('mongoose')

// DB Connection
const connnectionString = 'mongodb+srv://team5:team5.1234@clusterteam5.dix94.mongodb.net/inmobiliaria?retryWrites=true&w=majority'
mongoose.connect(connnectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log(colors.yellow("mongodb connected"))
}).catch((err) => {
    console.log(color.red("mongodb not connected"))
    console.log(err)
})

// Routes
const router = express.Router()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// index.html invoke
const fs = require('fs')
const path = require('path')
const html_content_type = 'text/html'
app.use(express.static('public'))

router.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': html_content_type})
    fs.createReadStream('./src/index.html').pipe(res)
})

// Schema Imports
const UsuarioSchema = require('./models/usuario')


// CRUD
router.get('/', (req, res) => {
    res.send("API en primera versión")
})

router.get('/user', (req, res) => {
    UsuarioSchema.find((err, data) => {
        if(err) {
            console.log(colors.red("Error al leer los usuarios"))
            console.log(err)
        }else {
            res.send(data)
        }
    })
})

router.post('/user', (req, res) => {
    let nuevoUsuario = new UsuarioSchema({
        idUsuario: req.body.id,
        nombreUsuario: req.body.nombre,
        apellidoUsuario: req.body.apellido,
        documentoUsuario: req.body.documento,
        telefonoUsuario: req.body.telefono,
        emailUsuario: req.body.email
    })

    nuevoUsuario.save((err, data) => {
        if(err) {
            console.log(colors.red("Error al grabar los datos"))
            console.log(err)
        }
        res.send(colors.yellow("Usuario almacenado correctamente"))
    })
})

/* router.put('/user/:userId', (req, res) => {
    let usuarioEncontrado = req.body.id
}) */

router.delete('/user/:userId', (req, res) => {
    UsuarioSchema.remove({'_userId': req.params.userId})
    res.redirect('/user')
})


// Server launch
app.use(router)
app.listen(PORT, () => {
    console.log(colors.rainbow("Server running on port " + PORT))
})