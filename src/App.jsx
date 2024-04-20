import React from "react"

const Hello = ({name, age}) => {
  //const {name, age} = props
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = {name} age = {age}/>
      <Hello name ="Maya" age = {36}/>
      <Hello name ="Conny" age ={27}/>
    </div>
  )
}
export default App
