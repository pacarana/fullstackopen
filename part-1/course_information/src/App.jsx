import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14

  }

  const parts = [
    {name: part1.name, exercises: part1.exercises},
    {name: part2.name, exercises: part2.exercises},
    {name: part3.name, exercises: part3.exercises},
  ]


  return (
    <div>
      <Header courseProp={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;