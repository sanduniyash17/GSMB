
import React, { useState } from 'react';
import Head from 'next/head';
import {
  // Container,
  // Grid,
  // Card,
  CardContent,
  Divider,
  Button
} from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    userName: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      userName: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const borderStyle = {
    background: '#fff',
    border: '2px solid #DDE6ED',
    boxShadow: '10px 10px 10px rgba(0.1, 0.1, 0.1, 0.1)',
    borderRadius: '10px',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingTop: '10px',
    paddingBottom: '30px',
    // margin: '20px',
    position: 'relative',
    overflow: 'hidden'
  };

  // select style

  const selectStyle = {
    width: '50%',
    height: '30px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px'
  };

  // Input Style

  const inputStyle = {
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px',
    width: '50%',
    height: '30px'
  };

  // Form Border Style

  const formBorder = {
    background: '#fff',
    border: '2px solid #29818a',
    borderRadius: '10px',
    padding: '30px'
    // margin: '20px',
  };

  // SAVE BUTTON

  const saveButtonStyle = {
    borderRadius: '10px',
    background: '#fff',
    color: '#29818a',
    border: '3px solid #29818a',
    boxShadow: '5px 5px 8px 8px rgba(0.1, 0.1, 0.1, 0.1)',
    width: '100px',
    height: '40px',
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    transition: 'background 0.3s, color 0.3s',
    '&:hover': {
      background: '#29818a',
      color: '#fff',
      border: '3px solid #29818a'
    }
  };

  return (
    <>
    <Head>
        <title>Change Password</title>
      </Head>
      <div style={borderStyle}>
        <h2 style={{ textAlign: 'center', color: '#25476a' }}>
          CHANGE PASSWORD
        </h2>

        <Divider />

        <CardContent>
          <div style={formBorder}>
          <div style={{ flex: 1 }}>
            
            <label
              htmlFor="userName"
              style={{ textAlign: 'left', marginLeft: '230px' }}
            >
              User Name:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              style={{...inputStyle, marginLeft: '20px'}}
            />
            </div>

            <br/>
            <br/>
            <div style={{ flex: 1 }}>
            <label
              htmlFor="oldPassword"
              style={{ textAlign: 'left', marginLeft: '220px' }}
            >
              Old Password:
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              required
              style={{...inputStyle, marginLeft: '15px'}}
            />
            </div>
<br/>
            <br/>

            <div style={{ flex: 1 }}>
            <label
              htmlFor="newPassword"
              style={{ textAlign: 'left', marginLeft: '210px' }}
            >
              New Password:
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
              style={{...inputStyle, marginLeft: '15px'}}
            />
            </div>
            <br/>
            <br/>
            <div style={{ flex: 1 }}>
            <label
              htmlFor="confirmPassword"
              style={{ textAlign: 'left', marginLeft: '185px' }}
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{...inputStyle, marginLeft: '20px'}}
            />
          </div>
          </div>
          <br/>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '20px'
            }}
          >
            <Button onClick={handleSubmit} sx={saveButtonStyle}>
              Save
            </Button>
          </div>
        </CardContent>
      </div>
    </>
  );
};

ChangePassword.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ChangePassword;
