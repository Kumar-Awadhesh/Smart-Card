import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import NewDrivingLicence from './components/new_licence'
import DrivingLicence from './components/driving_licence'
import Navbar from './components/navbar'
import Dashboard from './components/dashboard'
import './App.css'


function App(){


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='driving-licence-form' element={<NewDrivingLicence/>}/>
        <Route path='/driving-licence' element={<DrivingLicence/>}/>
      </Routes>
    </>
  )
}

export default App
