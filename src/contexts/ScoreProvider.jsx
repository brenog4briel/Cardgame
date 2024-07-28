import { useState } from "react"
import { ScoreContext } from "./ScoreContext"

export default function ScoreProvider({children}) {

    const [score,setScore] = useState(0)

    const AddScore = () => {
        setScore(oldScore => oldScore + 1);
    }

  return (
    <ScoreContext.Provider value={{score,AddScore}}>
        {children}
    </ScoreContext.Provider>
  )
}
