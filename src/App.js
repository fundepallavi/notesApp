 
import React , { Component } from 'react';
import { connect } from 'react-redux';
//import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch , BrowserRouter} from 'react-router-dom';
import Login from './components/Login.jsx';
 import NoteDetails from './components/noteDetails.jsx';
 

class App extends Component {
  render() {
    
    
  return (
    // <div className="App">
    //   <div className="container" style={{ marginTop: "80px"}} >
    //     <div className="row">
    //       <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
    //         <Login />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //);
    <BrowserRouter>
    <div className="app-routes">
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={NoteDetails} />
      
    </Switch>
  </div>
  </BrowserRouter>
);
  
  }
}
 

export default connect(
  null,
  null
)(App);
