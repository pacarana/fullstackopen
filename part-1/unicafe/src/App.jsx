import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleAverage = () => {
    const total = good + neutral + bad;
    const avg = (good - bad) / total
    return avg;
  }

  const handlePositiveAverage = () => {
    const total = good + neutral + bad;
    const pAvg = good / total;
    return pAvg * 100;
  }

  return (
    <div>
      <section>
        <h1>give feedback</h1>

        <button onClick={() => {setGood(good + 1); console.log("good:\n" + good)}}>good</button>
        <button onClick={() => {setNeutral(neutral + 1); console.log("neutral:\n" + neutral)}}>neutral</button>
        <button onClick={() => {setBad(bad + 1); console.log("bad:\n" + bad)}}>bad</button>
      </section>

      <section>
        <h1>statistics</h1>

        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {handleAverage().toFixed(14)}</p>
        <p>positive {handlePositiveAverage().toFixed(13) + "%"}</p>
      </section>
    </div>
  )
}

export default App