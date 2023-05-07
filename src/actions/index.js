import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    RESET,
} from '../types';



export const countIncrement = () => ({type:INCREMENT_COUNT})
export const countDecrement = () => ({type:DECREMENT_COUNT})
export const resetCount = () => ({type:RESET})