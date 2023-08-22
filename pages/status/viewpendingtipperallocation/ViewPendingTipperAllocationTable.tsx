import React, { FC, ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, TablePagination } from '@mui/material';
import { CryptoOrder, CryptoOrderStatus } from '@/models/crypto_order';
import { Padding } from '@mui/icons-material';

interface ViewPendingTipperAllocationTableProps {
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

const ViewPendingTipperAllocationTable: FC<
  ViewPendingTipperAllocationTableProps
> = ({ cryptoOrders }) => {
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
      orderDate: '',
      orderTime: '',
      orderName: '',
      destination: '',
      loadingProject: '',
      sandQuantity: '',
      sandSize: '',
      totalPrice: '',
      paymentVerificationByCustomer: '',
      paymentVerificationByManual: ''
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
                    Order Number
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Order Date
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Order Time
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
                    Payment Verification By Customer
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Payment Verification By Manual
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
                    <td>{cryptoOrder.orderDate}</td>
                    <td>{cryptoOrder.orderTime}</td>
                    <td>{cryptoOrder.orderName}</td>
                    <td>{cryptoOrder.destination}</td>
                    <td>{cryptoOrder.loadingProject}</td>
                    <td>{cryptoOrder.sandQuantity}</td>
                    <td>{cryptoOrder.sandSize}</td>
                    <td>{cryptoOrder.totalPrice}</td>
                    <td>{cryptoOrder.paymentVerificationByCustomer}</td>
                    <td>{cryptoOrder.paymentVerificationByManual}</td>

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
        </Grid>
      </Container>
    </>
  );
};

ViewPendingTipperAllocationTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

ViewPendingTipperAllocationTable.defaultProps = {
  cryptoOrders: []
};

export default ViewPendingTipperAllocationTable;
