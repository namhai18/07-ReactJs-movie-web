import React, { Component } from 'react'
import FormNhanVien from "./FormNhanVien";
import FormSanPham from './FormSanPham';
import WithModal from './WithModal';

const FormModal = WithModal(FormSanPham);

export default class HOC extends Component {
    render() {
        return (
            <div>
                HOC Component
                <FormModal/>
            </div>
        )
    }
}
