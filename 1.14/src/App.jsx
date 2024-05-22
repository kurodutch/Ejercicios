import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick= {props.handleClick}> {props.text} </button>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  //const points = Array(8).fill(0)//

  const points = [0,0,0,0,0,0,0,0]
  let copy = [...points]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const largo = anecdotes.length
  //let copy1 = []

  const manejarBoton  = () => {
    console.log('copy selected tiene', copy[selected])
    console.log('array copy tiene', copy)
    copy[selected] = copy[selected]+1
    return(
      copy
    )
  }

  function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
  
  return (
    <div>
      {anecdotes[selected]}
      <br></br>
      <Button handleClick = {manejarBoton} text ='votar1'/>
      <Button handleClick = {() => setSelected(random(0,anecdotes.length-1))} text='muestrame otra anecdota' />
      <Button handleClick = {() => setSelected(3)} text='muestrame otra anecdota2' />
      {copy[selected]}
    </div>
  )
}

export default App