import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import {
  Container,
  Grid,
  Card,
  Divider,
  Button
} from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import EmployeeRegistrationTable from './EmployeeRegistrationTable';

function EmployeeRegistration() {
  const [formData, setFormData] = useState({
    employeeId: '',
    employeeName: '',
    designation: '',
    email: '',
    mobileNumber1: '',
    mobileNumber2: '',
    companyName: '',
    profilePicture: '',
    activeStatus: 'active' // Default value for radio buttons
  });

  // Handler for input field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const cryptoOrders: CryptoOrder[] = [
    {
      employeeId: '01',
      employeeName: 'Perera',
      designation: 'XYZ',
      email: 'john@gmail.com',
      mobileNumber1: '0123456789',
      mobileNumber2: '0987654321',
      companyName: 'ABC'
      // profilePicture: '',
      // view: ''
    },
    {
      employeeId: '02',
      employeeName: 'Kamal',
      designation: 'XYZ',
      email: 'john@gmail.com',
      mobileNumber1: '0123456789',
      mobileNumber2: '0987654321',
      companyName: 'XYZ'
      // profilePicture: '',
      // view: ''
    },
    {
      employeeId: '03',
      employeeName: 'Perera',
      designation: 'XYZ',
      email: 'john@gmail.com',
      mobileNumber1: '0123456789',
      mobileNumber2: '0987654321',
      companyName: 'ABC'
      // profilePicture: '',
      // view: ''
    },
    {
      employeeId: '04',
      employeeName: 'Kamal',
      designation: 'XYZ',
      email: 'john@gmail.com',
      mobileNumber1: '0123456789',
      mobileNumber2: '0987654321',
      companyName: 'XYZ'
      // profilePicture: '',
      // view: ''
    },
    {
      employeeId: '05',
      employeeName: 'Perera',
      designation: 'XYZ',
      email: 'john@gmail.com',
      mobileNumber1: '0123456789',
      mobileNumber2: '0987654321',
      companyName: 'ABC'
      // profilePicture: '',
      // view: ''
    },
    {
      employeeId: '06',
      employeeName: 'Kamal',
      designation: 'XYZ',
      email: 'john@gmail.com',
      mobileNumber1: '0123456789',
      mobileNumber2: '0987654321',
      companyName: 'XYZ'
      // profilePicture: '',
      // view: ''
    },
    {
      employeeId: '07',
      employeeName: 'Perera',
      designation: 'XYZ',
      email: 'john@gmail.com',
      mobileNumber1: '0123456789',
      mobileNumber2: '0987654321',
      companyName: 'ABC'
      // profilePicture: '',
      // view: ''
    },
    {
      employeeId: '08',
      employeeName: 'Kamal',
      designation: 'XYZ',
      email: 'john@gmail.com',
      mobileNumber1: '0123456789',
      mobileNumber2: '0987654321',
      companyName: 'XYZ'
      // profilePicture: '',
      // view: ''
    }
  ];

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          paymentStatusImage: reader.result
        }));
      };
      reader.readAsDataURL(imageFile);
    }
  };

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

  const updateButtonStyle = {
    borderRadius: '10px',
    borderWidth: '3px',
    fontFamily: 'roboto',
    background: '#ffffff',
    boxShadow: '5px 5px 8px 8px rgba(0.1, 0.1, 0.1, 0.1)',
    color: '#25476a',
    border: '3px solid #25476a',
    width: '100px',
    height: '40px',
    transition: 'background 0.3s, color 0.3s, border 0.3s',
    '&:hover': {
      background: '#25476a',
      color: '#ffffff',
      border: '3px solid #25476a'
    }
  };

  const deleteButtonStyle = {
    borderRadius: '10px',
    borderWidth: '3px',
    fontFamily: 'roboto',
    background: '#ffffff',
    boxShadow: '5px 5px 8px 8px rgba(0.1, 0.1, 0.1, 0.1)',
    color: '#d22417',
    border: '3px solid #d22417',
    width: '100px',
    height: '40px',
    transition: 'background 0.3s, color 0.3s, border 0.3s',
    '&:hover': {
      background: '#d22417',
      color: '#ffffff',
      border: '3px solid #d22417'
    }
  };

  const cancelButtonStyle = {
    borderRadius: '10px',
    borderWidth: '3px',
    fontFamily: 'roboto',
    background: '#ffffff',
    boxShadow: '5px 5px 8px 8px rgba(0.1, 0.1, 0.1, 0.1)',
    color: '#424242',
    border: '3px solid #424242',
    width: '100px',
    height: '40px',
    transition: 'background 0.3s, color 0.3s, border 0.3s',
    '&:hover': {
      background: '#424242',
      color: '#ffffff',
      border: '3px solid #424242'
    }
  };

  const borderStyle = {
    background: '#fff',
    border: '2px solid #DDE6ED',
    boxShadow: '10px 10px 10px rgba(0.1, 0.1, 0.1, 0.1)', 
    borderRadius: '10px',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingBottom: '30px',
    position: 'relative',
    overflow: 'hidden'
  };
  const formBorder = {
    background: '#fff',
    border: '2px solid #29818a',
    borderRadius: '10px',
    padding: '30px',
    marginTop: '20px',
  };

  const inputStyle = {
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px',
    width: '100%',
    height: '30px'
  };
  
  const borderStyleNew = {
    background: '#fff',
    border: '2px solid #DDE6ED',
    boxShadow: '10px 10px 10px 10px rgba(0.1, 0.1, 0.1, 0.1)', 
    borderRadius: '10px',
    paddingTop: '30px',
    paddingBottom: '10px',
    position: 'relative',
    overflow: 'hidden'
  };
  return (
    <>
      <Head>
        <title>Employee Registartion</title>
      </Head>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          // alignItems="stretch"
          spacing={2}
          marginTop={4}
        >
          <Grid item xs={12}>
            <Card>
              <div style={borderStyle}>
                <h2 style={{ textAlign: 'center' }}>EMPLOYEE REGISTARTION</h2>

                <Divider />

                <div style={formBorder}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="employeeId">Employee ID:</label>
                      <input
                        type="text"
                        id="employeeId"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="employeeName">Employee Name:</label>
                      <input
                        type="text"
                        id="employeeName"
                        name="employeeName"
                        value={formData.employeeName}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <br />

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="designation">Designation:</label>
                      <select
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      >
                        <option value="">Select</option>
                        <option value="company1">Company 1</option>
                        <option value="company2">Company 2</option>
                        <option value="company2">Company 3</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <br />

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="mobileNumber1">Mobile Number 1:</label>
                      <input
                        type="text"
                        id="mobileNumber1"
                        name="mobileNumber1"
                        value={formData.mobileNumber1}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="mobileNumber2">Mobile Number 2:</label>
                      <input
                        type="text"
                        id="mobileNumber2"
                        name="mobileNumber2"
                        value={formData.mobileNumber2}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <br />

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="companyName">Company Name:</label>
                      <select
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="company1">Company 1</option>
                        <option value="company2">Company 2</option>
                        <option value="company2">Company 3</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>

                    <div style={{ flex: 1 }}>
                      <label htmlFor="profilePicture">Profile Picture:</label>
                      <input
                        type="file"
                        id="profilePicture"
                        name="profilePicture"
                        onChange={handleImageChange}
                        accept="image/*"
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <br />

                  <div>
                    <label htmlFor="active">
                      <input
                        type="radio"
                        id="active"
                        name="active"
                        value="active"
                        checked={formData.employeeId === 'active'}
                        onChange={handleChange}
                      />
                      is Active
                    </label>
                  </div>
                  <div>
                    <label htmlFor="inactive">
                      <input
                        type="radio"
                        id="inactive"
                        name="inactive"
                        value="inactive"
                        checked={formData.employeeId === 'inactive'}
                        onChange={handleChange}
                      />
                      is Inactive
                    </label>
                  </div>
                </div>
              </div>

              <br />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px'
                }}
              >
                <Button sx={saveButtonStyle}>Save</Button>
                <Button sx={updateButtonStyle}>Update</Button>
                <Button sx={cancelButtonStyle}>Clear</Button>
                <Button sx={deleteButtonStyle}>Delete</Button>
              </div>

              <br />
              <div style={borderStyleNew}>
                <EmployeeRegistrationTable cryptoOrders={cryptoOrders} />
              </div>
          
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

EmployeeRegistration.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default EmployeeRegistration;
