import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import SiteRegistrationTable from './SiteRegistrationTable';

function SiteRegistration() {
  const [formData, setFormData] = useState({
    siteNumber: '',
    siteLocation1: '',
    siteLocation2: '',
    siteLocation3: '',
    siteLocation4: '',
    siteName: '',
    gpsLoction: ''
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
      siteNumber: '01',
      siteLocation1: 'Manampitiya',
      siteName: 'Site01',
      gpsLoction: 'ABC'
    },
    {
      siteNumber: '02',
      siteLocation1: 'Manampitiya',
      siteName: 'Site02',
      gpsLoction: 'XYZ'
    },
    {
      siteNumber: '03',
      siteLocation1: 'Manampitiya',
      siteName: 'Site03',
      gpsLoction: 'ABC'
    },
    {
      siteNumber: '04',
      siteLocation1: 'Manampitiya',
      siteName: 'Site04',
      gpsLoction: 'XYZ'
    },
    {
      siteNumber: '05',
      siteLocation1: 'Manampitiya',
      siteName: 'Site05',
      gpsLoction: 'ABC'
    },
    {
      siteNumber: '06',
      siteLocation1: 'Manampitiya',
      siteName: 'Site06',
      gpsLoction: 'XYZ'
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

  const selectStyle = {
    width: '50%',
    height: '30px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px'
  };

  const select1Style = {
    width: '50%',
    height: '30px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px'
  };

  return (
    <>
      <Head>
        <title>Site Registration</title>
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
                <h2 style={{ textAlign: 'center' }}>SITE REGISTRATION</h2>
                <Divider />

                <div style={formBorder}>
                  <div
                    style={{
                      display: 'flex',
                      marginBottom: '10px',
                      marginLeft: '165px'
                    }}
                  >
                    <label htmlFor="siteNumber" style={{ marginRight: '10px' }}>
                      Site Number:
                    </label>
                    <input
                      type="text"
                      id="siteNumber"
                      name="siteNumber"
                      placeholder="Site Number"
                      value={formData.siteNumber}
                      onChange={handleChange}
                      required
                      style={{
                        ...selectStyle,
                        width: '410px'
                      }}
                    />
                  </div>

                  <br />

                  <div
                    style={{
                      display: 'flex',
                      marginLeft: '160px',
                      marginBottom: '10px'
                    }}
                  >
                    <label
                      htmlFor="siteLocation"
                      style={{ marginRight: '10px' }}
                    >
                      Site Location:
                    </label>
                    <input
                      type="text"
                      id="siteLocation1"
                      name="siteLocation1"
                      placeholder="Street Address"
                      value={formData.siteLocation1}
                      onChange={handleChange}
                      required
                      style={{
                        ...selectStyle,
                        width: '410px'
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '53px',
                      marginBottom: '10px'
                    }}
                  >
                    <input
                      type="text"
                      id="siteLocation2"
                      name="siteLocation2"
                      placeholder="City"
                      value={formData.siteLocation2}
                      onChange={handleChange}
                      required
                      style={select1Style}
                    />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '53px',
                      marginBottom: '10px'
                    }}
                  >
                    <select
                      id="siteLocation3"
                      name="siteLocation3"
                      value={formData.siteLocation3}
                      onChange={handleChange}
                      required
                      style={select1Style}
                    >
                      <option value="">District</option>
                      <option value="type1">Gampaha</option>
                      <option value="type2">Colombo</option>
                      <option value="type3">Kaluthara</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '53px',
                      marginBottom: '10px'
                    }}
                  >
                    <select
                      id="siteLocation4"
                      name="siteLocation4"
                      value={formData.siteLocation4}
                      onChange={handleChange}
                      required
                      style={select1Style}
                    >
                      <option value="">Province</option>
                      <option value="type1">Western</option>
                      <option value="type2">Eastern</option>
                      <option value="type3">South</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  <br />
                  <div
                    style={{
                      display: 'flex',
                      marginLeft: '165px',
                      marginBottom: '10px'
                    }}
                  >
                    <label htmlFor="siteName" style={{ marginRight: '25px' }}>
                      Site Name:
                    </label>
                    <input
                      id="siteName"
                      name="siteName"
                      placeholder="Site Name"
                      value={formData.siteName}
                      onChange={handleChange}
                      required
                      style={{
                        ...selectStyle,
                        width: '410px'
                      }}
                    />
                  </div>

                  <br />

                  <div
                    style={{
                      display: 'flex',
                      marginLeft: '145px',
                      marginBottom: '10px'
                    }}
                  >
                    <label htmlFor="gpsLoction" style={{ marginRight: '25px' }}>
                      GPS Location:
                    </label>
                    <input
                      id="gpsLoction"
                      name="gpsLoction"
                      placeholder="GPS Location"
                      value={formData.gpsLoction}
                      onChange={handleChange}
                      required
                      style={{
                        ...selectStyle,
                        width: '410px'
                      }}
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
                          checked={formData.siteNumber === 'active'}
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
                          checked={formData.siteNumber === 'inactive'}
                          onChange={handleChange}
                        />
                        <span style={{ marginLeft: '5px' }}>is Inactive</span>
                      </label>
                    </div>
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
                <SiteRegistrationTable cryptoOrders={cryptoOrders} />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

SiteRegistration.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default SiteRegistration;
