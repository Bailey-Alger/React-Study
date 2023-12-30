import { useState } from "react";

function ListGroupProp(props) {
    const { items, heading } = props;
}

function ListGroup(props) {
    const { items, heading } = props; // I am a genius

    // let items = ["A", "B", "C"];
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    //items = [];

    // if (items.length === 0)
    //     return (
    //         <>
    //             <h1>List</h1>
    //             <p>No item found</p>
    //         </>
    //     );

    // const handleClick = (event) => console.log("Clicked", event);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
// empty <> is a fragment
// key must be unique
// (true && 1) returns 1
export default ListGroup;
