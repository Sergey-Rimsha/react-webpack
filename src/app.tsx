import {useState} from "react";
import './app.scss'

export const App = () => {

    const [counter, setCounter] = useState(0)

    return (
        <>
            <div>Hello react</div>
            <div>
                <h3>{counter}</h3>
                <button onClick={() => setCounter(prevState => ++prevState)}>click</button>
            </div>
        </>
    )
}