import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import RevenueLicenseUpdateTable from './RevenueLicenseUpdateTable';

function RevenueLicenseUpdate() {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    capacity: '',
    ownerName: '',
    mobileNumber: '',
    revenueLicenseNumber: '',
    expireDate: '',
    view: ''
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
      vehicleNumber: 'CBK5426',
      capacity: '100',
      ownerName: 'Perera',
      mobileNumber: '0123456789',
      revenueLicenseNumber: '454557573',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CAR8965',
      capacity: '100',
      ownerName: 'Dias',
      mobileNumber: '0987654321',
      revenueLicenseNumber: '5785769791',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CBK5426',
      capacity: '100',
      ownerName: 'Perera',
      mobileNumber: '0123456789',
      revenueLicenseNumber: '454557573',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CAR8965',
      capacity: '100',
      ownerName: 'Dias',
      mobileNumber: '0987654321',
      revenueLicenseNumber: '5785769791',
      expireDate: '2023-10-15',
      view: ''
    },

    {
      vehicleNumber: 'CBK5426',
      capacity: '100',
      ownerName: 'Perera',
      mobileNumber: '0123456789',
      revenueLicenseNumber: '454557573',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CAR8965',
      capacity: '100',
      ownerName: 'Dias',
      mobileNumber: '0987654321',
      revenueLicenseNumber: '5785769791',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CBK5426',
      capacity: '100',
      ownerName: 'Perera',
      mobileNumber: '0123456789',
      revenueLicenseNumber: '454557573',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CAR8965',
      capacity: '100',
      ownerName: 'Dias',
      mobileNumber: '0987654321',
      revenueLicenseNumber: '5785769791',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CBK5426',
      capacity: '100',
      ownerName: 'Perera',
      mobileNumber: '0123456789',
      revenueLicenseNumber: '454557573',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CAR8965',
      capacity: '100',
      ownerName: 'Dias',
      mobileNumber: '0987654321',
      revenueLicenseNumber: '5785769791',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CBK5426',
      capacity: '100',
      ownerName: 'Perera',
      mobileNumber: '0123456789',
      revenueLicenseNumber: '454557573',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CAR8965',
      capacity: '100',
      ownerName: 'Dias',
      mobileNumber: '0987654321',
      revenueLicenseNumber: '5785769791',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CBK5426',
      capacity: '100',
      ownerName: 'Perera',
      mobileNumber: '0123456789',
      revenueLicenseNumber: '454557573',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CAR8965',
      capacity: '100',
      ownerName: 'Dias',
      mobileNumber: '0987654321',
      revenueLicenseNumber: '5785769791',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CBK5426',
      capacity: '100',
      ownerName: 'Perera',
      mobileNumber: '0123456789',
      revenueLicenseNumber: '454557573',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CAR8965',
      capacity: '100',
      ownerName: 'Dias',
      mobileNumber: '0987654321',
      revenueLicenseNumber: '5785769791',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CBK5426',
      capacity: '100',
      ownerName: 'Perera',
      mobileNumber: '0123456789',
      revenueLicenseNumber: '454557573',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CAR8965',
      capacity: '100',
      ownerName: 'Dias',
      mobileNumber: '0987654321',
      revenueLicenseNumber: '5785769791',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CBK5426',
      capacity: '100',
      ownerName: 'Perera',
      mobileNumber: '0123456789',
      revenueLicenseNumber: '454557573',
      expireDate: '2023-10-15',
      view: ''
    },
    {
      vehicleNumber: 'CAR8965',
      capacity: '100',
      ownerName: 'Dias',
      mobileNumber: '0987654321',
      revenueLicenseNumber: '5785769791',
      expireDate: '2023-10-15',
      view: ''
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
        <title>Revenue License Update</title>
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
                <h2 style={{ textAlign: 'center' }}>REVENUE LICENSE UPDATE</h2>

                <Divider />

                <div style={formBorder}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="vehicleNumber">Vehicle Number:</label>
                      <input
                        id="vehicleNumber"
                        name="vehicleNumber"
                        value={formData.vehicleNumber}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <label htmlFor="capacity">Capacity:</label>
                      <input
                        type="text"
                        id="capacity"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <br />

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="ownerName">Owner Name:</label>
                      <input
                        type="text"
                        id="ownerName"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <label htmlFor="mobileNumber">Mobile Number:</label>
                      <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <br />

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="revenueLicenseNumber">
                        Revenue License Number:
                      </label>
                      <input
                        type="text"
                        id="revenueLicenseNumber"
                        name="revenueLicenseNumber"
                        value={formData.revenueLicenseNumber}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <label htmlFor="expireDate">Expire Date:</label>
                      <input
                        type="dateTime"
                        id="expireDate"
                        name="expireDate"
                        value={formData.expireDate}
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
                        checked={formData.vehicleNumber === 'active'}
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
                        checked={formData.vehicleNumber === 'inactive'}
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
                <RevenueLicenseUpdateTable cryptoOrders={cryptoOrders} />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

RevenueLicenseUpdate.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default RevenueLicenseUpdate;
