import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./utility/Data.json"
import Card from './component/Card'
import ListItems from './component/List'
import Header from './component/Header'


function App() {
 

  return (
    <>
     <div className='header'>
      <Header/>
      </div>
    <div className='container'>
    <ListItems/>
    </div>
    </>
  )
}

export default App
