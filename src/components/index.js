import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from '../pages/Home';
import BookDetails from '../pages/BookDetails';
import Books from '../pages/Books';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Nav from './Nav';
import Error from './Error';
import { loginFromStorage } from '../features/user/userSlice';
import { getBooks } from '../features/catalog/catalogSlice';

const Main = () => {
  const loggedIn = useSelector(state => state.user.loggedIn);
  const error = useSelector(state => state.catalog.errors.loadingBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedIn) {
      const userData = localStorage.getItem('currentUser');
      if (userData) {
        const { user, header } = JSON.parse(userData);
        dispatch(loginFromStorage({ user, header }));
      }
    }
  }, [dispatch, loggedIn]);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <Nav />
      {error ? (
        <Error errors={`${error}. Please contact administrator.`} />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books/:id" component={BookDetails} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/dashboard">
            {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login" component={Login}>
            {loggedIn ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/sign_up">
            {loggedIn ? <Redirect to="/dashboard" /> : <SignUp />}
          </Route>
        </Switch>
      )}
    </>
  );
};

export default Main;
