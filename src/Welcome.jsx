import Age from "./Age"
import React from "react"

const Welcome = ({name, age}) => {
    return (
        <div>
        <h1> Welcome, {name}!</h1>
        {age > 18 && <Age age={age}/>}
        </div>
    )
}

export default Welcome