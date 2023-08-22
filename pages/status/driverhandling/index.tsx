import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { Container, Grid, Card, Divider, Button } from '@mui/material';
import SidebarLayout from '@/layouts/SidebarLayout';
import { styled } from '@mui/material/styles';
import Footer from '@/components/Footer';
import DriverHandlingTable from './DriverHandlingTable';
import { borderStyle, printButtonStyle } from '../../cssStyles';

function DriverHandling() {
  const handlePrint = () => {
    window.print();
  };

  const StyledDiv = styled('div')(borderStyle);

  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  const cryptoOrders = [
    {
      driveID: '789654123',
      driverName: 'Perera',
      contactNumber: '0123456789',
      vehicleNumber: 'CBK5698',
      licenseNumber: '876454',
      status: '1'
    },
    {
      driveID: '789654125',
      driverName: 'Dias',
      contactNumber: '0987654321',
      vehicleNumber: 'CBK5699',
      licenseNumber: '876455',
      status: '0'
    }
  ];

   const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredCryptoOrders = query
      ? cryptoOrders.filter(
          (order) =>
            order.driverName.toLowerCase().includes(query) ||
            order.driveID.includes(query) ||
            order.contactNumber.includes(query) ||
            order.vehicleNumber.includes(query) ||
            order.licenseNumber.includes(query) ||
            order.status.includes(query)
        )
      : cryptoOrders;

    setFilteredCryptoOrders(filteredCryptoOrders);
  };

  const filteredCryptoOrders = searchQuery
    ? cryptoOrders.filter(
        (order) =>
          order.driverName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.driveID.includes(searchQuery) ||
          order.contactNumber.includes(searchQuery) ||
          order.vehicleNumber.includes(searchQuery) ||
          order.licenseNumber.includes(searchQuery) ||
          order.status.includes(searchQuery)
      )
    : cryptoOrders;

  return (
    <>
      <Head>
        <title>Driver Handling</title>
      </Head>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          spacing={2}
          marginTop={4}
        >
          <Grid item xs={12}>
            <Card>
              <StyledDiv>
                <h2 style={{ textAlign: 'center' }}>DRIVER HANDLING</h2>
                <Divider />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => {
                    if (inputRef.current) {
                      inputRef.current.select();
                    }
                  }}
                />
                <br />
                <DriverHandlingTable cryptoOrders={filteredCryptoOrders} />
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

DriverHandling.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DriverHandling;
