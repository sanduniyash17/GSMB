import React, { useState } from 'react';
import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import Button from '@mui/material/Button';

import { CryptoOrder } from '@/models/crypto_order';

import { Container, Grid, Card, CardContent, Divider } from '@mui/material';

import Footer from '@/components/Footer';
import RecentOrdersTable from './RecentOrdersTable';
import { Margin } from '@mui/icons-material';

const cryptoOrders: CryptoOrder[] = [
  {
    companyType: 'vnvn',
    employeeId: 'jj',
    employeeName: 'dfdf',
    userRole: 'ss',
    password: 'ss',
    confirmPassword: 'dsd'
  },
  {
    companyType: 'dss',
    employeeId: 'dfs',
    employeeName: 'sdfs',
    userRole: 'ds',
    password: 'ds',
    confirmPassword: 'ds'
  }
];

const columnsArray = [
  { Header: 'Company Type', accessor: 'companyType' },
  { Header: 'Employee ID', accessor: 'employeeId' },
  { Header: 'Employee Name', accessor: 'employeeName' },
  { Header: 'User Role', accessor: 'userRole' },
  { Header: 'Password', accessor: 'password' },
  { Header: 'Confirm Password', accessor: 'confirmPassword' },
  { Header: 'View', accessor: 'view' } // Assuming this is the view button column
];

const dataArray = cryptoOrders.map((order, index) => ({
  ...order,
  view: <button onClick={() => handleViewDetails(order)}>View</button>
}));

export const borderStyle = {
  background: '#fff',
  border: '2px solid #DDE6ED',
  boxShadow: '10px 10px 10px rgba(0.1, 0.1, 0.1, 0.1)', // Box shadow applied to all sides
  borderRadius: '10px',
  paddingLeft: '30px',
  paddingRight: '30px',
  paddingTop: '10px',
  paddingBottom: '30px',
  // margin: '10px',
  position: 'relative',
  overflow: 'hidden'
};

export const formBorder = {
  background: '#fff',
  border: '2px solid #29818a',
  borderRadius: '10px',
  padding: '30px'
  // margin: '20px',
};

export const inputStyle = {
  borderRadius: '5px',
  border: '1px solid #ccc',
  padding: '5px',
  width: '100%',
  height: '30px'
};

export const saveButtonStyle = {
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

export const updateButtonStyle = {
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

export const deleteButtonStyle = {
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
export const cancelButtonStyle = {
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

function Accordions() {
  const [formData, setFormData] = useState({
    companyType: '',
    employId: '',
    employeeName: '',
    userRole: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      companyType: '',
      employeeId: '',
      employeeName: '',
      userRole: '',
      password: '',
      view: ''
    });
  };

  return (
    <>
      <Head>
        <title>Accordions - Components</title>
      </Head>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          marginTop={5}
        >
          <Grid item xs={12}>
            <Card>
              <div style={borderStyle}>
                <h2 style={{ textAlign: 'center' }}>USER ALLOCATIONS</h2>

                <Divider />

                <CardContent>
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
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                          <option value="type3">Type 3</option>
                        </select>
                      </div>

                      <div style={{ flex: 1 }}>
                        <label htmlFor="employId">Employ ID:</label>
                        <select
                          type="text"
                          id="employId"
                          name="employId"
                          value={formData.employId}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                          <option value="type3">Type 3</option>
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
                          type="text"
                          id="userRole"
                          name="userRole"
                          value={formData.userRole}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="type1">Type 1</option>
                          <option value="type2">Type 2</option>
                          <option value="type3">Type 3</option>
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
                        <label htmlFor="confirmPassword">
                          Confirm Password:
                        </label>
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
                          name="userRole"
                          value="active"
                          checked={formData.userRole === 'active'}
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
                          name="userRole"
                          value="inactive"
                          checked={formData.userRole === 'inactive'}
                          onChange={handleChange}
                        />
                        is Inactive
                      </label>
                    </div>
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
                  </div>

                  <RecentOrdersTable columns={columnsArray} data={dataArray} />
                </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Accordions.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Accordions;
