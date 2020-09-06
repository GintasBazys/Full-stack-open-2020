import React from "react";

const Filter = ({handleFilter, search}) => {
    return (
        <div>filter shown with <input value={search} onChange={handleFilter}/></div>
    )
}

export default Filter;