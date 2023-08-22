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
    pendingOrderId: '',
    orderNumber: '',
    name: '',
    destination: '',
    loadingProject: '',
    sandQuantity: '',
    sandSize: '',
    totalPrice: '',
    accountNumber: '',
    accountName: '',
    reference: '',
    paymentDoneByDate: '',
    paymentReciept: '',
    paymentStatus: '',
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
        <title>Pending Payment Verification</title>
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
                  PENDING PAYMENT VERIFICATION
                </h2>
                <Divider />
                {/* <CardContent> */}
                  <div style={formBorder}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="pendingOrderId">
                          Pending Order ID:
                        </label>
                        <input
                          type="text"
                          id="pendingOrderId"
                          name="pendingOrderId"
                          value={formData.pendingOrderId}
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
                        <label htmlFor="sandQuantity">Sand Quantiity:</label>
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

                    <label htmlFor="totalPrice" style={{fontWeight: 'bold'}}>Payment Methed (Online)</label>

                    <Divider />
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

                      <div style={{ flex: 1 }}>
                        <label htmlFor="accountName">Account Name:</label>
                        <input
                          type="text"
                          id="accountName"
                          name="accountName"
                          value={formData.accountName}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <br />
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <label htmlFor="reference">Reference:</label>
                        <input
                          type="text"
                          id="reference"
                          name="reference"
                          value={formData.reference}
                          onChange={handleChange}
                          required
                          style={inputStyle}
                        />
                      </div>

                      <div style={{ flex: 1 }}>
                        <label htmlFor="paymentDoneByDate">
                          Payment Done By Date:
                        </label>
                        <input
                          type="datetime-local"
                          id="paymentDoneByDate"
                          name="paymentDoneByDate"
                          value={formData.paymentDoneByDate}
                          onChange={handleChange}
                          required
                          style={selectFullStyle}
                        />
                      </div>
                    </div>

                    <br />

                    <label htmlFor="paymentMethod" style={{fontWeight: 'bold'}}>
                      Payment Method (Deposit):
                    </label>

                    <Divider />
                    <br />

                    <div>
                      <label htmlFor="paymentReciept">Payment Reciept</label>
                      <input
                        type="file"
                        id="paymentReciept"
                        name="paymentReciept"
                        onChange={handleImageChange}
                        accept="image/*"
                        required
                        style={inputStyle}
                      />
                    </div>

                    <br />
                    <label htmlFor="paymentStatus">Payment Status:</label>
                    <input
                      id="paymentStatus"
                      name="paymentStatus"
                      value={formData.paymentStatus}
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
                          checked={formData.pendingOrderId === 'active'}
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
                          checked={formData.pendingOrderId === 'inactive'}
                          onChange={handleChange}
                        />
                        is Inactive
                      </label>
                    </div>
                    <br />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px'
                      }}
                    >
                      <Button sx={saveButtonStyle}>Approve</Button>

                      <Button sx={cancelButtonStyle}>Reject</Button>
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
