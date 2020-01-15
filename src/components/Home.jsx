import React from "react"
// import { Link, Route } from 'react-router-dom';
import Noggin from '../img/child-face.png'
import Search from '../components/Search'
import ParkCards from '../components/ParkCards'

export default function Home(props) {
  return (
    <div>
      <img className="noggin" src={Noggin} alt=""></img>
      <h1>parksy</h1>
      <h2>Find playgrounds nearby.</h2>
      {props.children}
      {/* the first 'parks' below is what parks is called in ParkCards  */}
      {/* (the other component) the second 'park' is what it is called 
         in this file (hence the this)*/}
    </div>
  )
}