// Necessary imports
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Helper imports
import { AuthHelper } from '../../utils/auth.helper'

// Required objects
const auth = new AuthHelper()

export function CoreLoginPage() {

    // Necessary variables
    const navigate = useNavigate()

    // State variables
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (!username) {
            setError('Please enter username')
            return
        }
        if (!password) {
            setError('Please enter password')
            return
        }
        if (!auth?.CheckUserName(username)) {
            setError('Enter correct username')
            return
        }
        if (!auth?.CheckPassword(password)) {
            setError('Enter correct password')
            return
        }
        if (rememberMe) {
            auth?.StoreLoginInfo()
        }
        console.log('completed')
        navigate('/')
    }

    return (
        <div className="h-auto w-[100vw] flex items-center justify-center bg-[var(--color-background-primary)]">
            <div className="w-full max-w-[380px]">
                {/* VS Code Style Header */}
                <div className="mb-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-[var(--color-primary-500)] rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-2xl">edit_note</span>
                        </div>
                    </div>
                    <h2 className="text-lg font-medium text-[var(--color-foreground-primary)]">
                        Sign in to Axon
                    </h2>
                    <p className="text-xs text-[var(--color-foreground-secondary)] mt-1">
                        Your code editor, reimagined
                    </p>
                </div>

                {/* Login Panel */}
                <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-default)] rounded-md overflow-hidden">
                    {error && (
                        <div className="m-4 p-2 bg-[var(--color-error-bg)] border-l-2 border-[var(--color-error)] text-[var(--color-error)] text-xs">
                            {error}
                        </div>
                    )}
                    
                    <form
                        onSubmit={(event) => {
                            handleSubmit(event)
                        }}
                        className="p-4"
                    >
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-[var(--color-foreground-secondary)] mb-1 uppercase tracking-wide">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => {
                                    if (error?.toLowerCase()?.includes('username') ?? false) {
                                        setError('')
                                    }
                                    setUsername(e.target.value)
                                }}
                                className="w-full px-2 py-1.5 bg-[var(--color-background-primary)] border border-[var(--color-border-default)] text-sm text-[var(--color-foreground-primary)] focus:outline-none focus:border-[var(--color-primary-500)] transition-colors"
                                placeholder="username"
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-[var(--color-foreground-secondary)] mb-1 uppercase tracking-wide">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    if (error?.toLowerCase()?.includes('password') ?? false) {
                                        setError('')
                                    }
                                    setPassword(e.target.value)
                                }}
                                className="w-full px-2 py-1.5 bg-[var(--color-background-primary)] border border-[var(--color-border-default)] text-sm text-[var(--color-foreground-primary)] focus:outline-none focus:border-[var(--color-primary-500)] transition-colors"
                                placeholder="••••••••"
                            />
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-3.5 h-3.5"
                                />
                                <span className="ml-2 text-xs text-[var(--color-foreground-secondary)]">
                                    Remember Me
                                </span>
                            </label>
                            <button
                                type="button"
                                className="text-xs text-[var(--color-foreground-secondary)] hover:text-[var(--color-primary-500)] transition-colors"
                            >
                                Forgot Password?
                            </button>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full py-1.5 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white text-sm font-medium transition-colors"
                        >
                            Login
                        </button>
                    </form>
                </div>
                
                {/* Footer */}
                <div className="mt-4 text-center">
                    <p className="text-xs text-[var(--color-foreground-tertiary)]">
                        New to Axon?{' '}
                        <button className="text-[var(--color-primary-500)] hover:underline">
                            Create an account
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}