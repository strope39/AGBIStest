import React from "react";

type Props = {};

const AddToDo = (props: Props) => {
    return (
        <>
            <div>Add ToDo</div>
            <input type="text" placeholder="Enter Name"></input>
            <input type="text" placeholder="Enter description"></input>
            <button>Add</button>
        </>
    );
};

export default AddToDo;
