import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Assuming you're using react-calendar library
import { DataGrid } from '@mui/x-data-grid'; // Import DataGrid from Material-UI
import { ordersList } from '../../Constants/ItemsList';

const CalenderView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Filter orders based on selected date
  const filteredOrders = ordersList.filter(order => {
    const orderDate = new Date(order.orderDate);
    return orderDate.toDateString() === selectedDate.toDateString();
  });

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  // Define columns for the DataGrid
  const columns = [
    { field: 'orderId', headerName: 'Order ID', width: 200 },
    { field: 'customerName', headerName: 'Customer Name', width: 200 },
    { field: 'orderDate', headerName: 'Order Date', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {/* Left side - Calendar */}
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h2 style={{ marginBottom: '10px' }}>Select Date</h2>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          calendarType="US" // Specify calendar type if needed
        />
      </div>
      {/* Right side - Orders table */}
      <div style={{ flex: 2 }}>
        <h2 style={{ marginBottom: '20px' }}>Orders for {selectedDate.toDateString()}</h2>
        <DataGrid
          rows={filteredOrders}
          columns={columns}
          pageSize={5} // Adjust the number of rows per page as needed
          disableColumnMenu={true}
          autoHeight
          style={{ border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </div>
    </div>
  );
};

export default CalenderView;