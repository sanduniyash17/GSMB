import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import SidebarLayout from '@/layouts/SidebarLayout';
import Button from '@mui/material/Button';
import { Container, Grid, Card, CardContent, Divider } from '@mui/material';
import Footer from '@/components/Footer';

function PendingTipperAllocation() {
  useEffect(() => {
    flatpickr('#datetimepicker', {
      enableTime: true,
      dateFormat: 'Y-m-d H:i'
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const toggleVehicleLocation = (vehicleLocation) => {
    const updatedVehicleLocations = formData.vehicleLocation.includes(
      vehicleLocation
    )
      ? formData.vehicleLocation.filter((d) => d !== vehicleLocation)
      : [...formData.vehicleLocation, vehicleLocation];

    setFormData((prevFormData) => ({
      ...prevFormData,
      vehicleLocation: updatedVehicleLocations
    }));
  };

  const toggleAvailableTippers = (availableTippers) => {
    const updatedAvailableTipperss = formData.availableTippers.includes(
      availableTippers
    )
      ? formData.availableTippers.filter((d) => d !== availableTippers)
      : [...formData.availableTippers, availableTippers];

    setFormData((prevFormData) => ({
      ...prevFormData,
      availableTippers: updatedAvailableTipperss
    }));
  };

  const [formData, setFormData] = useState({
    orderId: '',
    orderNumber: '',
    orderDate: '',
    orderTime: '',
    name: '',
    destination: '',
    loadingProject: '',
    sandQuality: '',
    sandSize: '',
    paymentVerificationBy: '',
    vehicleLocation: [],
    availableTippers: [],
    estimateDeliveryDate: '',
    view: ''
  });

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

  // select Full style

  const selectFullStyle = {
    width: '100%',
    height: '30px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px'
  };

  // select style

  const selectStyle = {
    width: '50%',
    height: '30px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px'
  };

  const allocateButtonStyle = {
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

  return (
    <>
      <Head>
        <title>Pending Tipper Allocation</title>
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
                <h2 style={{ textAlign: 'center' }}>
                  PENDING TIPPER ALLOCATION
                </h2>
                <Divider />
                {/* <CardContent> */}
                  <div style={formBorder}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="orderId">Order ID:</label>
                        <input
                          type="text"
                          id="orderId"
                          name="OrderId"
                          value={formData.OrderId}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="orderNumber">Order Number:</label>
                        <input
                          type="text"
                          id="orderNumber"
                          name="orderNumber"
                          value={formData.orderNumber}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <br />

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="orderDate">Order Date:</label>
                        <input
                          type="dateTime"
                          id="orderDate"
                          name="orderDate"
                          value={formData.orderDate}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>

                      <div style={{ flex: 1 }}>
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <br />

                    <label htmlFor="destination">Destination:</label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      style={selectFullStyle}
                    />
                    <br />
                    <br />

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="loadingProject">Loading Project:</label>
                        <input
                          type="text"
                          id="loadingProject"
                          name="loadingProject"
                          value={formData.loadingProject}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>

                      <div style={{ flex: 1 }}>
                        <label htmlFor="sandQuality">Sand Quality:</label>
                        <input
                          type="text"
                          id="sandQuality"
                          name="sandQuality"
                          value={formData.sandQuality}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <br />

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="sandSize">Sand Size:</label>
                        <input
                          type="text"
                          id="sandSize"
                          name="sandSize"
                          value={formData.sandSize}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>

                      <div style={{ flex: 1 }}>
                        <label htmlFor="paymentVerificationBy">
                          Payment Verification By:
                        </label>
                        <input
                          type="text"
                          id="paymentVerificationBy"
                          name="paymentVerificationBy"
                          value={formData.paymentVerificationBy}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                    </div>

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
                      {['Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya', 'Galle', 'Matara','Hambantota',
                        'Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya', 'Batticaloa', 'Ampara', 'Trincomalee',
                        'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle'
                      ].map(
                        (vehicleLocation) => (
                          <div
                            key={vehicleLocation}
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <input
                              type="checkbox"
                              name="vehicleLocation"
                              value={vehicleLocation}
                              checked={formData.vehicleLocation?.includes(
                                vehicleLocation
                              )} // Changed to `destination`
                              onChange={() =>
                                toggleVehicleLocation(vehicleLocation)
                              }
                            />
                            <span style={{ marginLeft: '5px' }}>
                              {vehicleLocation}
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    <br />

                    <label htmlFor="availableTippers">Available Tipper:</label>
                    <div
                      style={{
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                        maxHeight: '100px',
                        overflowY: 'auto'
                      }}
                    >
                      {['Tipper 01', 'Tipper 02', 'Tipper 03','Tipper 04', 'Tipper 05', 'Tipper 06'].map(
                        (availableTippers) => (
                          <div
                            key={availableTippers}
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <input
                              type="checkbox"
                              name="availableTippers"
                              value={availableTippers}
                              checked={formData.availableTippers?.includes(
                                availableTippers
                              )}
                              onChange={() =>
                                toggleAvailableTippers(availableTippers)
                              }
                            />
                            <span style={{ marginLeft: '5px' }}>
                              {availableTippers}
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    <br />

                    <label htmlFor="estimateDeliveryDate">
                      Estimate Delivery Date:
                    </label>
                    <div style={{ flex: 1 }}>
                      <input
                        type="datetime-local"
                        id="estimateDeliveryDate"
                        name="estimateDeliveryDate"
                        value={formData.estimateDeliveryDate}
                        onChange={handleChange}
                        required
                        style={{ ...selectStyle, width: '200px' }}
                      />

                      <br />
                      <br />

                      <div>
                        <label htmlFor="active">
                          <input
                            type="radio"
                            id="active"
                            name="active"
                            value="active"
                            checked={formData.orderId === 'active'}
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
                            checked={formData.orderId === 'inactive'}
                            onChange={handleChange}
                          />
                          is Inactive
                        </label>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px'
                      }}
                    >
                      <Button sx={allocateButtonStyle}>Allocate</Button>
                    </div>
                  </div>
                {/* </CardContent> */}
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

PendingTipperAllocation.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default PendingTipperAllocation;
