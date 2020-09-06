import React from "react";

const Person = ({person, handleDelete, color}) => {
    return (
        <p>{person.name} {person.number} <button type="submit" onClick={() => {handleDelete(person.id)}}>Delete</button></p>
    )
}

export default Person;