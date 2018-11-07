import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CssBaseline from "@material-ui/core/CssBaseline"


export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (


    <Route {...rest} component={(props) => (
      // isAuthenticated ? (

      //     <Redirect to="/input" />
        
      // ) : (
        
      <React.Fragment>
        <CssBaseline/>
        <Header/>
          
          
        <Component {...props} />
         
          
      </React.Fragment>
       // )
    )} />
  );

const mapStateToProps = (state) => {
  // isAuthenticated: !!state.auth.uid
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  }
}

export default connect(mapStateToProps)(PublicRoute);
// export default connect()(PublicRoute);
