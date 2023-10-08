import React, { useState } from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import'../App.css';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      username: '',
      password: '',
      usertype: '',
    });

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
        //const response = await axios.post('/api/signup', formData);
        navigate('/login');
        
    } 
    catch (error) {
        setError('Signup failed. Please check your information.');
        }
    };

    return (
      <div className="main">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row border rounded-5  p-3 bg-white shadow box-area">
            <div
              className="col-md-6 rounded-4  display-flex justify-content-center align-items-center flex-column left-box"
              style={{ backgroundColor: "#103cbe" }}
            >
              <div className="feautured_image mb-3">
                <img src="assets/help2.jpg" className="img-fluid" style={{ width: 3000 }} />
              </div>
              <p
                className="text-white fs-2 "
                style={{
                  fontFamily: '"Courier New", Courier, monospace',
                  fontWeight: 600
                }}
              >
                Please Fill The Details
              </p>
              <small
                className="text-white text-wrap text-center"
                style={{
                  width: "17rem",
                  fontFamily: '"Courier New", Courier, monospace'
                }}
              >
                Your health, your way
              </small>
            </div>
            <div className="col-md-6 right-box">
              <div className="row align-items-center">
                <div className="header-text mb-4">
                  <h1>Hello Again</h1>
                  <p>Let's Start</p>
                </div>
                <form>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder=" Enter Username"
                      name="username"
                    />
                  </div>
                  <div className="input-group mb-1">
                    <input
                      type="password"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder=" Enter Password"
                      name="password"
                    />
                  </div>
                  <div className="input-group mb-1">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light fs-6"
                      placeholder="Enter Email Id"
                      name="email"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary w-100 fs-6"
                    >
                      Sign UP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      );


}

export default Signup;