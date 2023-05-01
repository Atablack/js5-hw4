import { types } from "./types"


export function sumAction (f, s) {
    return {
        type: types.CALC,
        payload: Number(f) + Number(s)
    }
}

export function diffAction (f, s) {
    return {
        type: types.CALC,
        payload: f - s
    }
}

export function multiAction (f, s) {
    return {
        type: types.CALC,
        payload: f * s
    }
}

export function divisinAction (f, s) {
    return {
        type: types.CALC,
        payload: f / s
    }
}