import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Bus from '../utils/Bus';
import Home from './Home';
import BookDetails from './BookDetails';
import Books from './Books';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import { loginFromStorage } from '../features/user/userSlice';
import { getBooks } from '../features/catalog/catalogSlice';

const Main = () => {
  const loggedIn = useSelector(state => state.user.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedIn) {
      const userData = localStorage.getItem('currentUser');
      if (userData) {
        const { user } = JSON.parse(userData);
        dispatch(loginFromStorage(user));
      }
    }
  }, [dispatch, loggedIn]);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/login" component={Login}>
        {loggedIn ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/sign_up">
        {loggedIn ? <Redirect to="/dashboard" /> : <SignUp />}
      </Route>
      <Route exact path="/dashboard">
        {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/books" component={Books} />
      <Route exact path="/books/:id" component={BookDetails} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Main;
