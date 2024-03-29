import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList.js'
import PropTypes from 'prop-types';


const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];
const listNotifications = [
  { id:1, html: "Test", type:"default", value:"Hello"}
]

class App extends React.Component {

  render() {
    const { isLoggedIn} = this.props
  return (
    <React.Fragment>
      <div className="App">
    <Notifications {...{listNotifications}}/>
    </div>
        <Header/>
      {isLoggedIn && <CourseList {...{listCourses}}/>}
      {!isLoggedIn && <Login/>}
      <Footer/>
    </React.Fragment>
  );
}
}
App.propTypes = {
  isLoggedIn: PropTypes.bool
}
App.defaultProps = {
  isLoggedIn:true,
}

export default App;