import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import {
  Container,
  Grid,
  Card,
  Divider,
  Button
} from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import ViewConfirmOrderTable from './ViewConfirmOrderTable';
import { styled } from '@mui/material/styles';
import { borderStyle, printButtonStyle } from '../../cssStyles';

function ViewConfirmOrder() {
  const handlePrint = () => {
    window.print();
  };

  const StyledDiv = styled('div')(borderStyle);

  const cryptoOrders: CryptoOrder[] = [
    {
      orderId: '1',
      orderNumber: '4',
      orderName: 'DHDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    },
    {
      orderId: '2',
      orderNumber: '4',
      orderName: 'DHDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    },
    {
      orderId: '3',
      orderNumber: '4',
      orderName: 'DHDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    },
    {
      orderId: '4',
      orderNumber: '4',
      orderName: 'DHDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    },
    {
      orderId: '5',
      orderNumber: '4',
      orderName: 'DHDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    },
    {
      orderId: '6',
      orderNumber: '4',
      orderName: 'HDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    },
    {
      orderId: '7',
      orderNumber: '4',
      orderName: 'DHDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    },
    {
      orderId: '8',
      orderNumber: '4',
      orderName: 'DHDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    },
    {
      orderId: '9',
      orderNumber: '4',
      orderName: 'DHDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    },
    {
      orderId: '10',
      orderNumber: '4',
      orderName: 'DHDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    },
    {
      orderId: '11',
      orderNumber: '4',
      orderName: 'DHDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    },
    {
      orderId: '12',
      orderNumber: '4',
      orderName: 'DHDH',
      destination: 'DFHFHD',
      loadingProject: 'DHDH',
      sandQuantity: 'DHDH',
      sandSize: 'DFHDH',
      totalPrice: 'DHDHG',
      paymentVerificationCustomer: 'DGDF',
      paymentVerificationManual: 'DFD',
      vehicleNumber: 'DFGDG',
      driverContact: 'O;LK',
      driverName: 'WWAA',
      mankadaNumber: 'WEQEW',
      miningLicenseNumber: 'IOY',
      tplNumber: 'W3EE',
      statusOfDelivery: 'wsrtwrtehmjklio'
    }
  ];

  return (
    <>
      <Head>
        <title>View Confirm Order</title>
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
              <StyledDiv>
                <h2 style={{ textAlign: 'center' }}>VIEW CONFIRM ORDER</h2>

                <Divider />
                <br />
                <ViewConfirmOrderTable cryptoOrders={cryptoOrders} />

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

ViewConfirmOrder.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ViewConfirmOrder;
