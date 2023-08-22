import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import MaterialRegistrationTable from './MaterialRegistrationTable';

function MaterialRegistration() {
  const [formData, setFormData] = useState({
    materialName: '',
    materialSize: '',
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
      materialName: 'ABC',
      materialSize: '15',
      view: ''
    },
    {
      materialName: 'XYZ',
      materialSize: '25',
      view: ''
    },
    {
      materialName: 'WQQ',
      materialSize: '15',
      view: ''
    },
    {
      materialName: 'FTYRE',
      materialSize: '25',
      view: ''
    }
  ];

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

  return (
    <>
      <Head>
        <title>Material Registration</title>
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
                <h2 style={{ textAlign: 'center' }}>MATERIAL REGISTRATION</h2>
                <Divider />

                <div style={formBorder}>
                  <div
                    style={{
                      display: 'flex',
                      marginBottom: '10px',
                      marginLeft: '165px'
                    }}
                  >
                    <label
                      htmlFor="materialName"
                      style={{ marginRight: '10px' }}
                    >
                      Material Name:
                    </label>
                    <input
                      type="text"
                      id="materialName"
                      name="materialName"
                      value={formData.materialName}
                      onChange={handleChange}
                      required
                      style={{
                        ...selectStyle,
                        width: '390px'
                      }}
                    />
                  </div>

                  <br />
                  <div
                    style={{
                      display: 'flex',
                      marginLeft: '175px',
                      marginBottom: '10px'
                    }}
                  >
                    <label
                      htmlFor="materialSize"
                      style={{ marginRight: '10px' }}
                    >
                      Material Size:
                    </label>
                    <input
                      type="text"
                      id="materialSize"
                      name="materialSize"
                      value={formData.materialSize}
                      onChange={handleChange}
                      required
                      style={{
                        ...selectStyle,
                        width: '390px'
                      }}
                    />
                  </div>

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
                          name="materialName"
                          value="active"
                          checked={formData.materialName === 'active'}
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
                          name="materialName"
                          value="inactive"
                          checked={formData.materialName === 'inactive'}
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
                <Button style={saveButtonStyle}>Save</Button>
                <Button style={updateButtonStyle}>Update</Button>
                <Button style={cancelButtonStyle}>Clear</Button>
                <Button style={deleteButtonStyle}>Delete</Button>
              </div>
              <br />
              <div style={borderStyleNew}>
                <MaterialRegistrationTable cryptoOrders={cryptoOrders} />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

MaterialRegistration.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default MaterialRegistration;
