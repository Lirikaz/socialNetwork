import './App.css';
import React from "react";
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
          <div className="app-wrapper">
              <HeaderContainer/>
              <Navbar/>
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path="/profile" element={<ProfileContainer/>}>
                          <Route path=":userId" element={<ProfileContainer/>}/>
                      </Route>
                      <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                      <Route path="/users/" element={<UsersContainer/>}/>
                      <Route path="/login/" element={<Login/>}/>
                  </Routes>
              </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
