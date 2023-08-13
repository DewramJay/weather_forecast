import React from 'react'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import Login from './page/Login'
import HomePage from './page/HomePage'

const Test = () => {
  return (
    <div>
        <Router>
            <Routes>

            <Route exact path="/" element={<Login/>}> 
             </Route>

            <Route path="/Login"  element={< Login/>}>
            </Route>

            <Route path="/HomePage"  element={< HomePage/>}>
            </Route>

            </Routes>
        </Router>
    </div>
  )
}

export default Test