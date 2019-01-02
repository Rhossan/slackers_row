import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, generalId, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={`/main/${generalId}`} />
    )
  )}/>
);
//
//
// <Redirect to="/main" />
const Protected = ({ componentFirst: ComponentFirst, componentSecond: ComponentSecond, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
       <div>
         <ComponentFirst {...props} />
         <ComponentSecond {...props} />
       </div>
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const RedirectToGeneral = ({path, exact, generalId}) => (
  <Route path={path} exact={exact} render={(props) => (
    <Redirect to={`/main/${generalId}`} />
  )}/>
);


const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.id), generalId: 7};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const RedirectToGeneralRoute = withRouter(connect(mapStateToProps)(RedirectToGeneral));
