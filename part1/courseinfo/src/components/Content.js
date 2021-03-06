import React from "react";
import Part from "./Part";

const Content = ({parts}) => {
    return (
        <div>
            {parts.map((part, index) => {
                return <Part key={index} part={parts[index]} />
            })}
        </div>
    )
}

export default Content;