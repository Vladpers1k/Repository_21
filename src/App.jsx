import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MyForm from './components/Form'
import MyCard from './components/Card'

const App = () => {
  return (
    <div>
      <Header />
      <MyCard />
      <MyForm />
    </div>
  )
}

export default App
