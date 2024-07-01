import { useState } from "react"

export default function useCounter({initValue = 0}) {

    const [counter, setCounter] = useState(initValue)

    const incrementCounter = (val = 1) => {
        setCounter(prev => prev + val)
    }

    const resetCounter = () => {
        setCounter(initValue)
    }

    const decrementCounter = (val = 1, allowNegatives = true) => {
        if (!allowNegatives && counter - val <= 0) resetCounter()
        else setCounter(prev => prev - val)
    }

    return {
        counter,
        incrementCounter,
        resetCounter,
        decrementCounter,
    }
}