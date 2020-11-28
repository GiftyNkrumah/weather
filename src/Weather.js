import React, {useContext} from 'react'
import Search from './components/Search'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import logo from './images/logo.png'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import History from './components/History'
import {LoginContext} from './contexts/LoginContext'

function Weather() {

  // const {isLogged, setLogged, username} = useContext(LoginContext)
  
  // function LogOut(event){
  //   setLogged(false)
  // }

  return (
    <Router>
      <div className="wrapper coll">
        <div className="top_navbar">
            <div className="hamburger">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="top_menu">
              <div className="logo">
                <Link to='/' className="navbar-brand logo">
                  <img src={logo} width="30" height="30" alt=""/>
                  SallyWeather
                </Link>
              </div>
              <ul>
                {/* {isLogged?
                  <li>{username}</li>
                   : 
                  <li>Guest</li>
                } */}
                <li><i className="far fa-user" aria-hidden="true"></i></li>
              </ul>
            </div>
          </div>

          <div className="sidebar">
            <ul>
                <li>
                  <Link to="/search">
                    <span className="icon"></span>
                      <i className="fas fa-search" aria-hidden="true"></i>
                    <span className="title">Search</span>
                  </Link>
                </li>
                <li>
                  <Link to="/history">
                    <span className="icon">
                      <i className="fas fa-history" aria-hidden="true"></i>
                    </span>
                    <span className="title">History</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon">
                      <i className="far fa-star" aria-hidden="true"></i>
                    </span>
                    <span className="title">Favorites</span>
                  </Link>
                </li>

                <div className="bottom">
                  {/* {isLogged?
                  <>
                    <li>
                      <Link to="#">
                        <span className="icon"></span>
                          <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
                        <span className="title" data-toggle="modal" data-target="#exampleModal">Sign out</span>
                      </Link>
                    </li>

                    // Modal 
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            Are you sure you want to log out?
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-dismiss="modal">No</button>
                            <button type="button" className="btn btn-light" onClick={LogOut}>Yes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                  : 
                  <>
                    <li>
                      <Link to="/login">
                        <span className="icon"></span>
                          <i className="fas fa-sign-in-alt" aria-hidden="true"></i>
                        <span className="title">Log In</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup">
                        <span className="icon"></span>
                          <i className="fas fa-user-plus" aria-hidden="true"></i>
                        <span className="title">Sign up</span>
                      </Link>
                    </li>
                  </>
                }  */}
                </div>
            </ul>
          </div>
            
        <div className='margin'></div>
        <div className="main">  
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={Search}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/history' component={History}/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Weather;
