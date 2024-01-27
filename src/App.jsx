import ListGroup from "./components/ListGroup";
import DataFetcher from "./components/DataFetcher";

function App() {
    let items = ["A", "B", "C", "D"];
    return (
        <>
            <ListGroup items={items} heading="List Wow" />
            <DataFetcher />
        </>
    );
}

export default App;
