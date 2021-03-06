// refer to https://github.com/reactjs/react-router/blob/master/examples%2Fauth-flow%2Fapp.js
export default (nextState, replace) => {
  const token = localStorage.getItem('token');
  if (token === null) {
    replace({
      pathname: '/user/login',
      state: {
        nextPathname: nextState.location.pathname,
      },
    });
  }
};