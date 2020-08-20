import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({course}) => {
    return (
        <div>
            {
                course.map(element => {

                    return <li key={element.id}>
                        <Header course={element} />
                        <Content course={element}/>
                        <Total parts={element.parts} />
                    </li>


                })
            }


        </div>
    )
}

export default Course;