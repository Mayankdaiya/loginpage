import React from 'react'
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <div className="container" style={{ backgroundColor: "#f8f9fa", padding: "50px", marginTop: "50px", borderRadius: "8px", maxWidth: "400px" }}>
      <h2 className="text-center">Sign Up</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Create Password</label>
          <input type="password" className="form-control" id="password" placeholder="Create your password" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">Sign Up</button>
        <p className="text-center mt-3">Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  )
}

export default SignUp;
