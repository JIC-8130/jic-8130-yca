import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logout } from "../redux/auth-reducer";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';




import { Link } from 'react-router-dom';
import PublicNavList from '../navs/publicNav';
import PrivateNavList from '../navs/privateNav';
import ExpandNavList from '../navs/expandNavs'
import { NavLink } from 'react-router-dom';


class Header extends React.Component {

  constructor(props) {


    super(props);
    this.state = {
      value: 1, open: false,
      componentsmenuopen: false
    };


    console.log('inside header component!');
    console.log(this.props);

  }

  handleChange = (event, index, value) => this.setState({ value });
  onLeftIconButtonClick = (event, index, value) => {
    console.log('hi;');
    this.setState({ open: !this.state.open });

  };

  toggleDrawer = (open) => () => {
    this.setState({
      open: open,
    });
  };

  handleClick = () => {
    console.log('clicked');
    this.setState({ componentsmenuopen: !this.state.componentsmenuopen });
  };

  handleClose = event => {
    if (this.target1.contains(event.target) || this.target2.contains(event.target)) {
      return;
    }

    this.setState({ componentsmenuopen: false });
  };

  logOut = () => {
    // alert("LOGOUT");
    this.props.logout();
  }

  conditRenderEssential = () => this.props.isLoginSuccess ? (
    <Button color="inherit" align="right" onClick={this.logOut}> <Link to="/"> Logout</Link></Button>) : (<Button color="inherit" align="right"><Link to="/login"> Login</Link></Button>)

  render() {

    const { open } = this.state.componentsmenuopen;
    return (
      <div>



        <Drawer open={this.state.open} onClose={this.toggleDrawer(false)} >
          <div
            tabIndex={0}
            role="button"

          >
            <div className="sidelistwrapper">



              {!this.props.userid && (<React.Fragment><PublicNavList /> <ExpandNavList /></React.Fragment>)}


              {/*start if testing*/}

              {this.props.userid && (<React.Fragment>
                <PrivateNavList />
              </React.Fragment>
              )}
              {/* end of testing */}



            </div>
          </div>
        </Drawer>
        <div className="appbarwrapper">

          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className="headertypoclass" >
                ASGARD
          </Typography>

              {
                this.conditRenderEssential()
              }

            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    logout: () => {
      logout()(dispatch);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);