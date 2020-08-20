import React from "react";
import Parts from "./Parts";

const Content = ({course}) => {
    return (
        <div>
            <Parts parts={course.parts}/>
        </div>
    )
}

export default Content;