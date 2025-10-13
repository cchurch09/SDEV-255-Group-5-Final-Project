import React from 'react'


export default function SignUp() {
    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <div className="card bg-dark text-light p-4">
                <div class="login">
                    <h1>Login</h1>
                    <form action="/auth" method="post">
                        <label for="username">
                            <i class="fas fa-user"></i>
                        </label>
                        <input type="text" name="username" placeholder="Username" id="username" required />
                        <label for="password">
                            <i class="fas fa-lock"></i>
                        </label>
                        <input type="password" name="password" placeholder="Password" id="password" required />
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    )
}