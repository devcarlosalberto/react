import { memo } from "react"
import "./index.css"

function Counter({ count, increaseCount }) {
    return (
        <div className="squad-blue">
            <p>Counter: {count}</p>
            <span>Re-render {(Math.random() * 100).toFixed(0)}</span>
            <button className="btn bg-blue" onClick={increaseCount}>
                Increase Count
            </button>
        </div>
    )
}

export default memo(Counter)
