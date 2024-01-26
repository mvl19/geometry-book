import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className='flex flex-wrap'>
      <Card url="https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl" description="CAPTION" />
      <Card url="https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl" description="CAPTION" />
      <Card url="https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl" description="CAPTION" />
    </div>
  )
}

export default App
