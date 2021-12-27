"use strict"

init()

import express from "express"
import { init } from "./initializer.js"
import app from "./app-server.js"

var server = express()
server.use(app)
server.use(express.static("docs"))
var port = process.env.PORT || 3000
console.log("Server is now rnning on port:" + port)

server.listen(port)
