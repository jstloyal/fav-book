import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './Home';
import Books from './Books';
import BookDetails from './Books/BookDetails';
import Creations from './Books/Creations';
import UserFavorites from './Books/UserFavorites';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import { loginFromStorage } from '../features/user/userSlice';

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

  return (
    <>
      <Switch>
        <Route exact path="/login">
          {loggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/sign_up">
          {loggedIn ? <Redirect to="/" /> : <SignUp />}
        </Route>
        <Route exact path="/dashboard">
          {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/creations">
          {loggedIn ? <Creations /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/favorites">
          {loggedIn ? <UserFavorites /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={BookDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Main;
