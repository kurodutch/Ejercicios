import {useState} from "react"

/*const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}> {text}</button>
  )
}*/

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0})

  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClicks = () => {
    const newClicks = {
      ...clicks, left: clicks.left+1 }
    setClicks(newClicks)
    setAll(allClicks.concat('L'))
    setTotal (newClicks.left+clicks.right)
  }
    

  const handleRightClicks = () => {
    const newClicks={ 
      ...clicks, right: clicks.right+1}
    setClicks(newClicks)
    setAll(allClicks.concat('R'))
    setTotal (clicks.left+newClicks.right)
  }


  return (
    <div>
      {clicks.left}
      <button onClick = {handleLeftClicks}> left </button>
      <button onClick = {handleRightClicks}> right </button>
      {clicks.right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  )
}
export default App
