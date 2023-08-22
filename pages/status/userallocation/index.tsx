import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import UserAllocationTable from './UserAllocationTable';

function UserAllocation() {
  const [formData, setFormData] = useState({
    companyType: '',
    employeeId: '',
    employeeName: '',
    userRole: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const cryptoOrders = [
    {
      companyType: 'XYZ',
      employeeId: '02',
      employeeName: 'XYZ',
      userRole: 'R02',
      password: 'XYZ',
      confirmPassword: 'XYZ'
    },
    {
      companyType: 'ABC',
      employeeId: '01',
      employeeName: 'ABCD',
      userRole: 'R01',
      password: 'ABCD',
      confirmPassword: 'ABCD'
    }
  ];

  const handleViewDetails = (order) => {
    // Handle view details logic here
  };

  const dataArray = cryptoOrders.map((order, index) => ({
    ...order,
    password: <input type="password" value={order.password} disabled />,
    confirmPassword: (
      <input type="password" value={order.confirmPassword} disabled />
    ),
    view: <button onClick={() => handleViewDetails(order)}>View</button>
  }));

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

  // UPDATE BUTTON

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

  // DELETE BUTTON

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

  // CANCEL/ CLEAR BUTTON

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
    marginTop: '20px'
  };

  const borderStyleNew = {
    background: '#fff',
    border: '2px solid #DDE6ED',
    boxShadow: '10px 10px 10px 10px rgba(0.1, 0.1, 0.1, 0.1)', // Box shadow applied to all sides
    borderRadius: '10px',
    paddingTop: '30px',
    paddingBottom: '10px',
    position: 'relative',
    overflow: 'hidden'
  };

  const inputStyle = {
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px',
    width: '100%',
    height: '30px'
  };

  return (
    <>
      <Head>
        <title>User Allocation</title>
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
                <h2 style={{ textAlign: 'center' }}>USER ALLOCATION</h2>

                <Divider />

                <div style={formBorder}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="companyType">Company Type:</label>
                      <select
                        id="companyType"
                        name="companyType"
                        value={formData.companyType}
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
                      <label htmlFor="employeeId">Employee ID:</label>
                      <select
                        id="employeeId"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      >
                        <option value="">Select</option>
                        <option value="company1">01</option>
                        <option value="company2">02</option>
                        <option value="company2">03</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                  </div>

                  <br />

                  <div style={{ display: 'flex', gap: '1rem' }}>
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

                    <div style={{ flex: 1 }}>
                      <label htmlFor="userRole">User Role:</label>
                      <select
                        id="userRole"
                        name="userRole"
                        value={formData.userRole}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      >
                        <option value="">Select</option>
                        <option value="company1">Role 1</option>
                        <option value="company2">Role 2</option>
                        <option value="company2">Role 3</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                  </div>

                  <br />

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="confirmPassword">Confirm Password:</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
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
                <UserAllocationTable cryptoOrders={cryptoOrders} />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

UserAllocation.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default UserAllocation;
