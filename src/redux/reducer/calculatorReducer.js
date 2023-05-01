import { types } from "../types"

const initialState = {
    result: 0
}

export default function calculatorReducer (state = initialState, action) {

    switch(action.type) {
        case types.CALC: 
            return {...state, result: action.payload}
        default: return state
    }

}