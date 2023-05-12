import { useState, useMemo } from "react"
import { FixedSizeList } from "react-window"
import Theme from "./components/Theme"
import "./App.css"

// Simulate large array
const products = []
for (let i = 1; i < 1000000; i++) {
    products.push({ id: i, name: `Produto ${i}` })
}

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

    const renderRow = ({ index, style }) => {
        const product = filteredProducts[index]

        return (
            <div key={product.id} style={style}>
                {product.name}
            </div>
        )
    }

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
                <FixedSizeList
                    height={400}
                    width={"100%"}
                    itemCount={filteredProducts.length}
                    itemSize={20}
                >
                    {renderRow}
                </FixedSizeList>
            </div>
        </>
    )
}

export default App
