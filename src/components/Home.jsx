import React from "react"
import Noggin from '../img/child-face.png'

export default function Home(props) {
  return (
    <div>
      <img className="noggin" src={Noggin} alt=""></img>
      <h1>parksy</h1>
      <h2>Find playgrounds nearby</h2>
      {props.children}
    </div>
  )
}