// Required Imports
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Helper Imports
import { AuthHelper } from './utils/auth.helper'

// Required Objects
const auth = new AuthHelper()

// Component Imports
import MainLayout from './layout/main.layout.component'
import LoginPage from './pages/login/index'

function App() {

  // Hook calls
  const navigate = useNavigate()

  useEffect(() => {
    async function checkAuth() {
      const isUserLogged = await auth?.CheckUserLoggedIn()
      console.log('test', isUserLogged);
      
      if (!isUserLogged) {
        navigate('/login')
      }
    }
    checkAuth()
  }, [])

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="*" element={ <>This is the error page for this.</> } />
        <Route path="/login" element={ <LoginPage /> } />
      </Route>
    </Routes>
  )
}

export default App