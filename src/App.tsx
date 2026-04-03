// Required Imports
import { Routes, Route } from 'react-router-dom'

// Component Imports
import MainLayout from './layout/main.layout.component'
import LoginPage from './pages/login/index'
import EditorPage from './pages/editor'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="*" element={ <>This is the error page for this.</> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/" element={<EditorPage />} />
      </Route>
    </Routes>
  )
}

export default App