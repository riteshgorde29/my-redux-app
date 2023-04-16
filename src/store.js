import {configureStore}from '@reduxjs/toolkit'
import appReducer from './appReduser'
import {logger} from 'redux-logger'

const appstore=configureStore({
    reducer:{
        appReducer
    },
    middleware:[logger]
})
export default appstore 