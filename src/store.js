import {configureStore} from '@reduxjs/toolkit';
import todoreducer from './slice.js';


export const store = configureStore({
    reducer: {
        todos: todoreducer, },
    });

// export const store = configureStore({
//     reducer : todoreducer
// })

export default store;