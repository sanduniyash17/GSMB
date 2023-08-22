import React, { useState } from 'react';
import Head from 'next/head';
import { CryptoOrder } from '@/models/crypto_order';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import Footer from '@/components/Footer';
import ViewPendingTipperAllocationTable from './ViewPendingTipperAllocationTable';
import { styled } from '@mui/material/styles';
import { borderStyle, printButtonStyle } from '../../cssStyles';

function ViewPendingTipperAllocation() {
  const handlePrint = () => {
    window.print();
  };

  const StyledDiv = styled('div')(borderStyle);

  const cryptoOrders: CryptoOrder[] = [
    {
      orderId: '1001',
      orderNumber: '4',
      orderDate: '2023.6.5',
      orderTime: '5.17',
      orderName: 'Test01',
      destination: 'ABC',
      loadingProject: 'ABCD',
      sandQuantity: '56',
      sandSize: '10',
      totalPrice: '100000',
      paymentVerificationByCustomer: 'fssf',
      paymentVerificationByManual: 'dadfasd'
    },
    {
      orderId: '1002',
      orderNumber: '78',
      orderDate: '2023.6.5',
      orderTime: '5.17',
      orderName: 'Test02',
      destination: 'XYZ',
      loadingProject: 'XYZZ',
      sandQuantity: '32',
      sandSize: '5',
      totalPrice: '50000',
      paymentVerificationByCustomer: 'trretery',
      paymentVerificationByManual: 'dadfkuikuikasd'
    },
    {
      orderId: '1003',
      orderNumber: '78',
      orderDate: '2023.6.5',
      orderTime: '5.17',
      orderName: 'Test02',
      destination: 'XYZ',
      loadingProject: 'XYZZ',
      sandQuantity: '32',
      sandSize: '5',
      totalPrice: '50000',
      paymentVerificationByCustomer: 'trretery',
      paymentVerificationByManual: 'dadfkuikuikasd'
    },
    {
      orderId: '1004',
      orderNumber: '78',
      orderDate: '2023.6.5',
      orderTime: '5.17',
      orderName: 'Test02',
      destination: 'XYZ',
      loadingProject: 'XYZZ',
      sandQuantity: '32',
      sandSize: '5',
      totalPrice: '50000',
      paymentVerificationByCustomer: 'trretery',
      paymentVerificationByManual: 'dadfkuikuikasd'
    },
    {
      orderId: '1005',
      orderNumber: '78',
      orderDate: '2023.6.5',
      orderTime: '5.17',
      orderName: 'Test02',
      destination: 'XYZ',
      loadingProject: 'XYZZ',
      sandQuantity: '32',
      sandSize: '5',
      totalPrice: '50000',
      paymentVerificationByCustomer: 'trretery',
      paymentVerificationByManual: 'dadfkuikuikasd'
    }
  ];

  return (
    <>
      <Head>
        <title>View Pending Tipper Allocation</title>
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
                  VIEW PENDING TIPPER ALLOCATION
                </h2>

                <Divider />

                <br />
                <ViewPendingTipperAllocationTable cryptoOrders={cryptoOrders} />

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

ViewPendingTipperAllocation.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ViewPendingTipperAllocation;
