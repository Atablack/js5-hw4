import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { types } from "../redux/types"
import { sumAction, diffAction, divisinAction, multiAction } from "../redux/actions"



export default function Calculator() {

    const dispatch = useDispatch()

    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')

    const {result} = useSelector(state => state.calculatorReducer)

    const sumFn = () => {
        dispatch(sumAction(value, value2))
        if (value === '') {
            return alert('write any number');
        } else if (value2 === '') {
            return alert('write any number')
        }
    }

    const diffFn = () => {
        dispatch(diffAction(value, value2))
        if (value === '') {
            return alert('write any number');
        } else if (value2 === '') {
            return alert('write any number')
        }
    }

    const multiFn = () => {
        dispatch(multiAction(value, value2))
        if (value === '') {
            return alert('write any number');
        } else if (value2 === '') {
            return alert('write any number')
        }
    }

    const divisinFn = () => {
        dispatch(divisinAction(value, value2))
        if (value === '') {
            return alert('write any number');
        } else if (value2 === '') {
            return alert('write any number')
        }
    }

    return (
        <div>
            <input type="number" onChange={(e) => setValue(e.target.value)}/>
            <input type="number" onChange={(e) => setValue2(e.target.value)}/> 
            <button onClick={sumFn}>+</button>
            <button onClick={diffFn}>-</button>
            <button onClick={multiFn}>*</button>
            <button onClick={divisinFn}>/</button>
            <span>{result}</span>
        </div>
    )
}