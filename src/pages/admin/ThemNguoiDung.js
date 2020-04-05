import React, { Component } from 'react'
import * as action from "./../../redux/action";
import { connect } from "react-redux";

class ThemNguoiDung extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: "",
        }
    }

    // Khi input thay đổi value thì set lại state
    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            // copy lai state value , va multi-form gan lai 
            [name]: value 
        },
            () => {
                // console.log(this.state);
            });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        // truyền vào cục user chính là this.state.
        this.props.addNewUser(this.state);
    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.handleSubmit}> 
                    <h3>Thêm người dùng</h3>
                    <div className="form-group">
                        <span>Tài khoản</span>
                        <input className="form-control" name="taiKhoan" onChange={this.handleOnChange} />
                    </div>
                    <div className="form-group">
                        <span>Mật khẩu</span>
                        <input className="form-control" name="matKhau" onChange={this.handleOnChange}/>
                    </div>
                    <div className="form-group">
                        <span>Họ tên</span>
                        <input className="form-control" name="hoTen" onChange={this.handleOnChange}/>
                    </div>
                    <div className="form-group">
                        <span>Email</span>
                        <input className="form-control" name="email" onChange={this.handleOnChange}/>
                    </div>
                    <div className="form-group">
                        <span>Số điện thoại</span>
                        <input className="form-control" name="soDt" onChange={this.handleOnChange}/>
                    </div>
                    <div className="form-group">
                        <span>Mã nhóm</span>
                        <input className="form-control" name="maNhom" onChange={this.handleOnChange}/>
                    </div>
                    <div className="form-group">
                        <span>Mã loại người dùng</span>
                        <input className="form-control" name="maLoaiNguoiDung" onChange={this.handleOnChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Thêm người dùng</button>
                    </div>
                </form>
            </div>
        )
    }
}

// map to store
const mapDispatchToProps = dispatch => {
    return {
        // key(addNewUser) cũng chính là props
        addNewUser: (user) => {
            dispatch(action.actAddNewUserAPI(user));
        }
    }
}

export default connect(null, mapDispatchToProps)(ThemNguoiDung);
