import React, {useEffect, useState} from 'react';
import './index.css';
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import personService from "./services/numbers";
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [search, setSearch] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [color, setColor] = useState("green")

    useEffect(() => {
        personService.getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    },[])

    const addPerson = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber
        }
        const person = persons.find(person => person.name === newName)
        const phoneNumber = persons.find(person => person.number === newNumber)
        if(person !== undefined && phoneNumber !== undefined) {
            alert(`${person.name} is already added to phonebook`)
        } else if(phoneNumber === undefined && person !== undefined) {


            if(window.confirm(`${person.name} already exists. Replace phone number?`)){
                const changedPerson = {...person, number: newNumber}
                personService.update(person.id, changedPerson)
                    .then(updatedPerson => {
                        setPersons(persons.map(p => p.id !== person.id ? p : updatedPerson))
                        setErrorMessage(`Changed ${updatedPerson.name}'s phone number`)
                        setColor("green")
                        setTimeout(() => {
                            setErrorMessage("")
                            setColor("")
                        }, 2000)
                    })
                }
            }

        else{
            personService.add(nameObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setErrorMessage(`Added ${returnedPerson.name}`)
                    setColor("green")
                    setTimeout(() => {
                        setErrorMessage("")
                        setColor("")
                    }, 2000)
                })
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
                <Notification message={errorMessage} color={color} />
                <Filter value={search} handleFilter={handleFilter} />
            </div>
            <h1>add a new</h1>
            <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handleContact={handleContact} handlePhoneNumber={handlePhoneNumber} />
            <h2>Numbers</h2>
            <Persons persons={filteredPeopleByName} setPersons={setPersons} setMessage={setErrorMessage} />
        </div>
    )
}

export default App;
