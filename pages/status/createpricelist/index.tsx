import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import CreatePriceListTable from './CreatePriceListTable';

function CreatePriceList() {
  const [formData, setFormData] = useState({
    siteName: '',
    sandSizeIndividuallyEveryProject: '',
    availableQualities: '',
    sandPrizeIndividuallyEveryProject: '',
    tplCharges: '',
    transportRate: '',
    transportDistrict: '',
    activeStatus: ''
  });

  // Handler for input field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const toggleTransportDistrict = (transportDistrict) => {
    const updatedTransportDistricts = formData.transportDistrict.includes(transportDistrict)
      ? formData.transportDistrict.filter((d) => d !== transportDistrict)
      : [...formData.transportDistrict, transportDistrict];

    setFormData((prevFormData) => ({
      ...prevFormData,
      transportDistrict: updatedTransportDistricts,
    }));
  };


  const cryptoOrders: CryptoOrder[] = [
    {
      siteName: '01',
      sandSizeIndividuallyEveryProject: 'ABC',
      availableQualities: 'ABC',
      sandPrizeIndividuallyEveryProject: 'ABC',
      tplCharges: '1500',
      transportRate: '100',
      transportDistrict: 'Gampaha',
      view: ''
    },
    {
      siteName: '02',
      sandSizeIndividuallyEveryProject: 'XYZ',
      availableQualities: 'XYZ',
      sandPrizeIndividuallyEveryProject: 'XYZ',
      tplCharges: '2500',
      transportRate: '200',
      transportDistrict: 'Colombo',
      view: ''
    },
    {
      siteName: '03',
      sandSizeIndividuallyEveryProject: 'ABC',
      availableQualities: 'ABC',
      sandPrizeIndividuallyEveryProject: 'ABC',
      tplCharges: '1500',
      transportRate: '100',
      transportDistrict: 'Kaluthara',
      view: ''
    },
    {
      siteName: '04',
      sandSizeIndividuallyEveryProject: 'XYZ',
      availableQualities: 'XYZ',
      sandPrizeIndividuallyEveryProject: 'XYZ',
      tplCharges: '2500',
      transportRate: '200',
      transportDistrict: 'Kandy',
      view: ''
    },
    {
      siteName: '05',
      sandSizeIndividuallyEveryProject: 'ABC',
      availableQualities: 'ABC',
      sandPrizeIndividuallyEveryProject: 'ABC',
      tplCharges: '1500',
      transportRate: '100',
      transportDistrict: 'Galle',
      view: ''
    },
    {
      siteName: '06',
      sandSizeIndividuallyEveryProject: 'XYZ',
      availableQualities: 'XYZ',
      sandPrizeIndividuallyEveryProject: 'XYZ',
      tplCharges: '2500',
      transportRate: '200',
      transportDistrict: 'Ampara',
      view: ''
    },
    {
      siteName: '07',
      sandSizeIndividuallyEveryProject: 'ABC',
      availableQualities: 'ABC',
      sandPrizeIndividuallyEveryProject: 'ABC',
      tplCharges: '1500',
      transportRate: '100',
      transportDistrict: 'Kegalle',
      view: ''
    },
    {
      siteName: '08',
      sandSizeIndividuallyEveryProject: 'XYZ',
      availableQualities: 'XYZ',
      sandPrizeIndividuallyEveryProject: 'XYZ',
      tplCharges: '2500',
      transportRate: '200',
      transportDistrict: 'Badulla',
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
        <title>Create Price List</title>
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
                <h2 style={{ textAlign: 'center' }}>CREATE PRICE LIST</h2>

                <Divider />

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
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>

                    <div style={{ flex: 1 }}>
                      <label htmlFor="sandSizeIndividuallyEveryProject">
                        Sand Size Individually Every Project:
                      </label>
                      <select
                        id="sandSizeIndividuallyEveryProject"
                        name="sandSizeIndividuallyEveryProject"
                        value={formData.sandSizeIndividuallyEveryProject}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      >
                        <option value="">Select</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                  </div>

                  <br />

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="availableQualities">
                        Available Qualities (Cubes):
                      </label>
                      <select
                        id="availableQualities"
                        name="availableQualities"
                        value={formData.availableQualities}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      >
                        <option value="">Select</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>

                    <div style={{ flex: 1 }}>
                      <label htmlFor="sandPrizeIndividuallyEveryProject">
                        Sand Price Individually Every Project:
                      </label>
                      <input
                        type="text"
                        id="sandPrizeIndividuallyEveryProject"
                        name="sandPrizeIndividuallyEveryProject"
                        value={formData.sandPrizeIndividuallyEveryProject}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <br />

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <label htmlFor="tplCharges">TPL Charges</label>
                      <input
                        id="tplCharges"
                        name="tplCharges"
                        value={formData.tplCharges}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <label htmlFor="transportRate">Transport Rate:</label>
                      <input
                        type="text"
                        id="transportRate"
                        name="transportRate"
                        value={formData.transportRate}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <br />

                  <label htmlFor="vehicleLocation">
                  Transport District:
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
                    {['Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya', 'Galle', 'Matara','Hambantota',
                        'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', 'Batticaloa', 'Ampara', 'Trincomalee',
                        'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle'
                      ].map(
                      (transportDistrict) => (
                        <div
                          key={transportDistrict}
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <input
                            type="checkbox"
                            name="transportDistrict"
                            value={transportDistrict}
                            checked={formData.transportDistrict?.includes(
                              transportDistrict
                            )}
                            onChange={() =>
                              toggletransportDistrict(transportDistrict)
                            }
                          />
                          <span style={{ marginLeft: '5px' }}>
                            {transportDistrict}
                          </span>
                        </div>
                      )
                    )}
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
              <br/>

              <div style={borderStyleNew}>
                <CreatePriceListTable cryptoOrders={cryptoOrders} />
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

CreatePriceList.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CreatePriceList;
