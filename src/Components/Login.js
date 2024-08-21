import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container" style={{ backgroundColor: "#f8f9fa", padding: "50px", marginTop: "50px", borderRadius: "8px", maxWidth: "400px" }}>
      <h2 className="text-center">Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
        <div className="d-flex justify-content-between">
          <Link to="#" className="text-decoration-none">Forgot Password?</Link>
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
        <p className="text-center mt-3">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        <hr />
        <button type="button" className="btn btn-outline-primary w-100 mb-2">Login with Facebook</button>
        <button type="button" className="btn btn-outline-danger w-100">Login with Google</button>
      </form>
    </div>
  )
}

export default Login;
