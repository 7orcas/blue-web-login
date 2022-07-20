import React, { useContext, useEffect }  from 'react'
import api from './sys/api';
import './App.css'
import Layout from './app/Layout'
import { AppContextProvider } from './sys/AppContext'

function App() {

  return (
    <div className="App">
      <AppContextProvider>
        <Layout />
      </AppContextProvider>
    </div>
  )
}

export default App
