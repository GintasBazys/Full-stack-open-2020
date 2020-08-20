import React from "react";

const Total = ({parts}) => {
    return (
        <p>Number of exercises {parts.reduce((accumulator, exercise) =>{
            return accumulator + exercise.exercises
        }, 0)}</p>
    )
}

export default Total;