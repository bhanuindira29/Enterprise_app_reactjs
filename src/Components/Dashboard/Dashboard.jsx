import React from 'react';
import { PieChart } from '@mui/x-charts';
import { Link } from 'react-router-dom';
import { Button, Grid, Stack } from '@mui/material';
import { ordersList } from '../../Constants/ItemsList';
import { productList } from '../../Constants/ItemsList';

const Dashboard = () => {
  // Calculate total number of products and orders
  const totalProducts = productList.length;
  const totalOrders = ordersList.length;

  // Data for the bar chart
  const chartData = [
    { id: 1, value: totalOrders, label: 'Total Orders' },
    { id: 0, value: totalProducts, label: 'Total Products' },
  ]

  return (
    <div>
      <h2>Dashboard</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PieChart
            series={[
              {
                data: chartData,
              },
            ]}
            width={800}
            height={400}
          />
        </Grid>
      </Grid>
      <div style={{ marginTop: '20px' }}>
        <h3>Navigation</h3>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Link to="/products">
            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
              Go to Products Management
            </Button>
          </Link>
          <Link to="/orders">
            <Button variant="contained" color="primary">
              Go to Orders Management
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
};

export default Dashboard;
