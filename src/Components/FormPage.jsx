import { Box, Button, Slide, Stack, TextField } from '@mui/material'
import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CustomDialog } from '../Theme';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const FormPage = ({
    handleSave,
    rowsLength,
    openDialog,
    setOpenDialog,
    currentRow,
    setCurrentRow
}) => {

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleChange = (formData) => {
        const { name, value } = formData.target
        switch (name) {
            case 'productName': {
                setCurrentRow({ ...currentRow, productName: value })
                break;
            }
            case 'category': {
                setCurrentRow({ ...currentRow, category: value })
                break;
            }
            case 'price': {
                setCurrentRow({ ...currentRow, price: value })
                break;
            }
            case 'stockQuantity': {
                setCurrentRow({ ...currentRow, stockQuantity: value })
                break;
            }
        }
    }

    return (
        <Box>
            <CustomDialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleDialogClose}
                maxWidth='sm'
                fullWidth
                scroll='paper'
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Fill the Form"}</DialogTitle>
                <DialogContent>
                            <Stack sx={{mt:2}} spacing={2}>
                                <TextField
                                    id="product-name"
                                    label="Product Name"
                                    variant="outlined"
                                    name="productName"
                                    value={currentRow?.productName ? currentRow.productName : ""}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <TextField
                                    id="category-name"
                                    label="Category Name"
                                    variant="outlined"
                                    name="category"
                                    value={currentRow?.category ? currentRow.category : ""}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <TextField
                                    id="price"
                                    label="Price"
                                    type="number"
                                    name="price"
                                    value={currentRow?.price ? currentRow.price : ""}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <TextField
                                    id="stockQuantity"
                                    label="Stock Quantity"
                                    type="number"
                                    name="stockQuantity"
                                    value={currentRow?.stockQuantity ? currentRow.stockQuantity : ""}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button onClick={() => handleSave(currentRow)}>Save</Button>
                </DialogActions>
            </CustomDialog>
        </Box>
    )
}

export default FormPage