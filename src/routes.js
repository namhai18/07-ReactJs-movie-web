import Home from "./pages/home/Home";
import About from "./pages/home/About";
import ListMovie from "./pages/home/ListMovie";
import DetailMovie from "./pages/home/DetailMovie";
import HOC from "./HOC";
import Dashboard from "./pages/admin/Dashboard";
import ThemNguoiDung from "./pages/admin/ThemNguoiDung";

const routesHome = [
    {
        path: "/",
        // exact: true => giup the hien dau / la trang chu 
        exact: true,
        component: Home
    },
    {
        path: "/home",
        exact: false,
        component: Home
    },
    {
        path: "/about",
        exact: false,
        component: About
    },
    {
        path: "/list-movies",
        exact: false,
        component: ListMovie
    },
    {
        // xem chi tiet tuy theo id tren url
        path: "/detail-movie/:id",
        exact: false,
        component: DetailMovie
    },
    {
        // xem chi tiet tuy theo id tren url
        path: "/hoc",
        exact: false,
        component: HOC
    },
]

const routesAdmin = [
    {
        path: "/admin/dashboard",
        // exact: true => giup the hien dau / la trang chu 
        exact: false,
        component: Dashboard
    },
    {
        path: "/admin/them-nguoi-dung",
        // exact: true => giup the hien dau / la trang chu 
        exact: false,
        component: ThemNguoiDung
    },
]

export {routesHome,routesAdmin};