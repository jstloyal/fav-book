import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Book from '../pages/Book';
import Books from '../pages/Books';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/books/:id" component={Book} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Main;
