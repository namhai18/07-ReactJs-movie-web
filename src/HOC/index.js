import React, { Component } from 'react'
import FormNhanVien from "./FormNhanVien";
import FormSanPham from './FormSanPham';

export default class HOC extends Component {
    render() {
        return (
            <div>
                HOC Component
                <FormNhanVien />
                <FormSanPham />
            </div>
        )
    }
}
