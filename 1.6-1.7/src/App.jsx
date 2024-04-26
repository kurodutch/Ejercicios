import { useState } from 'react'

const Button= (props) => (
  <button onClick={props.handleClick}> {props.text} </button>
)

const Statistics = ({good, neutral, bad, total, average, positive, text, value}) => {
  console.log(value)
  if (value==0) {
    return (
      <p>no feedback given</p>
    )
  }
    return (
      <div>
      <p> {text} {value}</p>
      </div>
    )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good+bad+neutral
  const average =(good-bad)/total
  const positive =(good/total)*100
  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick= {()=>setGood(good+1)} text = 'good'/>
      <Button handleClick= {()=>setNeutral(neutral+1)} text = 'neutral'/>
      <Button handleClick= {()=>setBad(bad+1)} text = 'bad'/>
      <h1>statistics</h1>
      <Statistics text = 'good' value = {good}/>
      <Statistics text = 'neutral' value = {neutral}/>
      <Statistics text = 'bad' value = {bad}/>
      <Statistics text = 'total' value = {total}/>
      <Statistics text = 'average' value = {average}/>
      <Statistics text = 'positive' value = {positive}/>
    </div>
  )
}

export default App