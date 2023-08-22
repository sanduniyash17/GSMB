import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import InquiryTable from './InquiryTable';

function Inquiry() {
  const [formData, setFormData] = useState({
    inquiryId: '',
    inquiryDescription: '',
    message: '',
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
      inquiryId: '01',
      inquiryDescription: 'Description01',
      message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      view: 'view'
    },
    {
      inquiryId: '02',
      inquiryDescription: 'Description02',
      message: 'ZYXWVUTSRQPONMLKJIHGFEDCBA',
      view: 'view'
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
    marginTop: '20px',
  };

  const inputStyle = {
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px',
    width: '100%',
    height: '30px'
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
        <title>Inquiry</title>
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
                <h2 style={{ textAlign: 'center' }}>INQUIRY</h2>
                <Divider />

                <div style={formBorder}>
                  <label htmlFor="inquiryId" style={{ marginLeft: '200px' }}>
                    Inquiry ID:
                  </label>
                  <input
                    type="text"
                    id="inquiryId"
                    name="inquiryId"
                    value={formData.inquiryId}
                    onChange={handleChange}
                    required
                    style={{ ...selectStyle, marginLeft: '10px' }}
                  />

                  <br />
                  <br />

                  <label
                    htmlFor="inquiryDescription"
                    style={{ marginLeft: '135px' }}
                  >
                    Inquiry Description:
                  </label>
                  <input
                    type="text"
                    id="inquiryDescription"
                    name="inquiryDescription"
                    value={formData.inquiryDescription}
                    onChange={handleChange}
                    required
                    style={{ ...selectStyle, marginLeft: '15px' }}
                  />

                  <br />
                  <br />

                  <div
                    style={{
                      display: 'flex',
                      marginLeft: '195px'
                    }}
                  >
                    <label htmlFor="message" style={{ marginLeft: '10px' }}>
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{
                        ...selectStyle,
                        marginLeft: '10px',
                        flex: 1,
                        maxWidth: '438px',
                        minHeight: '100px'
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
                          checked={formData.inquiryId === 'active'}
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
                          checked={formData.inquiryId === 'inactive'}
                          onChange={handleChange}
                        />
                        <span style={{ marginLeft: '5px' }}>is Inactive</span>
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
                  <Button sx={saveButtonStyle}>Send</Button>
                  <Button style={cancelButtonStyle}>Clear</Button>
                </div>

                <br/>

                <div style={borderStyleNew}>
                  <InquiryTable cryptoOrders={cryptoOrders} />
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Inquiry.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Inquiry;
