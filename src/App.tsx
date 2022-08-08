import './App.css'
import Layout from './app/Layout'
import { AppContextProvider } from './sys/AppContext'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div 
      className="App" 
      style={{backgroundImage: 'url(' + require('./app/img/blue-water.jpg') + ')',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundColor:'transparent',
              width: '100vw',
              height: '100vh'
              }}>
      <AppContextProvider>
        <Layout />
      </AppContextProvider>
    </div>
  )
}

export default App
