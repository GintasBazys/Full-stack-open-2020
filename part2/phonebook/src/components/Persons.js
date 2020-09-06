import React from "react";
import Person from "./Person";
import personsService from "../services/numbers";

const Persons = ({persons, setPersons, setMessage}) => {

    const handleDelete = (id) => {


        const person = persons.find(p => p.id === id)
        if(window.confirm(`Delete ${person.name}?`)) {
            personsService.remove(id)
                .then(() => {
                    setPersons(persons.filter(p => p.id !== person.id))
                    setMessage(`Deleted ${person.name}`)
                    setTimeout(() => {
                        setMessage("")
                    }, 3000)
                }).catch(error => {
                    setMessage(`Information of ${person.name} has already been removed`)
            })
        }
    }

    return (
            <div>
                {persons.map(person =>
                    <Person key={person.name} person={person} handleDelete={() =>handleDelete(person.id)}/>
                )}
            </div>
        )

}

export default Persons;