import { useState } from "react"
import { ScoreContext } from "./ScoreContext"

export default function ScoreProvider({children}) {

    const [score,setScore] = useState(0)
    const [username,setUsername] = useState("")

    const AddScore = () => {
      setScore(oldScore => oldScore + 1);
    }

    const handleUsername = (name) => {
      setUsername(name)
      sessionStorage.setItem("username",name)
    }

  return (
    <ScoreContext.Provider value={{score,AddScore,username,handleUsername}}>
        {children}
    </ScoreContext.Provider>
  )
}
