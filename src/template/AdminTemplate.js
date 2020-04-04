import React from 'react'
import { Route } from "react-router-dom";
import {Redirect} from "react-router-dom";

const AdminLayout = props => {
    return (
        <div>
            <div>NavBar Admin</div>
            {props.children}
        </div>
    )
}

export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={propsComponent => {
                if (localStorage.getItem("userAdmin")) {
                    return (
                        <AdminLayout>
                            <Component {...propsComponent} />
                        </AdminLayout>
                    )
                }else{
                    // Dùng Redirect để điều hướng về Login form
                    return <Redirect to ="/admin"/>;
                }
            }}
        />
    )
}
