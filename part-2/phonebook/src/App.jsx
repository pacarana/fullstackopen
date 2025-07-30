import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() === '') return;

    const nameAlreadyExists = persons.some((person) => person.name === newName);
    if (nameAlreadyExists) {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    setPersons([...persons, {name: newName, number: newNumber}]);
    setNewName('');
    setNewNumber('');
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  }
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            name: <input value={newName} onChange={handleChangeName} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleChangeNumber} />
          </div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons && persons.map((person, key) => (
        <p key={key}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App