require('dotenv').config()
const { NODE_ENV } = require('./config')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bookmarksRouter = require('./bookmarks/bookmark-router')
const logger = require('./logger')
const BookmarksService = require('./bookmarks-service')

const app = express()

app.use(helmet())
app.use(cors())

// app.use(function validateBearerToken(req, res, next) {
//     const apiToken = process.env.API_TOKEN
//     console.log(apiToken)
//     const authToken = req.get('Authorization')

//     if (!authToken || authToken.split(' ')[1] !== apiToken) {
//         logger.error(`Unauthorized request to path: ${req.path}`);
//         return res.status(401).json({ error: 'Unauthorized request' })
//     }
//     next()
// })

app.use(bookmarksRouter)

app.get('/bookmarks', (req, res, next) => {
    const knexInstance = req.app.get('db')
    BookmarksService.getAllBookmarks(knexInstance)
        .then(bookmarks => {
            res.json(bookmarks)
        })
        .catch(next)
})

app.get('/bookmarks/:id', (req, res, next) => {
    console.log('bookmark id endpoint requested')
    const knexInstance = req.app.get('db')
    BookmarksService.getById(knexInstance, req.params.id)
        .then(bookmark => {
            if(!bookmark) {
                return res.status(404).json({
                    error: { message: `Bookmark with id ${req.params.id} does not exist.`}
                })
            }
            res.json(bookmark)
        })
        .catch(next)
})

app.use(function errorHandler(error, req, res, next) {
    let response
    if (process.env.NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app
