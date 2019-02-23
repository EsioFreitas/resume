import React, { Component, Fragment} from 'react';
import { Route, withRouter, Switch, Redirect} from 'react-router-dom'
import Project from './Components/Projects/Project/Project'
import {connect} from 'react-redux'

import Homepage from './container/Homepage/Homepage';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path={'/'+this.props.id}  component={Project}/>
          <Route path='/' exact component={Homepage}/>
          <Redirect to="/" />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = state =>{
  return{
      id: state.postId
  }
}

export default withRouter(connect(mapStateToProps) (App));
