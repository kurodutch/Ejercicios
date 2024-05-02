import { useState } from 'react'

const Button= (props) => (
  <button onClick={props.handleClick}> {props.text} </button>
)

const Statistics = ({text, value}) => {
  console.log(value)
    return (
      <td>{text} {value}</td>
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
        <tbody>
          <tr> 
            <Statistics text = 'good'/>
            <Statistics value = {good}/>
          </tr>
          <tr>
            <Statistics text = 'neutral'/>
            <Statistics value = {neutral}/>
          </tr>
          <tr>
            <Statistics text = 'bad' />
            <Statistics value = {bad}/>
          </tr>
          <tr>
            <Statistics text = 'total' />
            <Statistics value = {total}/>
          </tr>
          <tr>
            <Statistics text = 'average'/>
            <Statistics value = {average.toFixed(2)}/>
          </tr>
          <tr>
           <Statistics text = 'positive' />
           <Statistics value = {positive.toFixed(3)}/>% 
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App