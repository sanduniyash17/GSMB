import React, { FC, ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, TablePagination } from '@mui/material';
import { CryptoOrder, CryptoOrderStatus } from '@/models/crypto_order';

interface ViewDeliveredOrderTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
}

interface Filters {
  status?: CryptoOrderStatus;
}

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: CryptoOrder[],
  page: number,
  limit: number
): CryptoOrder[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const ViewDeliveredOrderTable: FC<ViewDeliveredOrderTableProps> = ({
  cryptoOrders
}) => {
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
  const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  );

  const cryptoOrder: CryptoOrder[] = [
    {
      orderId: '',
      orderNumber: '',
      orderName: '',
      destination: '',
      loadingProject: '',
      sandQuantity: '',
      sandSize: '',
      totalPrice: '',
      paymentVerificationCustomer: '',
      paymentVerificationManual: '',
      vehicleNumber: '',
      driverContact: '',
      driverName: '',
      mankadaNumber: '',
      miningLicenseNumber: '',
      tplNumber: '',
      deliveryConfirmationByCustomer: '',
      deliveryConfirmationByManual: ''
    }
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Grid item xs={12}>
          <div
            style={{
              maxHeight: 'auto',
              overflowX: 'auto',
              overflowY: 'hidden'
            }}
          >
            <table
              style={{
                width: '100%',
                border: '1px solid #29818a',
                borderRadius: '10px',
                borderStyle: 'solid'
              }}
            >
              <thead
                style={{
                  backgroundColor: '#29818a',
                  color: 'white',
                  fontWeight: 'normal'
                }}
              >
                <tr style={{ padding: '10px', fontWeight: 'normal' }}>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>No</th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Order No
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Name
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Destination
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Loading Project
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Sand Quantity
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Sand Size
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Total Price
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Payment Verification (Customer)
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Payment Verification (Manual)
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Vehicle Number
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Driver Contact
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Driver Name
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Mankada Number
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Mining License Number
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    TPL Number
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Delivery Confirmation By Customer
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Delivery Confirmation By mANUAL
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody
                style={{
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {paginatedCryptoOrders.map((cryptoOrder) => (
                  <tr hover key={cryptoOrder.id}>
                    <td>{cryptoOrder.orderId}</td>
                    <td>{cryptoOrder.orderNumber}</td>
                    <td>{cryptoOrder.orderName}</td>
                    <td>{cryptoOrder.destination}</td>
                    <td>{cryptoOrder.loadingProject}</td>
                    <td>{cryptoOrder.sandQuantity}</td>
                    <td>{cryptoOrder.sandSize}</td>
                    <td>{cryptoOrder.totalPrice}</td>
                    <td>{cryptoOrder.paymentVerificationCustomer}</td>
                    <td>{cryptoOrder.paymentVerificationManual}</td>
                    <td>{cryptoOrder.vehicleNumber}</td>
                    <td>{cryptoOrder.driverContact}</td>
                    <td>{cryptoOrder.driverName}</td>
                    <td>{cryptoOrder.mankadaNumber}</td>
                    <td>{cryptoOrder.miningLicenseNumber}</td>
                    <td>{cryptoOrder.tplNumber}</td>
                    <td>{cryptoOrder.deliveryConfirmationByCustomer}</td>
                    <td>{cryptoOrder.deliveryConfirmationByManual}</td>

                    <td>
                      <div
                        style={{
                          display: 'flex',
                          textAlign: 'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                          maxWidth: '240px',
                          margin: '0 auto',
                          paddingLeft: '10px',
                          paddingRight: '10px'
                        }}
                      >
                        <button
                          style={{
                            background: '#ffffff',
                            color: '#29818a',
                            borderRadius: '10px',
                            border: '3px solid #29818a',
                            cursor: 'pointer',
                            padding: '5px 10px',
                            width: '75px',
                            marginRight: '5px',
                            fontFamily: 'Roboto',
                            fontWeight: 'normal',
                            transition:
                              'background 0.3s, color 0.3s, border-color 0.3s'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#29818a';
                            e.target.style.color = '#ffffff';
                            e.target.style.borderColor = '#29818a';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = '#ffffff';
                            e.target.style.color = '#29818a';
                            e.target.style.borderColor = '#29818a';
                          }}
                          onClick={() => onView(row)}
                        >
                          View
                        </button>

                        {/* Approve Button */}
                        <button
                          style={{
                            background: '#ffffff',
                            color: '#25476a',
                            borderRadius: '10px',
                            border: '3px solid #25476a',
                            cursor: 'pointer',
                            padding: '5px 10px',
                            width: '75px',
                            marginRight: '5px',
                            fontFamily: 'Roboto',
                            fontWeight: 'normal',
                            transition:
                              'background 0.3s, color 0.3s, border-color 0.3s'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#25476a';
                            e.target.style.color = '#ffffff';
                            e.target.style.borderColor = '#25476a';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = '#ffffff';
                            e.target.style.color = '#25476a';
                            e.target.style.borderColor = '#25476a';
                          }}
                          onClick={() => onApprove(row)}
                        >
                          Approve
                        </button>

                        {/* Reject Button */}
                        <button
                          style={{
                            background: '#ffffff',
                            color: '#d22417',
                            borderRadius: '10px',
                            border: '3px solid #d22417',
                            cursor: 'pointer',
                            padding: '5px 10px',
                            width: '75px',
                            marginRight: '5px',
                            fontFamily: 'Roboto',
                            fontWeight: 'normal',
                            transition:
                              'background 0.3s, color 0.3s, border-color 0.3s'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#d22417';
                            e.target.style.color = '#ffffff';
                            e.target.style.borderColor = '#d22417';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = '#ffffff';
                            e.target.style.color = '#d22417';
                            e.target.style.borderColor = '#d22417';
                          }}
                          onClick={() => onReject(row)}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Box p={2}>
            <TablePagination
              component="div"
              count={filteredCryptoOrders.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[5, 10, 25, 30]}
            />
          </Box>
          {/* </Card> */}
        </Grid>
      </Container>
    </>
  );
};

ViewDeliveredOrderTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

ViewDeliveredOrderTable.defaultProps = {
  cryptoOrders: []
};

export default ViewDeliveredOrderTable;
