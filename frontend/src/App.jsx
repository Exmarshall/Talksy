import { SignedIn, SignedOut } from '@clerk/clerk-react'
import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'

const App = () => {
  return (
    <>
      {/* Signed In Routes */}
      <SignedIn>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Navigate to="/" replace />} />
        </Routes>
      </SignedIn>

      {/* Signed Out Routes */}
      <SignedOut>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </SignedOut>
    </>
  )
}

export default App
