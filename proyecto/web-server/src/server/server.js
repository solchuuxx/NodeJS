//const express = require('express')
import express from 'express'

import path from 'path'

export const startServer = (options) => {
    const { port, publicPath = 'public'} = options

    const app = express()

    app.use(express.static(publicPath))

    app.get('*',(req, res) => {
        const indexPath = path.join(__dirname + `../../../${publicPath}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })
}   
