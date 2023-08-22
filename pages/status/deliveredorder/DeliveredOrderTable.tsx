import React, { FC } from 'react';

interface Column {
  Header: string;
  accessor: string;
}

interface Row {
  [key: string]: string | number;
}

interface DeliveredOrderTableProps {
  columns: Column[];
  data: Row[];
}

const DeliveredOrderTable: FC<DeliveredOrderTableProps> = ({ columns, data }) => {
  const handleViewDetails = (row: Row): void => {
    // handle the view details logic based on the row data
    console.log("Viewing details for row:", row);
  };

  return (
    <table style={{ width: "100%", border: "1px solid #29818a", marginTop: '20px', borderRadius: '10px' }}>
      <thead style={{ backgroundColor: "#29818a" }}>
        <tr>
          {columns.map((column) => (
            <th key={column.Header} style={{ padding: "10px", color: "white", fontWeight: 'normal'}}>
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.accessor} style={{ padding: "10px", border: "1px solid #29818a" }}>
                {column.accessor === "view" ? (
                  <button
                    style={{
                      background: "#29818a",
                      border: "1px solid #29818a",
                      color: "#ffffff",
                      borderRadius: "5px",
                      cursor: "pointer",
                      padding: "5px 10px",
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onClick={() => handleViewDetails(row)}>
                    View
                  </button>
                ) : (
                  row[column.accessor]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeliveredOrderTable;
