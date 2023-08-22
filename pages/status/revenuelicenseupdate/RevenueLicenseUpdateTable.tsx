import React, { FC, ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, TablePagination } from '@mui/material';
import { CryptoOrder, CryptoOrderStatus } from '@/models/crypto_order';

interface RevenueLicenseUpdateTableProps {
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

const RevenueLicenseUpdateTable: FC<RevenueLicenseUpdateTableProps> = ({
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
      vehicleNumber: '',
      capacity: '',
      ownerName: '',
      mobileNumber: '',
      revenueLicenseNumber: '',
      expireDate: ''
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
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Vehicle Number
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Capacity
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Owner Name
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Mobile Number
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Revenue License Number
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    Expire Date
                  </th>
                  <th style={{ padding: '10px', fontWeight: 'normal' }}>
                    View
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
                    <td>{cryptoOrder.vehicleNumber}</td>
                    <td>{cryptoOrder.capacity}</td>
                    <td>{cryptoOrder.ownerName}</td>
                    <td>{cryptoOrder.mobileNumber}</td>
                    <td>{cryptoOrder.revenueLicenseNumber}</td>
                    <td>{cryptoOrder.expireDate}</td>

                    <td>
                      <div
                        style={{
                          display: 'flex',
                          textAlign: 'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                          maxWidth: '240px',
                          margin: '0 auto'
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

RevenueLicenseUpdateTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

RevenueLicenseUpdateTable.defaultProps = {
  cryptoOrders: []
};

export default RevenueLicenseUpdateTable;
