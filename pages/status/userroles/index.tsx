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
import UseRolesrAllocationTable from './UserRolesAllocationTable';

function UserRolesAllocation() {
  const [formData, setFormData] = useState({
    userRoleId: '',
    userRole: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const cryptoOrders: CryptoOrder[] = [
    {
      userRoleId: '01',
      userRole: 'Perera'
    },
    {
      userRoleId: '02',
      userRole: 'Dias'
    },
    {
      userRoleId: '03',
      userRole: 'Kamal'
    },
    {
      userRoleId: '04',
      userRole: 'Nimal'
    },
    {
      userRoleId: '05',
      userRole: 'Anil'
    },
    {
      userRoleId: '06',
      userRole: 'Nimmi'
    }
  ];

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

  const selectStyle = {
    width: '50%',
    height: '30px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px'
  };

  return (
    <>
      <Head>
        <title>User Role Allocation</title>
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
                <h2 style={{ textAlign: 'center' }}>USER ROLES ALLOCATION</h2>

                <Divider />

                {/* <CardContent> */}
                <div style={formBorder}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '65px',
                      marginBottom: '10px'
                    }}
                  >
                    <label htmlFor="userRoleId">User ID:</label>
                    <input
                      type="text"
                      id="userRoleId"
                      name="userRoleId"
                      value={formData.userRoleId}
                      onChange={handleChange}
                      required
                      style={{ ...selectStyle, marginLeft: '25px' }}
                    />
                  </div>

                  <br />

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '65px',
                      marginBottom: '10px'
                    }}
                  >
                    <label htmlFor="userRole">User Role:</label>
                    <input
                      type="text"
                      id="userRole"
                      name="userRole"
                      value={formData.userRole}
                      onChange={handleChange}
                      required
                      style={{ ...selectStyle, marginLeft: '10px' }}
                    />
                  </div>

                  <br />

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <label htmlFor="active">
                        <input
                          type="radio"
                          id="active"
                          name="active"
                          value="active"
                          checked={formData.userRoleId === 'active'}
                          onChange={handleChange}
                        />
                        <span style={{ marginLeft: '5px' }}>is Active</span>
                      </label>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '20px'
                      }}
                    >
                      <label htmlFor="inactive">
                        <input
                          type="radio"
                          id="inactive"
                          name="inactive"
                          value="inactive"
                          checked={formData.userRoleId === 'inactive'}
                          onChange={handleChange}
                        />
                        <span style={{ marginLeft: '5px' }}>is Inactive</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* </CardContent> */}

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                  marginTop: '1rem'
                }}
              >
                <Button sx={saveButtonStyle}>Save</Button>
                <Button sx={updateButtonStyle}>Update</Button>
                <Button sx={cancelButtonStyle}>Clear</Button>
                <Button sx={deleteButtonStyle}>Delete</Button>
              </div>
              <br />

              <br />
              <div style={borderStyleNew}>
                <UseRolesrAllocationTable cryptoOrders={cryptoOrders} />
              </div>
          

            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

UserRolesAllocation.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default UserRolesAllocation;
