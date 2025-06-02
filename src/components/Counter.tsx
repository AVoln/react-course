import { useState } from "react"
import classes from "./Counter.module.scss"

export const Counter = () => {
const [count, setCount] = useState(0)

const increment = () => {
    return setCount(count + 1)
}

    return (
        <div>
            <h1>{count}</h1>
            <button  className={classes.btn} onClick={increment}>Плюс 1</button>
        </div>
    )
}