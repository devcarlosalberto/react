import { useState, useMemo } from "react"
import Theme from "./components/Theme"
import "./App.css"

const products = [
    { id: "1", name: "iPhone 11" },
    { id: "2", name: "Samsung S20" },
    { id: "3", name: "Samsung A54" },
    { id: "4", name: "Samsung M53" },
    { id: "5", name: "Motorola G32" },
    { id: "6", name: "Motorola G52" },
    { id: "7", name: "Motorola Edge 30" },
    { id: "8", name: "Xiaomi Redmi 9A" },
    { id: "9", name: "iPhone 14" },
    { id: "10", name: "iPhone 12" },
    { id: "11", name: "iPhone 8 Plus" },
]

function App() {
    const [theme, setTheme] = useState("light")
    const [searchQuery, setSearchQuery] = useState("")

    const toggleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"))
    }

    const filteredProducts = useMemo(() => {
        console.log("Filtering products...")
        return products.filter((product) => {
            return product.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        })
    }, [searchQuery])

    return (
        <>
            <Theme theme={theme} />
            <button className="btn bg-red" onClick={toggleTheme}>
                Toggle Theme
            </button>

            <input
                type="text"
                placeholder="Filter products"
                className="border-blue"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="squad border-blue">
                <p>Products</p>
                {filteredProducts.map((product) => (
                    <span>{product.name}</span>
                ))}
            </div>
        </>
    )
}

export default App
