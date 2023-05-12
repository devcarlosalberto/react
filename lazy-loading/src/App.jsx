import { lazy, Suspense } from "react"

const HeavyComponent = lazy(() => import("./components/HeavyComponent"))

function App() {
    return (
        <div>
            <h1>Dashboard</h1>
            <Suspense fallback={"Loading..."}>
                <HeavyComponent />
            </Suspense>
        </div>
    )
}

export default App
