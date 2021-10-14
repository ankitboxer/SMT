import logo from './logo.svg';
import './App.css';
import React from 'react';
import { getSubApp } from './redux/actions/15MinuteReadingActions';
import {connect} from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    console.log(this);
    this.props.getSubApp({userId: 1});
  }
  render() {
    return <h1> Hello </h1>;
  }
}

const mapState = (state) => state
export default connect(mapState, {getSubApp})(App);
