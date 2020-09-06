import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.addPerson }>
            <div>
                name: <input value={props.newName} onChange={props.handleContact}/>
            </div>
            <div>
                number: <input value={props.newNumber} onChange={props.handlePhoneNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form;