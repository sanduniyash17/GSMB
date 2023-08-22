import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import TipperRegistartionTable from './TipperRegistartionTable';

function TipperRegistartion() {
  const [formData, setFormData] = useState({
    vehicleNo: '',
    capacity: '',
    revenueLicenseNumber: '',
    ownerName: '',
    ownerEmail: '',
    mobileNumber: '',
    accountNumber: '',
    bank: '',
    branch: '',
    referenceNumber: '',
    vehicleLocation: '',
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
      vehicleNo: 'CBK1000',
      capacity: '100',
      revenueLicenseNumber: '454557573',
      ownerName: 'Perera',
      ownerEmail: 'perera@gmail.com',
      mobileNumber: '0123456789',
      accountNumber: '52120120',
      bank: 'BOC',
      branch: 'Nugegoda',
      referenceNumber: 'abc1234',
      vehicleLocation: 'abc',
      view: ''
    },
    {
      vehicleNo: 'CAR2000',
      capacity: '100',
      revenueLicenseNumber: '5785769791',
      ownerName: 'Dias',
      ownerEmail: 'dias@gmail.com',
      mobileNumber: '0987654321',
      accountNumber: '89769134',
      bank: 'HNB',
      branch: 'Kirulupana',
      referenceNumber: 'xyz1234',
      vehicleLocation: 'abcd',
      view: ''
    },
    {
      vehicleNo: 'CBK3000',
      capacity: '100',
      revenueLicenseNumber: '454557573',
      ownerName: 'Perera',
      ownerEmail: 'perera@gmail.com',
      mobileNumber: '0123456789',
      accountNumber: '52120120',
      bank: 'BOC',
      branch: 'Nugegoda',
      referenceNumber: 'abc1234',
      vehicleLocation: 'abc',
      view: ''
    },
    {
      vehicleNo: 'CAR4000',
      capacity: '100',
      revenueLicenseNumber: '5785769791',
      ownerName: 'Dias',
      ownerEmail: 'dias@gmail.com',
      mobileNumber: '0987654321',
      accountNumber: '89769134',
      bank: 'HNB',
      branch: 'Kirulupana',
      referenceNumber: 'xyz1234',
      vehicleLocation: 'abcd',
      view: ''
    },
    {
      vehicleNo: 'CBK5000',
      capacity: '100',
      revenueLicenseNumber: '454557573',
      ownerName: 'Perera',
      ownerEmail: 'perera@gmail.com',
      mobileNumber: '0123456789',
      accountNumber: '52120120',
      bank: 'BOC',
      branch: 'Nugegoda',
      referenceNumber: 'abc1234',
      vehicleLocation: 'abc',
      view: ''
    },
    {
      vehicleNo: 'CAR6000',
      capacity: '100',
      revenueLicenseNumber: '5785769791',
      ownerName: 'Dias',
      ownerEmail: 'dias@gmail.com',
      mobileNumber: '0987654321',
      accountNumber: '89769134',
      bank: 'HNB',
      branch: 'Kirulupana',
      referenceNumber: 'xyz1234',
      vehicleLocation: 'abcd',
      view: ''
    }
  ];

  const toggleVehicleLocation = (vehicleLocation) => {
    const updatedVehicleLocation = formData.vehicleLocation.includes(
      vehicleLocation
    )
      ? formData.vehicleLocation.filter((d) => d !== vehicleLocation)
      : [...formData.vehicleLocation, vehicleLocation];

    setFormData((prevFormData) => ({
      ...prevFormData,
      destination: updatedVehicleLocation
    }));
  };

  const toggleBank = (bank) => {
    const updatedBanks = formData.bank.includes(bank)
      ? formData.bank.filter((d) => d !== bank)
      : [...formData.bank, bank];

    setFormData((prevFormData) => ({
      ...prevFormData,
      bank: updatedBanks
    }));
  };

  const toggleBranch = (branch) => {
    const updatedBranchs = formData.branch.includes(branch)
      ? formData.branch.filter((d) => d !== branch)
      : [...formData.branch, branch];

    setFormData((prevFormData) => ({
      ...prevFormData,
      branch: updatedBranchs
    }));
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
        <title>Tipper Registartion</title>
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
                <h2 style={{ textAlign: 'center' }}>TIPPER REGISTARTION</h2>

                <Divider />

                <div style={formBorder}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="vehicleNo">Vehicle No:</label>
                      <input
                        id="vehicleNo"
                        name="vehicleNo"
                        value={formData.vehicleNo}
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
                      <label htmlFor="ownerEmail">Owner Email:</label>
                      <input
                        type="email"
                        id="ownerEmail"
                        name="ownerEmail"
                        value={formData.ownerEmail}
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
                      <label htmlFor="accountNumber">Account Number:</label>
                      <input
                        type="text"
                        id="accountNumber"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>

                    {/* <div style={{ flex: 1 }}>
                      <label htmlFor="bank">Bank</label>
                      <input
                        type="text"
                        id="bank"
                        name="bank"
                        value={formData.bank}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div> */}
                  </div>

                  <br />

                  <div>
                    <label htmlFor="bank">Bank:</label>
                    <div
                      style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                        maxHeight: '100px',
                        overflowY: 'auto'
                      }}
                    >
                      {[
                        'Colombo',
                        'Gampaha',
                        'Kalutara',
                        'Kandy',
                        'Matale',
                        'Nuwara Eliya',
                        'Galle',
                        'Matara',
                        'Hambantota',
                        'Jaffna',
                        'Kilinochchi',
                        'Mannar',
                        'Mullaitivu',
                        'Vavuniya',
                        'Batticaloa',
                        'Ampara',
                        'Trincomalee',
                        'Kurunegala',
                        'Puttalam',
                        'Anuradhapura',
                        'Polonnaruwa',
                        'Badulla',
                        'Monaragala',
                        'Ratnapura',
                        'Kegalle'
                      ].map((bank) => (
                        <div
                          key={bank}
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <input
                            type="checkbox"
                            name="bank"
                            value={bank}
                            checked={formData.bank.includes(bank)}
                            onChange={() => toggleBank(bank)}
                          />
                          <span style={{ marginLeft: '5px' }}>{bank}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <br />

                  <div>
                    <label htmlFor="branch">Branch:</label>
                    <div
                      style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                        maxHeight: '100px',
                        overflowY: 'auto'
                      }}
                    >
                      {[
                        'Colombo',
                        'Gampaha',
                        'Kalutara',
                        'Kandy',
                        'Matale',
                        'Nuwara Eliya',
                        'Galle',
                        'Matara',
                        'Hambantota',
                        'Jaffna',
                        'Kilinochchi',
                        'Mannar',
                        'Mullaitivu',
                        'Vavuniya',
                        'Batticaloa',
                        'Ampara',
                        'Trincomalee',
                        'Kurunegala',
                        'Puttalam',
                        'Anuradhapura',
                        'Polonnaruwa',
                        'Badulla',
                        'Monaragala',
                        'Ratnapura',
                        'Kegalle'
                      ].map((branch) => (
                        <div
                          key={branch}
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <input
                            type="checkbox"
                            name="branch"
                            value={branch}
                            checked={formData.branch.includes(branch)}
                            onChange={() => toggleBranch(branch)}
                          />
                          <span style={{ marginLeft: '5px' }}>{branch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div style={{ flex: 1 }}>
                        <label htmlFor="referenceNumber">
                          Reference Number
                        </label>
                        <input
                          type="text"
                          id="referenceNumber"
                          name="referenceNumber"
                          value={formData.referenceNumber}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div> */}

                  <br />
                  <label htmlFor="vehicleLocation">
                    Vehicle Location (District):
                  </label>
                  <div
                    style={{
                      border: '1px solid #ccc',
                      padding: '10px',
                      borderRadius: '5px',
                      maxHeight: '100px',
                      overflowY: 'auto'
                    }}
                  >
                    {[
                      'Colombo',
                      'Gampaha',
                      'Kalutara',
                      'Kandy',
                      'Matale',
                      'Nuwara Eliya',
                      'Galle',
                      'Matara',
                      'Hambantota',
                      'Jaffna',
                      'Kilinochchi',
                      'Mannar',
                      'Mullaitivu',
                      'Vavuniya',
                      'Batticaloa',
                      'Ampara',
                      'Trincomalee',
                      'Kurunegala',
                      'Puttalam',
                      'Anuradhapura',
                      'Polonnaruwa',
                      'Badulla',
                      'Monaragala',
                      'Ratnapura',
                      'Kegalle'
                    ].map((vehicleLocation) => (
                      <div
                        key={vehicleLocation}
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <input
                          type="checkbox"
                          name="vehicleLocation"
                          value={vehicleLocation}
                          checked={formData.vehicleLocation.includes(
                            vehicleLocation
                          )}
                          onChange={() =>
                            toggleVehicleLocation(vehicleLocation)
                          }
                        />
                        <span style={{ marginLeft: '5px' }}>
                          {vehicleLocation}
                        </span>
                      </div>
                    ))}
                  </div>

                  <br />

                  <div>
                    <label htmlFor="active">
                      <input
                        type="radio"
                        id="active"
                        name="active"
                        value="active"
                        checked={formData.vehicleNo === 'active'}
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
                        checked={formData.vehicleNo === 'inactive'}
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
                <TipperRegistartionTable cryptoOrders={cryptoOrders} />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

TipperRegistartion.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default TipperRegistartion;
