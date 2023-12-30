import ListGroup from "./components/ListGroup";

function App() {
    let items = ["A", "B", "C", "D"];
    return (
        <div>
            <ListGroup items={items} heading="List Wow" />
        </div>
    );
}

export default App;
