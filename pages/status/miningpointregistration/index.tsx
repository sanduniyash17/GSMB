import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import MiningPointRegistrationTable from './MiningPointRegistrationTable';

function MiningPointRegistration() {
  const [formData, setFormData] = useState({
    siteName: '',
    miningPointNumber: '',
    miningPointLicenseNumber: '',
    ownerName: '',
    contactNumber: '',
    miningPointLocation: '',
    activeStatus: ''
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
      siteName: 'Manampitiya1',
      miningPointNumber: '01',
      miningPointLicenseNumber: '123',
      ownerName: 'Perera',
      contactNumber: '0123456789',
      miningPointLocation: 'XYZ',
      view: ''
    },
    {
      siteName: 'Manampitiya2',
      miningPointNumber: '02',
      miningPointLicenseNumber: '1234',
      ownerName: 'Dias',
      contactNumber: '0987654321',
      miningPointLocation: 'ABC',
      view: ''
    },
    {
      siteName: 'Manampitiya3',
      miningPointNumber: '03',
      miningPointLicenseNumber: '123',
      ownerName: 'Perera',
      contactNumber: '0123456789',
      miningPointLocation: 'XYZ',
      view: ''
    },
    {
      siteName: 'Manampitiya4',
      miningPointNumber: '04',
      miningPointLicenseNumber: '1234',
      ownerName: 'Dias',
      contactNumber: '0987654321',
      miningPointLocation: 'ABC',
      view: ''
    },
    {
      siteName: 'Manampitiya5',
      miningPointNumber: '05',
      miningPointLicenseNumber: '123',
      ownerName: 'Perera',
      contactNumber: '0123456789',
      miningPointLocation: 'XYZ',
      view: ''
    },
    {
      siteName: 'Manampitiya6',
      miningPointNumber: '06',
      miningPointLicenseNumber: '1234',
      ownerName: 'Dias',
      contactNumber: '0987654321',
      miningPointLocation: 'ABC',
      view: ''
    },
    {
      siteName: 'Manampitiya7',
      miningPointNumber: '07',
      miningPointLicenseNumber: '123',
      ownerName: 'Perera',
      contactNumber: '0123456789',
      miningPointLocation: 'XYZ',
      view: ''
    },
    {
      siteName: 'Manampitiya8',
      miningPointNumber: '08',
      miningPointLicenseNumber: '1234',
      ownerName: 'Dias',
      contactNumber: '0987654321',
      miningPointLocation: 'ABC',
      view: ''
    },
    {
      siteName: 'Manampitiya9',
      miningPointNumber: '09',
      miningPointLicenseNumber: '123',
      ownerName: 'Perera',
      contactNumber: '0123456789',
      miningPointLocation: 'XYZ',
      view: ''
    },
    {
      siteName: 'Manampitiya10',
      miningPointNumber: '10',
      miningPointLicenseNumber: '1234',
      ownerName: 'Dias',
      contactNumber: '0987654321',
      miningPointLocation: 'ABC',
      view: ''
    },
    {
      siteName: 'Manampitiya11',
      miningPointNumber: '11',
      miningPointLicenseNumber: '1234',
      ownerName: 'Dias',
      contactNumber: '0987654321',
      miningPointLocation: 'ABC',
      view: ''
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
        <title>Mining Point Registartion</title>
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
                <h2 style={{ textAlign: 'center' }}>
                  MINING POINT REGISTRATION
                </h2>

                <Divider />

                {/* <CardContent> */}
                <div style={formBorder}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="siteName">Site Name:</label>
                      <select
                        id="siteName"
                        name="siteName"
                        value={formData.siteName}
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
                      <label htmlFor="miningPointNumber">
                        Mining Point Number:
                      </label>
                      <input
                        type="text"
                        id="miningPointNumber"
                        name="miningPointNumber"
                        value={formData.miningPointNumber}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <br />

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="miningPointLicenseNumber">
                        Mining Point License Number:
                      </label>
                      <input
                        type="text"
                        id="miningPointLicenseNumber"
                        name="miningPointLicenseNumber"
                        value={formData.miningPointLicenseNumber}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
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
                  </div>

                  <br />

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="contactNumber">Contact Number:</label>
                      <input
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="miningPointLocation">
                        Mining Point Location:
                      </label>
                      <input
                        type="text"
                        id="miningPointLocation"
                        name="miningPointLocation"
                        value={formData.miningPointLocation}
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
                        checked={formData.siteName === 'active'}
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
                        checked={formData.siteName === 'inactive'}
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
                <MiningPointRegistrationTable cryptoOrders={cryptoOrders} />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

MiningPointRegistration.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default MiningPointRegistration;
