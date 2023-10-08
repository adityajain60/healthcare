import React, { useState } from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import'../App.css';
import { useNavigate } from 'react-router-dom';



function Dashboard() {

    const [activeTab, setActiveTab] = useState('patientInfo');


  return (
    <div id="dashboard-page">

        <header className="header">
          <a href="#" className="logo">
            <i className="fa-solid fa-hospital-user" />
            <span className="logo-text">PADOC</span>
          </a>
          <nav className="navbar justify-content-evenly">
            <a href="#home">Home</a>
            <a href="#About">About</a>
            <a href="#Doctors">Doctors</a>
            <a href="#Review">Reviews</a>
            <a href="#Book">Book</a>
            <a href="#pres">Prescription</a>
            <a href="#test">Test</a>
            <a href="#gallery">gallery</a>
          </nav>
          <div id="menubtn" className="fas fa-bars">
            {" "}
          </div>
        </header>
        <section className="home" id="home">
          <div className="content">
            <h2>Choose The Smart Way</h2>
            <p>
              Padoc skips the line, saves your time. Now get consulted with top doctors
              all over India with the help of Padoc.
            </p>
            <a href="#" className="btn">
              Contact Us
              <span className="fas fa-chevron-right" />
            </a>
          </div>
          <div className="img">
            <img src="queue.jpg" alt="" />
          </div>
        </section>
        <section className="about" id="About">
          <h1 className="heading">
            <span>About</span> Us
          </h1>
          <div className="row">
            <div className="content">
              <h3>
                We at Padoc allow patients to store their health record and consult
                the doctors with just one click.Skilled doctors all over india just
                await one click from your side .
              </h3>
              <p>space for contnet</p>
              <a href="#">
                Read More
                <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </section>
        <section className="IconC">
          <div className="icons">
            <i className="fas fa-user" />
            <h3>tobeupdated+</h3>
            <p>Satisfied Users's</p>
          </div>
          <div className="icons">
            <i className="fas fa-hospital" />
            <h3>tobeupdated+</h3>
            <p>connected hospital's</p>
          </div>
          <div className="icons">
            <i className="fas fa-user-md" />
            <h3>tobeupdated+</h3>
            <p>Available Doctors</p>
          </div>
        </section>
        <section className="services" id="Services">
          <h1 className="heading">Our Services</h1>
          <div className="boxContainer">
            <div className="box">
              <i className="fa-solid fa-hospital-user" />
              <h3> A brief about the service from uploading till assigning</h3>
              <p>------- brief------</p>
              <a href="#" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            <div className="box">
              <i className="fa-solid fa-hospital-user" />
              <h3> A brief about the service from uploading till assigning</h3>
              <p>------- brief------</p>
              <a href="#" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            <div className="box">
              <i className="fa-solid fa-hospital-user" />
              <h3> A brief about the service from uploading till assigning</h3>
              <p>------- brief------</p>
              <a href="#" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            <div className="box">
              <i className="fa-solid fa-hospital-user" />
              <h3> A brief about the service from uploading till assigning</h3>
              <p>------- brief------</p>
              <a href="#" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            <div className="box">
              <i className="fa-solid fa-hospital-user" />
              <h3> A brief about the service from uploading till assigning</h3>
              <p>------- brief------</p>
              <a href="#" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </section>
        <section className="doctors" id="Doctors">
          <h1 className="heading">Our Doctors</h1>
          <div className="boxContainer">
            <div className="box">
              <img src="doct.png" alt="" />
              <h3> doc 1</h3>
              <span>Our Expert</span>
              <div className="icons">
                <i className="fab fa-linkedin" />
                <i className="fab fa-twitter" />
                <i className="fab fa-facebook" />
              </div>
            </div>
            <div className="box">
              <img src="assets/doct.png" alt="" />
              <h3> doc 2</h3>
              <span>Our Expert</span>
              <div className="icons">
                <i className="fab fa-linkedin" />
                <i className="fab fa-twitter" />
                <i className="fab fa-facebook" />
              </div>
            </div>
            <div className="box">
              <img src="assets/doct.png" alt="" />
              <h3> doc 3</h3>
              <span>Our Expert</span>
              <div className="icons">
                <i className="fab fa-linkedin" />
                <i className="fab fa-twitter" />
                <i className="fab fa-facebook" />
              </div>
            </div>
            <div className="box">
              <img src="assets/doct.png" alt="" />
              <h3> doc 4</h3>
              <span>Our Expert</span>
              <div className="icons">
                <i className="fab fa-linkedin" />
                <i className="fab fa-twitter" />
                <i className="fab fa-facebook" />
              </div>
            </div>
          </div>
        </section>
        <section className="book" id="Book">
          <h1 className="heading">Book </h1>
          <div className="row">
            <form action="">
              <h3> Book Your Appointment</h3>
              <input
                type="text"
                required=""
                placeholder="Your Name"
                className="box"
              />
              <input
                type="email"
                required=""
                placeholder="YourEmail Id"
                className="box"
              />
              <input
                type="number"
                required=""
                placeholder="Your Number"
                className="box"
              />
              <input type="date" required="" className="box" />
              <button className="btn btn-outline-success  btn-lg">Submit</button>
            </form>
          </div>
        </section>
        <section className="review" id="Review">
          <h1 className="heading">Client's Review</h1>
          <div className="boxContainer">
            <div className="box">
              <img src="person.jpg" alt="" />
              <h3>NAME</h3>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p> HIS EXPERIENCE</p>
            </div>
            <div className="box">
              <img src="assets/person.jpg" alt="" />
              <h3>NAME</h3>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p> HIS EXPERIENCE</p>
            </div>
          </div>
        </section>
      
    </div>   
  );



}

export default Dashboard;