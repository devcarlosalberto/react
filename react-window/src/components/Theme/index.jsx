import { memo } from "react"

function Theme({ theme }) {
    return (
        <>
            <div className="squad border-red">
                <p>Theme: {theme}</p>
                <span>Re-render {(Math.random() * 100).toFixed(0)}</span>
            </div>
        </>
    )
}

export default memo(Theme)
