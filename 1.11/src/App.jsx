import { useState } from 'react'

const Button= (props) => (
  <button onClick={props.handleClick}> {props.text} </button>
)

const Statistics = ({text, value}) => {
  console.log(value)
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
  if (total===0) {
    return(
      <div>
        <h1>give feedback</h1>
        <Button handleClick= {()=>setGood(good+1)} text = 'good'/>
        <Button handleClick= {()=>setNeutral(neutral+1)} text = 'neutral'/>
        <Button handleClick= {()=>setBad(bad+1)} text = 'bad'/>
        <h1>statistics</h1>
        <p>no feedback</p>
      </div>
    )
  }
  else return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick= {()=>setGood(good+1)} text = 'good'/>
      <Button handleClick= {()=>setNeutral(neutral+1)} text = 'neutral'/>
      <Button handleClick= {()=>setBad(bad+1)} text = 'bad'/>
      <h1>statistics</h1>
      <table>
        <tr> 
          <td><Statistics text = 'good' value = {good}/></td> 
        </tr>
        <tr>
          <td><Statistics text = 'neutral' value = {neutral}/></td> 
        </tr>
        <tr>
            <Statistics text = 'bad' value = {bad}/>
        </tr>
        <tr>
        <Statistics text = 'total' value = {total}/>
        </tr>
        <tr>
        <Statistics text = 'average' value = {average}/>
        </tr>
        <tr>
        <Statistics text = 'positive' value = {positive}/>
        </tr>
      </table>
    </div>
  )
}

export default App