// import React, { useCallback, useMemo, useState } from 'react'
// import { ordersList } from '../../Constants/ItemsList';
// import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
// import DeleteIcon from '@mui/icons-material/Delete';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import { Box } from '@mui/material';

// const OrdersManagement = () => {

//   const [rows, setRows] = useState(ordersList)

//   const deleteUser = useCallback((id) => () => {
//     setTimeout(() => {
//       setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     });
//   }, [],
//   );

//   const columns = useMemo(() => [
// {
//   headerName: 'Order Id',
//   field: 'orderId',
//   type: 'string',
//   headerClassName: "super-app-theme--header",
//   width: 200
// },
// {
//   headerName: 'Customer Name',
//   field: 'customerName',
//   type: 'string',
//   headerClassName: "super-app-theme--header",
//   width: 150
// },
// {
//   headerName: 'Order Date',
//   field: 'orderDate',
//   type: 'string',
//   headerClassName: "super-app-theme--header",
//   width: 150
// },
//     {
//       headerName: 'Status',
//       field: 'status',
//       type: 'string',
//       headerClassName: "super-app-theme--header",
//       width: 150
//     },
//     {
//       headerName: 'Actions',
//       field: 'actions',
//       type: 'actions',
//       headerClassName: "super-app-theme--header",
//       width: 100,
//       getActions: (params) => [
//         <GridActionsCellItem
//           icon={<DeleteIcon />}
//           label="Delete"
//           onClick={deleteUser(params.id)}
//         />,
//         <GridActionsCellItem
//           icon={<RemoveRedEyeIcon />}
//           label='View'
//           onClick={() => handleView(params.row)}
//         />,
//       ],
//     },
//   ],
//     [deleteUser],
//   );

// const handleView = (params) => {
// console.log('row : ',params)
// }

//   return (
//     <Box
//         sx={{
//           "& .super-app-theme--header": {
//             backgroundColor: 'secondary.dark'
//           },
//           "& .super-app-theme--rows": {
//             backgroundColor: 'secondary.main'
//           }
//         }}
//       >
//         <DataGrid
//           columns={columns}
//           rows={rows}
//           disableColumnMenu={true}
//           sx={{
//             boxShadow: 2,
//             border: 2,
//             borderColor: 'primary.light'
//           }}
//           getRowClassName={(params) =>
//             'super-app-theme--rows'
//           }
//         />
//       </Box>
//   )
// }

// export default OrdersManagement


import React, { useCallback, useMemo, useState } from 'react';
import { ordersList } from '../../Constants/ItemsList';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box, MenuItem, Select } from '@mui/material';

const OrdersManagement = () => {
  const [rows, setRows] = useState(ordersList);
  const [statusFilter, setStatusFilter] = useState('');

  const deleteUser = useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );

  const handleStatusChange = (row, event) => {
    const updatedRows = rows.map((r) =>
      r.id === row.id ? { ...r, status: event.target.value } : r
    );
    setRows(updatedRows);
  };

  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleView = (params) => {
    console.log('row : ', params);
  };

  const filteredRows = useMemo(() => {
    if (!statusFilter) {
      return rows;
    }
    return rows.filter((row) => row.status === statusFilter);
  }, [rows, statusFilter]);

  const columns = useMemo(
    () => [
      {
        headerName: 'Order Id',
        field: 'orderId',
        type: 'string',
        headerClassName: "super-app-theme--header",
        width: 200
      },
      {
        headerName: 'Customer Name',
        field: 'customerName',
        type: 'string',
        headerClassName: "super-app-theme--header",
        width: 150
      },
      {
        headerName: 'Order Date',
        field: 'orderDate',
        type: 'string',
        headerClassName: "super-app-theme--header",
        width: 150
      },
      {
        headerName: 'Status',
        field: 'status',
        type: 'string',
        headerClassName: 'super-app-theme--header',
        width: 150,
        renderCell: (params) => (
          <Select
            value={params.value}
            onChange={(event) => handleStatusChange(params.row, event)}
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="shipped">Shipped</MenuItem>
            <MenuItem value="delivered">Delivered</MenuItem>
          </Select>
        ),
      },
      {
        headerName: 'Actions',
        field: 'actions',
        type: 'actions',
        headerClassName: 'super-app-theme--header',
        width: 100,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
        ],
      },
    ],
    [deleteUser, handleView]
  );

  return (
    <div>
      <h2>Orders Management</h2>
      <Box
        sx={{
          "& .super-app-theme--header": {
            backgroundColor: 'secondary.dark',
          },
          "& .super-app-theme--rows": {
            backgroundColor: 'secondary.main',
          },
        }}
      >
        <DataGrid
          columns={columns}
          rows={filteredRows}
          disableColumnMenu={true}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
          }}
          getRowClassName={(params) => 'super-app-theme--rows'}
        />
      </Box>
    </div>
  );
};

export default OrdersManagement;