import { useState } from "react";
import { useEffect } from "react";

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // pretend this is async
        async function fetch(url) {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            return ["list", "of", "usernames"];
        }
        async function fetchData() {
            try {
                const data = await fetch("some api");
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {data.map((item) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
}

export default DataFetcher;
