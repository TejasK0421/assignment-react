import {createStore} from 'redux'
import rootReducer from './reducer/index'
import {configureStore} from '@reduxjs/toolkit'
import getImages  from './features/ImagesSlice'
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const storeDefault = configureStore({
    reducer:{
        app:getImages
    }
})

export default store
export {storeDefault}