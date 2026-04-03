// Necessary imports
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Helper imports
import { AuthHelper } from '../../utils/auth.helper'

// Required objects
const auth = new AuthHelper()

export function CoreEditorPage() {

    // Necessary variables
    const navigate = useNavigate()

    // Side effects
    useEffect(() => {
        async function checkAuth() {
          const isUserLogged = await auth?.CheckUserLoggedIn()
          console.log('loggedin ', isUserLogged);
          
          if (!isUserLogged) {
            navigate('/login')
          }
        }
        checkAuth()
    }, [])

    return (
        <div className="h-auto w-[100vw] flex items-center justify-center bg-[var(--color-background-primary)]">
            
        </div>
    )
}