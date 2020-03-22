import React, { Component } from 'react'
import { connect } from "react-redux";

class Home extends Component {
    // có form thì tao state để quản lý
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            name: "",
            email: "",
            phoneNumber: "",
            type: "USER"
        };
    }

    // Khi nhập props tiếp theo khác props ban đầu thì chạy
    // componentWillReceiveProps(nextProps) {
    //     // Kiem tra xem nextProps có tồn tại hay chưa
    //     if (nextProps && nextProps.userEdit) {
    //         this.setState({
    //             id: nextProps.userEdit.id,
    //             username: nextProps.userEdit.username,
    //             name: nextProps.userEdit.name,
    //             email: nextProps.userEdit.email,
    //             phoneNumber: nextProps.userEdit.phoneNumber,
    //             type: nextProps.userEdit.type
    //         })
    //     } else {
    //         // reset lai state cho cac value
    //         this.setState({
    //             id: "",
    //             username: "",
    //             name: "",
    //             email: "",
    //             phoneNumber: "",
    //             type: "USER"
    //         })
    //     }
    // }

    render() {
        return (
            <div>
                <p>UserName from redux : {this.props.userEdit.username}</p>
                <p>Home user-managerment-redux</p>
            </div>
        )
    }
}

// Đẩy data lên store tùy theo action
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (user) => {
            let action = {
                type: "SUBMIT",
                user: user
            };
            dispatch(action);
        }
    }
}

//   Kéo data từ store về làm props xài
const mapStateToProps = state => {
    return {
        userEdit: state.userReducer.userList[0],
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
