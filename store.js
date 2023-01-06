const { createStore } = require('redux')
const combineReducer = require('redux').combineReducers
const cakeReducer = require('./cakes/cake')
const iceCreamReducer = require('./iceCream/iceCream')
const reduxLogger = require('redux-logger')
const { applyMiddleware } = require('redux')
const logger = reduxLogger.createLogger()


const rootReducers = combineReducer({ 
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store = createStore(rootReducers,applyMiddleware(logger))

module.exports = store