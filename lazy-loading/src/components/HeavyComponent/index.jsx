function HeavyComponent() {
    const items = []
    for (let i = 0; i < 100; i++) {
        items.push(<li key={i}>Item {i}</li>)
    }

    // Simulate complex rendering logic
    const complexMarkup = []
    for (let i = 0; i < 1000; i++) {
        complexMarkup.push(<div key={i}>{items}</div>)
    }

    return <div>{complexMarkup}</div>
}

export default HeavyComponent
