import * as ActionType from "./../constant/ActionType"
import Axios from "axios";

// http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung
export const actAddNewUserAPI = (user) => {
  // Xuống local storage collect lên lại parse ra JSON
  const userLocalStorage = JSON.parse(localStorage.getItem("userAdmin"))

  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: user,
      // add token vao headers
      headers: {
        Authorization: "Bearer " + userLocalStorage.accessToken
      }
    }).then(rs => {
      console.log("actAddNewUserAPI");

      // if (rs.data.maLoaiNguoiDung === "QuanTri") {
      //   // save user da log in xuong localStorage (có token)
      //   localStorage.setItem("userAdmin",JSON.stringify(rs.data));
      //   // Dùng history để chuyển hướng trang đến trang tiếp theo
      //   history.push("/admin/dashboard")
      // }else {
      //   alert("Không có quyền");
      // }
    }).catch(err => {
      console.log(err.response.data);
    });
  }
}

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
        localStorage.setItem("userAdmin", JSON.stringify(rs.data));
        // Dùng history để chuyển hướng trang đến trang tiếp theo
        history.push("/admin/dashboard")
      } else {
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
      console.log("actGetListMovieAPI");
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

export const actGetDetailMovie = (detailMovie) => {
  return {
    type: ActionType.GET_DETAIL_MOVIE,
    data: detailMovie
  }
};