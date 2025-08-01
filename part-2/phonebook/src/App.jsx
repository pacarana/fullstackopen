import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('');
  
  const handleFilter = (filterValue) => {
    if (!filterValue) return persons;

    return persons.filter(person => {
      const nameMatched = person.name.toLowerCase().includes(filterValue.toLowerCase());
      return nameMatched;
    })
  }
  
  const filteredPersonsByName = handleFilter(filterValue)

  const handleFilterInputChange = (e) => {
    setFilterValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() === '') return;

    const nameAlreadyExists = persons.some((person) => person.name === newName);
    if (nameAlreadyExists) {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    setPersons([...persons, {name: newName, number: newNumber, id: persons.length + 1}]);
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
      <input type="text" value={filterValue} onChange={handleFilterInputChange} />
      <form onSubmit={handleSubmit}>
        <div>
          <h2>add a new</h2>
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
      {filteredPersonsByName && filteredPersonsByName.map((person, key) => (
        <p key={key}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App