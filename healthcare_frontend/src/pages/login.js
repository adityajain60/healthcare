import React, { useState } from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import'../App.css';
import { useNavigate , Link} from 'react-router-dom';



function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  
    try {
      const response = await axios.post('http://localhost:3000/login', formData);
      const { token } = response.data;
      console.log('Received token:', token);
  
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (err) {
      setError('Authentication failed. Please check your credentials.');
      console.error('Login error:', err);
    }
  };
  
  return (
    <div className="main">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div
            className="col-md-6 rounded-4 display-flex justify-content-center align-items-center flex-column left-box"
            style={{ backgroundColor: '#103cbe' }}
          >
            <div className="feautured_image mb-3">
              <img
                src="/assets/help.jpg"
                className="img-fluid"
                alt="Background"
                style={{ width: '300px' }}
              />
            </div>
            <p
              className="text-white fs-2"
              style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: '600' }}
            >
              Verify Yourself
            </p>
            <small
              className="text-white text-wrap text-center"
              style={{ width: '17rem', fontFamily: 'Courier New, Courier, monospace' }}
            >
              Your health, your way
            </small>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <form onSubmit={handleSubmit}>
                <div className="header-text mb-4">
                  <h2>Hello Again</h2>
                  <p>Let's Start</p>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group mb-1">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group mb-5 display-flex justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="formCheck"
                    />
                    <label
                      htmlFor="formcheck"
                      className="form-check-label text-secondary"
                    >
                      <small> Remember me</small>
                    </label>
                    {error && <div className="error-message">{error}</div>}
                  </div>
                  
                </div>
                <div className="input-group mb-3">
                  <button type = "submit" className="btn btn-lg btn-primary w-100 fs-6">
                    Login
                  </button>
                </div>
                <div className="row">
                  <small>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 
  
}

export default Login;
