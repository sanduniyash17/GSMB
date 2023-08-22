import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import SidebarLayout from '@/layouts/SidebarLayout';
import Button from '@mui/material/Button';
import { Container, Grid, Card, CardContent, Divider } from '@mui/material';
import Footer from '@/components/Footer';

function PendingPaymentVerification() {
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

  const [formData, setFormData] = useState({
    orderId: '',
    orderNumber: '',
    orderDate: '',
    orderTime: '',
    OrderName: '',
    destination: '',
    loadingProject: '',
    sandQuantity: '',
    sandSize: '',
    totalPrice: '',
    paymentVerificationBy: '',
    vehicleNumber: '',
    driverContact: '',
    driverName: '',
    miningPointNumber: '',
    miningLicenseNumber: '',
    tplNumber: '',
    statusOfOrder: ''
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

  const selectFullStyle = {
    width: '100%',
    height: '30px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px'
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
        <title>Confirm Order</title>
      </Head>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          marginTop={4}
        >
          <Grid item xs={12}>
            <Card>
              <div style={borderStyle}>
                <h2 style={{ textAlign: 'center' }}>CONFIRM ORDER</h2>
                <Divider />
                {/* <CardContent> */}
                  <div style={formBorder}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="orderId">Order ID:</label>
                        <input
                          type="text"
                          id="orderId"
                          name="orderId"
                          value={formData.orderId}
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
                          type="text"
                          id="orderDate"
                          name="orderDate"
                          value={formData.orderDate}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>

                      <div style={{ flex: 1 }}>
                        <label htmlFor="orderTime">Order Time:</label>
                        <input
                          type="text"
                          id="orderTime"
                          name="orderTime"
                          value={formData.orderTime}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <br />

                    <label htmlFor="OrderName">Name:</label>
                    <input
                      type="text"
                      id="OrderName"
                      name="OrderName"
                      value={formData.OrderName}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />

                    <br />
                    <br />

                    <label htmlFor="destination">Destination:</label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      style={inputStyle}
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
                        <label htmlFor="sandQuantity">Sand Quantity:</label>
                        <input
                          type="text"
                          id="sandQuantity"
                          name="sandQuantity"
                          value={formData.sandQuantity}
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
                        <label htmlFor="totalPrice">Total Price:</label>
                        <input
                          type="text"
                          id="totalPrice"
                          name="totalPrice"
                          value={formData.totalPrice}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <br />

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
                    <br />
                    <br />

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="vehicleNumber">Vehicle Number:</label>
                        <input
                          type="text"
                          id="vehicleNumber"
                          name="vehicleNumber"
                          value={formData.vehicleNumber}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>

                      <div style={{ flex: 1 }}>
                        <label htmlFor="driverContact">Driver Contact:</label>
                        <input
                          type="text"
                          id="driverContact"
                          name="driverContact"
                          value={formData.driverContact}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <br />

                    <label htmlFor="driverName">Driver Name:</label>
                    <input
                      type="text"
                      id="driverName"
                      name="driverName"
                      value={formData.driverName}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                    <br />
                    <br />

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="miningPointNumber">
                          Mining Point Number
                        </label>
                        <input
                          id="miningPointNumber"
                          name="miningPointNumber"
                          value={formData.miningPointNumber}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>

                      <br />
                      <div style={{ flex: 1 }}>
                        <label htmlFor="miningLicenseNumber">
                          Mining License Number:
                        </label>
                        <input
                          id="miningLicenseNumber"
                          name="miningLicenseNumber"
                          value={formData.miningLicenseNumber}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <br />

                    <label htmlFor="tplNumber">TPL Number:</label>
                    <input
                      type="text"
                      id="tplNumber"
                      name="tplNumber"
                      value={formData.tplNumber}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                    <br />
                    <br />

                    <label htmlFor="statusOfOrder">Status Of Order:</label>
                    <input
                      type="text"
                      id="statusOfOrder"
                      name="statusOfOrder"
                      value={formData.statusOfOrder}
                      onChange={handleChange}
                      required
                      style={inputStyle}
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

PendingPaymentVerification.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default PendingPaymentVerification;
