import { useState } from 'react'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <section>
        <h1>give feedback</h1>

        <button onClick={() => {setGood(good + 1); console.log("good:\n" + good)}}>good</button>
        <button onClick={() => {setNeutral(neutral + 1); console.log("neutral:\n" + neutral)}}>neutral</button>
        <button onClick={() => {setBad(bad + 1); console.log("bad:\n" + bad)}}>bad</button>
      </section>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App