import { memo } from "react"
import "./index.css"

function Theme({ theme, toggleTheme }) {
    return (
        <div className="squad-red">
            <p>Theme: {theme}</p>
            <span>Re-render {(Math.random() * 100).toFixed(0)}</span>
            <button className="btn bg-red" onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    )
}

export default memo(Theme)
