import React from 'react'
import {Route} from "react-router-dom";
import Navbar from './../components/Navbar';

const HomeLayout = props => {
    return (
        <div>
            {/* lấy tất cả html dc truyền vào */}
            <Navbar/>
            {props.children}
        </div>
    )
}

// Có thể bóc tách trực tiếp khi truyền props vào
export default function HomeTemplate({Component, ...props}) {
    return (
        console.log("HomeTemplate"),
        console.log(props),
        <Route 
        // 2 cách tương tự
        // component = props.component,
        // exact = props.exact,
        // path=props.path
            {...props}
            // truyền location, history trong render .... (thuộc tính bổ sung)
            render = {(propsComponent)=>(
                    // truyền nguyen html là HomeLayout
                <HomeLayout>
                    <Component{...propsComponent}/>
                </HomeLayout>
            )}
        />
    )
}
