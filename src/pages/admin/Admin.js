import React, { Component } from 'react'
import * as action from "./../../redux/action";
import { connect } from "react-redux";

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: ""
        }
    }

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
        console.log(this.props);
        // truyền thêm history vào để chuyển hướng trang
        this.props.login(this.state, this.props.history);
    }

    render() {
        return (
            <div>
                {/*API:  http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01 */}
                {/* "taiKhoan": "123@admin",
    "hoTen": "hải,quay xe",
    "email": "danchoi9x@gmail.com",
    "soDt": "19876512",
    "matKhau": "qwertyiioo",
    "maLoaiNguoiDung": "QuanTri" */}
                Admin
                <form className="container" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>UserName</label>
                        <input type="text" className="form-control" name="taiKhoan" onChange={this.handleOnChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" name="matKhau" onChange={this.handleOnChange}></input>
                    </div>
                    <button type="submit" className="btn btn-success">
                        Log in
                    </button>
                </form>
            </div>
        )
    }
}

// map to store
const mapDispatchToProps = dispatch => {
    return {
        login: (user,history) => {
            dispatch(action.actLoginAdminAPI(user,history));
        }
    }
}

export default connect(null, mapDispatchToProps)(Admin);
