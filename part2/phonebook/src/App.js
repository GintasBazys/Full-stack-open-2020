import React, {useState} from 'react';
import './App.css';
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [search, setSearch] = useState("")

    const addPerson = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber
        }
        const person = persons.find(person => person.name === newName)
        if(person !== undefined) {
            alert(`${person.name} is already added to phonebook`)
        } else {
            setPersons(persons.concat(nameObject))
        }

        setNewName("")
        setNewNumber("")
    }

    const handleContact = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilter = (event) => {
        setSearch(event.target.value)
    }

    const filteredPeopleByName = persons.filter(person => {
        return person.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <div>
                <h2>Phonebook</h2>
                <Filter value={search} handleFilter={handleFilter} />
            </div>
            <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handleContact={handleContact} handlePhoneNumber={handlePhoneNumber} />
            <h2>Numbers</h2>
            <Persons persons={filteredPeopleByName}/>
        </div>
    )
}

export default App;
