import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Books from '../pages/Books';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import Nav from '../components/Nav';

const Main = () => {
  const loggedIn = useSelector(state => state.user.loggedIn);

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/books/:id" component={Book} />
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
    </>
  );
};

export default Main;
