import './Splash.css';
import Logo from './Logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  const [customerText, setCustomerText] = useState('Customer');
  const [employeeText, setEmployeeText] = useState('Employee');
  const [customerLink, setCustomerLink] = useState(false);
  const [employeeLink, setemployeeLink] = useState(false);

  const handleCustomerClick = () => {
    if (customerText === 'Customer') {
      setCustomerText('Sign Up');
      setCustomerLink(true);
    }
    if (employeeText === 'Employee') {
        setEmployeeText('Sign In');
        setemployeeLink(true);
      }
  };

  const handleEmployeeClick = () => {
      if (employeeText === 'Employee') {
          setEmployeeText('Sign In');
          setemployeeLink(true);
        }
  };

  return (
    <div className="container">
      <div className='content'>
        <img src={Logo} alt='' width={250} />
        <h1>Botania</h1>
        {customerLink ? (
          <Link to='./SignUp'><button className="CustomerButton" onClick={handleCustomerClick}>{customerText}</button></Link>
        ) : (
          <button className="CustomerButton" onClick={handleCustomerClick}>{customerText}</button>
        )}

        {employeeLink ? (
            <Link to='./SignIn'><button className="EmployeeButton" onClick={handleEmployeeClick}>{employeeText}</button></Link>
        ) : (
            <button className="EmployeeButton" onClick={handleEmployeeClick}>{employeeText}</button>
        )}
      </div>
    </div>
  )
}

export default Splash;