import Home from "./pages/home/Home";
import About from "./pages/home/About";
import ListMovie from "./pages/home/ListMovie";
import DetailMovie from "./pages/home/DetailMovie";
import HOC from "./HOC";

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

export {routesHome};