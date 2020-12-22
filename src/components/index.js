import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Books from '../pages/Books';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';

const Main = () => {
  const loggedIn = useSelector(state => state.user.loggedIn);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/books/:id" component={Book} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/login" component={Login}>
        {loggedIn ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route exact path="/sign_up" component={SignUp} />
    </Switch>
  );
};

export default Main;
