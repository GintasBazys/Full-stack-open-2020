import React from "react";
import Part from "./Part"

const Parts = ({parts}) => {
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part} />
                )}
        </div>
    )
}

export default Parts;