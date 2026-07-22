import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import NewDrivingLicence from './components/new_licence'
import DrivingLicence from './components/driving_licence'
import './App.css'


function App(){


  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Dashboard/>}/> */}
        <Route path='driving-licence-form' element={<NewDrivingLicence/>}/>
        <Route path='/driving-licence' element={<DrivingLicence/>}/>
      </Routes>
    </>
  )
}

export default App
