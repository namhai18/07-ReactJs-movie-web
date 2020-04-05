import React, { Component } from 'react'
import * as action from "./../../redux/action";
import { connect } from "react-redux";

class DetailMovie extends Component {

    componentDidMount() {
        // Get data từ URL
        console.log(this.props.match.params.id);
        this.props.getDetailMovie(this.props.match.params.id);
    }

    renderBody = () => {
        const { movie } = this.props;
        console.log(movie);
        // Load lần 1 chưa có data nên bị error
        // Cần phải check null khi input thì bỏ qua
        if (movie.lichChieu) {
            return movie.lichChieu.map((item) => {
                return (
                    <tr key={item.maPhim}>
                        <td>{item.thongTinRap.tenCumRap}</td>
                        <td>{item.thongTinRap.tenRap}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                        <td>
                        <button type="button" name="" id="" className="btn btn-primary">Chọn ghế</button>
                        </td>
                    </tr>
                )
            });
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        this.props.resetDetailMovie();
    }

    render() {
        return (
            <div>
                Detail movie
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={this.props.movie.hinhAnh} atl="" />
                    </div>
                    <div className="col-sm-6">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Ten Phim</td>
                                    <td>{this.props.movie.tenPhim}</td>
                                </tr>
                                <tr>
                                    <td>Mo ta</td>
                                    <td>{this.props.movie.moTa}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Cum rap</th>
                                    <th>Ten rap</th>
                                    <th>Ngay chieu</th>
                                    <th>Gio chieu</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderBody()}
                                {/* <tr>
                                    <td>CGV</td>
                                    <td>Rap 2</td>
                                    <td>28/3/2020</td>
                                    <td>22:00</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // ten props chinh la listMovie luon (state tren redux cung ten la listMovie)
        movie: state.movieReducer.detailMovie
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getDetailMovie: (id) => {
            //   let action = {
            //     type: "GET_LIST_MOVIE",
            //     data: listMovie
            //   };
            dispatch(action.actGetDetailMovieAPI(id));
        },
        // truyền vào detail movie object rỗng, để clear detail movie data.
        resetDetailMovie: ()=> {
            dispatch(action.actGetDetailMovie({}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);