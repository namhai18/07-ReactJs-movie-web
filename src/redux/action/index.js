import * as ActionType from "./../constant/ActionType"
import Axios from "axios";

export const actLoginAdminAPI = (user, history) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user
    }).then(rs => {
      console.log("actLoginAdminAPI");
      if (rs.data.maLoaiNguoiDung === "QuanTri") {
        // save user da log in xuong localStorage (có token)
        localStorage.setItem("userAdmin",JSON.stringify(rs.data));
        // Dùng history để chuyển hướng trang đến trang tiếp theo
        history.push("/admin/dashboard")
      }else {
        alert("Không có quyền");
      }
    }).catch(err => {
      console.log(err);
    });
  }
}

export const actGetDetailMovieAPI = (id) => {
  return dispatch => {
    // http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1314
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    }).then(rs => {
      console.log("actGetDetailMovieAPI");
      // send data get ve tu axios to redux
      dispatch({
        type: ActionType.GET_DETAIL_MOVIE,
        data: rs.data
      });
    }).catch(err => {
      console.log(err);
    });
  }
}

export const actGetListMovieAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    }).then(rs => {
      console.log(rs.data);
      // send data thang len store sau khi API tra ve data
      dispatch(getListMovies(rs.data));
    }).catch(err => {
      console.log(err);
    });
  };
};

export const getListMovies = (listMovie) => {
  return {
    type: ActionType.GET_LIST_MOVIE,
    data: listMovie
  }
};

    // export const actGetDetailMovie = () => {
    //   return {
    //     type: ActionType.GET_LIST_MOVIE,
    //     data: listMovie
    //   }
    // };