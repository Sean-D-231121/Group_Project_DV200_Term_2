import React from 'react';
import '../App.css'
import UserPhoto from '../Userphoto.png'; 
import MySideNav from '../Components/NavBar';


const Home = () => {
    return (
        <div className="profile-container">
            <MySideNav />
            <header>
                <h1>Profile</h1>
                <img src={UserPhoto} alt="User" className="user-photo" style={{ marginRight: '-40px', width: '12%' }} />
                <h2>Mari</h2>
                <p style={{ marginTop: '-15px' }}>@marinathompson123</p>
            </header>
            <div className="card" style={{ 
                width: '356px', 
                height: '215px', 
                backgroundColor: '#DFFEDE', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                borderRadius: '5%',
                marginLeft: '38%',
                marginTop: '3%',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}> 
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontWeight: 'bold' }}>Personal Information</h3>
                    <p style={{ textAlign: 'center' }}>
                        Name: <br />
                        Marina Thompson <br /><br />
                        Username: <br />
                        Mari <br /><br />
                        Email: <br />
                        @marinathompson123
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;