import { useState } from "react"
import Counter from "./components/Counter"
import Theme from "./components/Theme"
import "./App.css"

function App() {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"))
    }

    const increaseCount = () => setCount((prevState) => prevState + 1)

    return (
        <>
            <Counter count={count} />

            <Theme theme={theme} />

            <div className="buttons">
                <button className="btn bg-red" onClick={toggleTheme}>
                    Toggle Theme
                </button>
                <button className="btn bg-blue" onClick={increaseCount}>
                    Increase Count
                </button>
            </div>
        </>
    )
}

export default App
