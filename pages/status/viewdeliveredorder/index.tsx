import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import ViewDeliveredOrderTable from './ViewDeliveredOrderTable';
import { styled } from '@mui/material/styles';
import { borderStyle, printButtonStyle } from '../../cssStyles';

function ViewDeliveredOrder() {
  const handlePrint = () => {
    window.print();
  };

  const StyledDiv = styled('div')(borderStyle);

  const [searchTerm, setSearchTerm] = useState('');

  const cryptoOrders: CryptoOrder[] = [
    {
      orderId: '1',
      orderNumber: 'OR12345',
      orderName: 'Sample Order 1',
      destination: 'Destination A',
      loadingProject: 'Project X',
      sandQuantity: '100 tons',
      sandSize: 'Medium',
      totalPrice: '$500',
      paymentVerificationCustomer: 'Verified',
      paymentVerificationManual: 'Pending',
      vehicleNumber: 'XYZ123',
      driverContact: '123-456-7890',
      driverName: 'John Doe',
      mankadaNumber: 'MANK123',
      miningLicenseNumber: 'ML789',
      tplNumber: 'TPL456',
      deliveryConfirmationByCustomer: 'Confirmed',
      deliveryConfirmationByManual: 'Pending'
    },
    {
      orderId: '2',
      orderNumber: 'OR23456',
      orderName: 'Sample Order 2',
      destination: 'Destination B',
      loadingProject: 'Project Y',
      sandQuantity: '75 tons',
      sandSize: 'Fine',
      totalPrice: '$350',
      paymentVerificationCustomer: 'Verified',
      paymentVerificationManual: 'Verified',
      vehicleNumber: 'ABC789',
      driverContact: '987-654-3210',
      driverName: 'Jane Smith',
      mankadaNumber: 'MANK234',
      miningLicenseNumber: 'ML567',
      tplNumber: 'TPL789',
      deliveryConfirmationByCustomer: 'Pending',
      deliveryConfirmationByManual: 'Pending'
    },
    {
      orderId: '3',
      orderNumber: 'OR34567',
      orderName: 'Sample Order 3',
      destination: 'Destination C',
      loadingProject: 'Project Z',
      sandQuantity: '50 tons',
      sandSize: 'Coarse',
      totalPrice: '$250',
      paymentVerificationCustomer: 'Verified',
      paymentVerificationManual: 'Verified',
      vehicleNumber: 'DEF567',
      driverContact: '555-123-4567',
      driverName: 'Mike Johnson',
      mankadaNumber: 'MANK345',
      miningLicenseNumber: 'ML123',
      tplNumber: 'TPL012',
      deliveryConfirmationByCustomer: 'Confirmed',
      deliveryConfirmationByManual: 'Confirmed'
    },
    {
      orderId: '4',
      orderNumber: 'OR45678',
      orderName: 'Sample Order 4',
      destination: 'Destination D',
      loadingProject: 'Project W',
      sandQuantity: '120 tons',
      sandSize: 'Fine',
      totalPrice: '$600',
      paymentVerificationCustomer: 'Verified',
      paymentVerificationManual: 'Pending',
      vehicleNumber: 'LMN456',
      driverContact: '789-012-3456',
      driverName: 'Sarah Lee',
      mankadaNumber: 'MANK456',
      miningLicenseNumber: 'ML901',
      tplNumber: 'TPL345',
      deliveryConfirmationByCustomer: 'Pending',
      deliveryConfirmationByManual: 'Pending'
    },
    {
      orderId: '5',
      orderNumber: 'OR56789',
      orderName: 'Sample Order 5',
      destination: 'Destination E',
      loadingProject: 'Project E',
      sandQuantity: '5 tons',
      sandSize: 'Medium',
      totalPrice: '$5',
      paymentVerificationCustomer: 'Verified',
      paymentVerificationManual: 'Pending',
      vehicleNumber: 'XYZ567',
      driverContact: '5678901234',
      driverName: 'Crist ',
      mankadaNumber: 'MANK567',
      miningLicenseNumber: 'ML567',
      tplNumber: 'TPL567',
      deliveryConfirmationByCustomer: 'Confirmed',
      deliveryConfirmationByManual: 'Pending'
    },
    {
      orderId: '6',
      orderNumber: 'OR67890',
      orderName: 'Sample Order 6',
      destination: 'Destination F',
      loadingProject: 'Project F',
      sandQuantity: '60 tons',
      sandSize: 'Fine',
      totalPrice: '$60',
      paymentVerificationCustomer: 'Verified',
      paymentVerificationManual: 'Verified',
      vehicleNumber: 'ABC678',
      driverContact: '6789012345',
      driverName: 'Jane',
      mankadaNumber: 'MANK678',
      miningLicenseNumber: 'ML678',
      tplNumber: 'TPL678',
      deliveryConfirmationByCustomer: 'Pending',
      deliveryConfirmationByManual: 'Pending'
    },
    {
      orderId: '7',
      orderNumber: 'OR78901',
      orderName: 'Sample Order 7',
      destination: 'Destination G',
      loadingProject: 'Project G',
      sandQuantity: '70 tons',
      sandSize: 'Coarse',
      totalPrice: '$70',
      paymentVerificationCustomer: 'Verified',
      paymentVerificationManual: 'Verified',
      vehicleNumber: 'DEF789',
      driverContact: '7890123456',
      driverName: 'Mike',
      mankadaNumber: 'MANK789',
      miningLicenseNumber: 'ML789',
      tplNumber: 'TPL789',
      deliveryConfirmationByCustomer: 'Confirmed',
      deliveryConfirmationByManual: 'Confirmed'
    },
    {
      orderId: '8',
      orderNumber: 'OR8901',
      orderName: 'Sample Order 8',
      destination: 'Destination H',
      loadingProject: 'Project H',
      sandQuantity: '80 tons',
      sandSize: 'Fine',
      totalPrice: '$80',
      paymentVerificationCustomer: 'Verified',
      paymentVerificationManual: 'Pending',
      vehicleNumber: 'LMN890',
      driverContact: '8901234567',
      driverName: 'Sarah',
      mankadaNumber: 'MANK890',
      miningLicenseNumber: 'ML890',
      tplNumber: 'TPL890',
      deliveryConfirmationByCustomer: 'Pending',
      deliveryConfirmationByManual: 'Pending'
    },
    
  ];

  return (
    <>
      <Head>
        <title>View Delivered Order</title>
      </Head>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          marginTop={4}
        >
          <Grid item xs={12}>
            <Card>
              <StyledDiv>
                <h2 style={{ textAlign: 'center' }}>VIEW DELIVERED ORDER</h2>

                <Divider />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '300px' }}
                  />
                </div>

                <br />

                <ViewDeliveredOrderTable
                  cryptoOrders={cryptoOrders.filter((order) =>
                    Object.values(order).some((value) =>
                      value
                        .toString()
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                  )}
                />

                {/* <ViewDeliveredOrderTable cryptoOrders={cryptoOrders} /> */}

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                    // gap: '20px'
                  }}
                >
                  <Button
                    sx={{ ...printButtonStyle, variant: 'contained' }}
                    onClick={handlePrint}
                  >
                    Print
                  </Button>
                </div>
              </StyledDiv>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ViewDeliveredOrder.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ViewDeliveredOrder;
