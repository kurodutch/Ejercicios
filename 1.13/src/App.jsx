import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick= {props.handleClick}> {props.text} </button>
  )
}

const Display = (props) => {
  return(
    <div> {props.text} {props.votes}</div>
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

  const [selected, setSelected] = useState(0)
  const [votos, setVotos] = useState(Array(anecdotes.length).fill(0))
  const [anecdoteIndex, setAnecdoteIndex] = useState(0)
  const largo = anecdotes.length
  let indice = 0


  function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  const siguienteClick = () => {
    console.log('anecdoteIndex antes de: ', anecdoteIndex)
    indice =(random(0, anecdotes.length-1)) // 5 por ejemplo
    setSelected(indice) //a [anecdotes] se le va el indice 5 para mostrar
    console.log('anecotedeindex luego de: ', indice)
  }
  
  const botonVotar = () => {
    console.log('el indice actual es: ', selected)
    console.log('votos antes: ', votos)
    const copyVotos = [...votos]
    console.log('copia de votos antes de añadir 1: ', copyVotos)
    console.log('el indice actual es: ', selected)
    copyVotos[selected] +=1
    console.log('copia de votos luego de añadir 1: ', copyVotos)
    console.log('el arreglo votos tiene actualmente: ', votos)
    setVotos(copyVotos)
    console.log('Votos luego de: ', copyVotos)
    console.log('el arreglo votos tiene actualmente: ', votos)
  }
  return (
    <div>
      <div>
        <Display text = {anecdotes[selected]} votes = {votos[selected]}/>
      </div>
      <br></br>
      <Button handleClick = {botonVotar} text ='votar'/>
      <Button handleClick = {siguienteClick} text='muestrame otra anecdota' />
    </div>
  )
}

export default App