import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import ViewPendingPaymentVerificationTable from './ViewPendingPaymentVerificationTable';
import { styled } from '@mui/material/styles';
import { borderStyle, printButtonStyle } from '../../cssStyles';

function ViewPendingPaymentVerification() {
  const handlePrint = () => {
    window.print();
  };

  const StyledDiv = styled('div')(borderStyle);

  const cryptoOrders: CryptoOrder[] = [
    {
      orderId: '00001',
      orderNumber: '78',
      orderName: 'Test02',
      destination: 'XYZ',
      loadingProject: 'XYZZ',
      sandQuantity: '32',
      sandSize: '5',
      totalPrice: '50000',
      paymentReciept: '45786',
      paymentStatus: '0'
    },
    {
      orderId: '00002',
      orderNumber: '78',
      orderName: 'Test02',
      destination: 'XYZ',
      loadingProject: 'XYZZ',
      sandQuantity: '32',
      sandSize: '5',
      totalPrice: '50000',
      paymentReciept: '45786',
      paymentStatus: '0'
    },
    {
      orderId: '00003',
      orderNumber: '78',
      orderName: 'Test02',
      destination: 'XYZ',
      loadingProject: 'XYZZ',
      sandQuantity: '32',
      sandSize: '5',
      totalPrice: '50000',
      paymentReciept: '45786',
      paymentStatus: '0'
    },
    {
      orderId: '00004',
      orderNumber: '78',
      orderName: 'Test02',
      destination: 'XYZ',
      loadingProject: 'XYZZ',
      sandQuantity: '32',
      sandSize: '5',
      totalPrice: '50000',
      paymentReciept: '45786',
      paymentStatus: '0'
    },
    {
      orderId: '00005',
      orderNumber: '78',
      orderName: 'Test02',
      destination: 'XYZ',
      loadingProject: 'XYZZ',
      sandQuantity: '32',
      sandSize: '5',
      totalPrice: '50000',
      paymentReciept: '45786',
      paymentStatus: '0'
    },
    {
      orderId: '00006',
      orderNumber: '78',
      orderName: 'Test02',
      destination: 'XYZ',
      loadingProject: 'XYZZ',
      sandQuantity: '32',
      sandSize: '5',
      totalPrice: '50000',
      paymentReciept: '45786',
      paymentStatus: '0'
    },
    {
      orderId: '00007',
      orderNumber: '4',
      orderName: 'Test01',
      destination: 'ABC',
      loadingProject: 'ABCD',
      sandQuantity: '56',
      sandSize: '10',
      totalPrice: '100000',
      paymentReciept: '58962',
      paymentStatus: '1'
    }
  ];

  return (
    <>
      <Head>
        <title>View Pending Payment Verification</title>
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
                <h2 style={{ textAlign: 'center' }}>
                  VIEW PENDING PAYMENT VERIFICATION
                </h2>

                <Divider />
                <br />
                <ViewPendingPaymentVerificationTable
                  cryptoOrders={cryptoOrders}
                />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px'
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

ViewPendingPaymentVerification.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ViewPendingPaymentVerification;
