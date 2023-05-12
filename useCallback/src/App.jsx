import { useState, useCallback } from "react"
import Counter from "./components/Counter"
import Theme from "./components/Theme"
import "./App.css"

function App() {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState("light")

    const toggleTheme = useCallback(() => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"))
    }, [theme])

    const increaseCount = useCallback(() => {
        setCount((prevState) => prevState + 1)
    }, [count])

    return (
        <>
            <Counter count={count} increaseCount={increaseCount} />
            <Theme theme={theme} toggleTheme={toggleTheme} />
        </>
    )
}

export default App
