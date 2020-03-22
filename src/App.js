import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home"
import About from "./pages/home/About"
import ListMovie from "./pages/home/ListMovie"
import PageNotFound from "./pages/PageNotFound"
// import logo from './logo.svg';
// import './App.css';
import HomeRedux from './user-managerment-redux/Home'
import Navbar from './components/Navbar';
import { routesHome } from './routes';

function App() {

  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <Route key={index}
          exact={item.exact}
          path={item.path}
          component={item.component} />
      })
    }
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* Dùng </Switch> để chạy case tương ứng */}
        <Switch>
          {showMenuHome(routesHome)}
          {/* trang chủ - dai dien cho localhost:3000
          {/* Dùng exact để define / là Home */}
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/Home" component={Home} /> */}
          {/* <HomeRedux /> */}
          {/* trang about */}
          {/* About vẫn đi qua Home nên 2 trang bị chồng nhau */}
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/list-movies" component={ListMovie} /> */}
          
          {/*Case default => Nên để Route not found cuối cùng */}
          <Route path="" component={PageNotFound} /> */}
        </Switch>
        <hr />
      </div>
    </BrowserRouter>
  );
}

export default App;
