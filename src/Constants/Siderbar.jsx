import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Shop2Icon from '@mui/icons-material/Shop2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';

export const siderBarPrimaryItems = [
    {
        id: 0,
        icon: <SpaceDashboardIcon />,
        label: "Dashboard",
        route: "/"
    },
    {
        id: 1,
        icon: <Shop2Icon />,
        label: "Products",
        route: "/products"
    },
    {
        id: 2,
        icon: <ShoppingCartIcon />,
        label: "Orders",
        route: "/orders"
    },
    {
        id: 3,
        icon: <CalendarMonthIcon />,
        label: "Calender",
        route: "/calender"
    }
]

export const siderBarSecondaryItems = [{
    id: 0,
    icon: <InfoIcon />,
    label: "About",
    route: "/about"
}]