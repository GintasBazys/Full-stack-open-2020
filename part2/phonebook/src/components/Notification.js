import React from "react";

const Notification = ({ message, color }) => {

    if(color === "") {
        color = "red"
    }
 const error = {
        color: color,
        background: "lightgrey",
        fontSize: "20px",
        borderStyle: "solid",
        borderColor: color,
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px"
    }
    if (message === "") {
        return null
    }

    return (
        <div style={error}>
            {console.log(color)}
            {message}
        </div>
    )
}

export default Notification;