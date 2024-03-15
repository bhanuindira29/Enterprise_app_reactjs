// import React, { useCallback, useMemo, useState } from 'react';
// import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { productList } from './../../Constants/ItemsList';
// import { Edit } from '@mui/icons-material';
// import { Box, IconButton, Typography } from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import FormPage from '../FormPage';

// const ProductMagagement = () => {

//   const [rows, setRows] = useState(productList)
//   const [openDialog, setOpenDialog] = useState(false);
//   const [currentRow, setCurrentRow] = useState({})
//   const [isEditing, setIsEditing] = useState(false)

//   const deleteUser = useCallback((id) => () => {
//     setTimeout(() => {
//       setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//     });
//   }, [],
//   );

//   const editUser = (params) => {
//     setCurrentRow(params)
//     setIsEditing(true)
//     setOpenDialog(true)
//   }

//   const columns = useMemo(() => [
//     {
//       headerName: 'Product Name',
//       field: 'productName',
//       type: 'string',
//       headerClassName: "super-app-theme--header",
//       width: 200
//     },
//     {
//       headerName: 'Category',
//       field: 'category',
//       type: 'string',
//       headerClassName: "super-app-theme--header",
//       width: 150
//     },
//     {
//       headerName: 'Price',
//       field: 'price',
//       type: 'number',
//       headerClassName: "super-app-theme--header",
//       width: 150
//     },
//     {
//       headerName: 'Stock Quantity',
//       field: 'stockQuantity',
//       type: 'number',
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
//           icon={<Edit />}
//           label='Edit'
//           onClick={() => editUser(params.row)}
//         />,
//       ],
//     },
//   ],
//     [deleteUser],
//   );

//   const handleRowAdd = () => {
//     setCurrentRow({
//       id: rows.length + 1,
//       productName: "",
//       category: "",
//       price: null,
//       stockQuantity: null
//     })
//     setOpenDialog(true)
//   }

//   const handleSave = (data) => {
//     if (isEditing) {
//       setRows((prev) => prev.map((product) => {
//         if (product.id === data.id) return data
//         return product
//       }))
//     } else {
//       setRows([...rows, data])
//     }
//     setOpenDialog(false)
//     setCurrentRow({
//       id: null,
//       productName: "",
//       category: "",
//       price: null,
//       stockQuantity: null
//     })
//     setIsEditing(false)
//   }

//   return (
//     <>
//       <Box sx={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//       }}>
//         <Typography>
//           Product Management
//         </Typography>
//         <IconButton onClick={() => handleRowAdd()}>
//           <AddCircleIcon />
//         </IconButton>
//       </Box>
//       <FormPage
//         handleSave={handleSave}
//         rowsLength={rows.length}
//         openDialog={openDialog}
//         setOpenDialog={setOpenDialog}
//         currentRow={currentRow}
//         setCurrentRow={setCurrentRow}
//       />
//       <Box
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
//     </>
//   )
// }

// export default ProductMagagement;

import React, { useCallback, useMemo, useState } from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { productList } from './../../Constants/ItemsList';
import { Edit } from '@mui/icons-material';
import { Box, IconButton, Typography, Grid } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormPage from '../FormPage';

const ProductMagagement = () => {

  const [rows, setRows] = useState(productList)
  const [openDialog, setOpenDialog] = useState(false);
  const [currentRow, setCurrentRow] = useState({})
  const [isEditing, setIsEditing] = useState(false)

  const deleteUser = useCallback((id) => () => {
    setTimeout(() => {
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    });
  }, []);

  const editUser = (params) => {
    setCurrentRow(params)
    setIsEditing(true)
    setOpenDialog(true)
  }

  const columns = useMemo(() => [
    {
      headerName: 'Product Name',
      field: 'productName',
      type: 'string',
      headerClassName: "super-app-theme--header",
      width: 200
    },
    {
      headerName: 'Category',
      field: 'category',
      type: 'string',
      headerClassName: "super-app-theme--header",
      width: 150
    },
    {
      headerName: 'Price',
      field: 'price',
      type: 'number',
      headerClassName: "super-app-theme--header",
      width: 150
    },
    {
      headerName: 'Stock Quantity',
      field: 'stockQuantity',
      type: 'number',
      headerClassName: "super-app-theme--header",
      width: 150
    },
    {
      headerName: 'Actions',
      field: 'actions',
      type: 'actions',
      headerClassName: "super-app-theme--header",
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={deleteUser(params.id)}
        />,
        <GridActionsCellItem
          icon={<Edit />}
          label='Edit'
          onClick={() => editUser(params.row)}
        />,
      ],
    },
  ],
    [deleteUser],
  );

  const handleRowAdd = () => {
    setCurrentRow({
      id: rows.length + 1,
      productName: "",
      category: "",
      price: null,
      stockQuantity: null
    })
    setOpenDialog(true)
  }

  const handleSave = (data) => {
    if (isEditing) {
      setRows((prev) => prev.map((product) => {
        if (product.id === data.id) return data
        return product
      }))
    } else {
      setRows([...rows, data])
    }
    setOpenDialog(false)
    setCurrentRow({
      id: null,
      productName: "",
      category: "",
      price: null,
      stockQuantity: null
    })
    setIsEditing(false)
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ margin: 0 }}>Products Management</h2>
            <IconButton onClick={() => handleRowAdd()}><AddCircleIcon /></IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ "& .super-app-theme--header": { backgroundColor: 'secondary.dark' }, "& .super-app-theme--rows": { backgroundColor: 'secondary.main' } }}>
            <DataGrid
              columns={columns}
              rows={rows}
              disableColumnMenu={true}
              sx={{ boxShadow: 2, border: 2, borderColor: 'primary.light' }}
              getRowClassName={(params) => 'super-app-theme--rows'}
            />
          </Box>
        </Grid>
      </Grid>
      <FormPage
        handleSave={handleSave}
        rowsLength={rows.length}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        currentRow={currentRow}
        setCurrentRow={setCurrentRow}
      />
    </div>
  )
}

export default ProductMagagement;


