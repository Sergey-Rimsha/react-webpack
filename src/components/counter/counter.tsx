import {useState} from "react";

import s from './counter.module.scss';

export const Counter = ( ) => {
    const [counter, setCounter] = useState(0)

    return (
        <div className={s.counter}>
            <h3>{counter}</h3>
            <button className={s.button} onClick={() => setCounter(prevState => ++prevState)}>click</button>
        </div>
    )
}