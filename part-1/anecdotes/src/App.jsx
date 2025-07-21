import { useState, useEffect } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(8))
  const [mostVoted, setMostVoted] = useState({
    anecdote: null,
    votes: 0
  });

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const handleMostVoted = () => {
    let mostVotedObj = {
      anecdote: anecdotes[0],
      votes: votes[0]
    }

    for (let i = 0; i < votes.length; i++) {
      if (votes[i] >= mostVotedObj.votes) {
        mostVotedObj.anecdote = anecdotes[i];
        mostVotedObj.votes = votes[i];
      }
    }

    setMostVoted(mostVotedObj);
  }

  useEffect(() => {
    handleMostVoted();
  }, [votes]);

  return (
    <div>
      <section>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={() => {setSelected(Math.floor(Math.random() * 8))}}>next anecdote</button>
      </section>
        
      <section>
        <h1>Anecdote with most votes</h1>
        <p>{mostVoted.anecdote}</p>
        <p>had {mostVoted.votes} votes</p>
      </section>
    </div>
  )
}

export default App