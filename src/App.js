import React from 'react';

function App() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login to Facturama</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <p>OR</p>
                <button className="google-login">Sign in with Google</button>
                <button className="apple-login">Sign in with Apple</button>
                <div className="links">
                    <a href="#">Language</a>
                    <a href="#">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default App;
