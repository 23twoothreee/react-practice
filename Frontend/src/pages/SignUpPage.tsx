import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // TODO: Add registration logic here
    console.log('Signing up:', { fullName, email, password });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '450px', width: '100%' }}>
        <h2 className="mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <InputField
            id="fullName"
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <InputField
            id="signUpEmail"
            label="Email address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            id="signUpPassword"
            label="Password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button label="Create Account" variant="success" />
        </form>
         <div className="text-center mt-3">
          <span>Already have an account? </span>
          <button
            className="btn btn-link p-0"
            type="button"
            onClick={() => navigate('/')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;