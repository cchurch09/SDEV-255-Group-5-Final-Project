import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../scripts/auth.jsx'
import userIcon from '../photos/userIcon.png'



export default function Login() {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'student'
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [isLoggedin, setIsLoggedin] = useState(false)

    const { login, register } = useAuth()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            let result
            if (isLogin) {
                result = await login(formData.username, formData.password)
            } else {
                result = await register(formData.username, formData.password, formData.role)
            }

            if (result.success) {
                setIsLoggedin(true)
            } else {
                setError(result.error || 'Authentication failed')
            }
        } catch (err) {
            setError('An unexpected error occurred')
        } finally {
            setLoading(false)
        }
    }

    const logout = (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            localStorage.removeItem('token')
            setIsLoggedin(false)
        }
        catch (err) {
            setError('An unexpected error occurred')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <div className="col-md-6 col-lg-5">
                <div className="glass-card p-5 fade-in-up">

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
                    

                    {!isLoggedin ? (
                        <div>
                            <div className="text-center mb-4">
                        <div className="mb-3">
                            <img src={userIcon} alt="icon" width="100" height="100" />
                        </div>
                        <h2 className="fw-bold mb-2">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="text-muted">
                            {isLogin ? 'Sign in to continue to Class Map' : 'Sign up to get started'}
                        </p>
                    </div>
                        <form onSubmit={handleSubmit}>
                            <div class="input-container">
                                <input
                                    type="username"
                                    name="username"
                                    className="form-control form-control-lg"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                <label>
                                    <i class="bi bi-person"></i>Username
                                </label>
                            </div>

                            <div class="input-container">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    minLength={6}
                                />
                                <label>
                                    <i className="bi bi-lock me-2"></i>Password
                                </label>
                            </div>

                            {!isLogin && (
                                <div class="glass-card">
                                    <label>
                                        <i className="bi bi-person-badge me-2"></i>I am a:
                                    </label>
                                    <div className="d-flex gap-3">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="role"
                                                id="roleStudent"
                                                value="student"
                                                checked={formData.role === 'student'}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="roleStudent">
                                                Student
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="role"
                                                id="roleTeacher"
                                                value="teacher"
                                                checked={formData.role === 'teacher'}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="roleTeacher">
                                                Teacher
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary w-100 btn-lg mb-3 button-2"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        {isLogin ? 'Signing In...' : 'Creating Account...'}
                                    </>
                                ) : (
                                    <>
                                        <i className="bi bi-box-arrow-in-right me-2"></i>
                                        {isLogin ? 'Sign In' : 'Sign Up'}
                                    </>
                                )}
                            </button>

                            <div className="text-center mt-4">
                                <p className="text-muted small mb-0">
                                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                                    <a
                                        href="#"
                                        className="text-decoration-none ms-1"
                                        style={{ color: '#667eea', fontWeight: '600' }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setIsLogin(!isLogin)
                                            setError('')
                                        }}
                                    >
                                        {isLogin ? 'Sign up' : 'Sign in'}
                                    </a>
                                </p>
                            </div>
                        </form>
                        </div>
                    ) : (<div>
                        <h1>You're logged in!</h1>
                        <button onClickCapture={logout} className="btn btn-primary w-100 btn-lg mb-3 button-2">
                            Logout
                        </button>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}