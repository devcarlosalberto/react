import { memo } from "react"
import "./index.css"

function Counter({ count }) {
    return (
        <div className="squad-blue">
            <p>Counter: {count}</p>
            <span>Re-render {(Math.random() * 100).toFixed(0)}</span>
        </div>
    )
}

export default memo(Counter)
