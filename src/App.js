import Weather from './Weather'
import LoginContextProvider from './contexts/LoginContext'

function App() {
  return ( 
    <LoginContextProvider>
      <Weather/>
    </LoginContextProvider>
  )
}

export default App;
