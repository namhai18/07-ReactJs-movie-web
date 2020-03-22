import React, { Component } from 'react'
import Axios from "axios";
import Movies from '../../components/Movies';

export default class ListMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listMovie: []
        };
    }
    componentDidMount() {
        console.log("componentDidMount");
        Axios({
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method: 'GET'
        }).then(rs => {
            console.log(rs.data);
            this.setState({
                listMovie: rs.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    renderHTML = () => {
        return this.state.listMovie.map((movie) => {
            return <Movies key={movie.maPhim} />
        })
    }

    render() {
        return (
            <div className="container">
                <p>ListMovie</p>
                <div className="row">{this.renderHTML()}
                </div>
            </div>
        )
    }
}
