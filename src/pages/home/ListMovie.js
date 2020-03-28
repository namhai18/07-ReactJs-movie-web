import React, { Component } from 'react'
import Movies from '../../components/Movies';
import {connect} from "react-redux";
import * as action from "./../../redux/action/index"
class ListMovie extends Component {

    componentDidMount() {
        // console.log("componentDidMount");
        // Axios({
        //     url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        //     method: 'GET'
        // }).then(rs => {
        //     console.log(rs.data);
        //     this.props.getListMovie(rs.data);
        //     // this.setState({
        //     //     listMovie: rs.data
        //     // })
        // }).catch(error => {
        //     console.log(error)
        // })
        // Gọi lại props trong ham mapDispatchToProps bên dưới 
        this.props.getListMovie();
    }

    renderHTML = () => {
        return this.props.listMovie.map((movie) => {
            return <Movies key={movie.maPhim} movie={movie} />
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

const mapStateToProps = state =>{
    return {
        // ten props chinh la listMovie luon (state tren redux cung ten la listMovie)
      listMovie: state.movieReducer.listMovie
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getListMovie: () => {
        //   let action = {
        //     type: "GET_LIST_MOVIE",
        //     data: listMovie
        //   };
          dispatch(action.actGetListMovieAPI());
        }
      }
}

export default connect(mapStateToProps,mapDispatchToProps) (ListMovie);