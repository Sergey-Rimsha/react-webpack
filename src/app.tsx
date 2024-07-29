import './app.scss'
import {Counter} from "./components/counter/counter";

export const App = () => {
    return (
        <div className={'app'}>
            <div>Hello react</div>
            <Counter/>
        </div>
    )
}