import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Bus from '../utils/Bus';
import Home from '../pages/Home';
import BookDetails from '../pages/BookDetails';
import Books from '../pages/Books';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Navbar from './Navbar';
import Error from './Error';
import Flash from './Flash';
import Sidebar from './Sidebar';
import { loginFromStorage } from '../features/user/userSlice';
import { getBooks } from '../features/catalog/catalogSlice';
import { MainContainer } from './MainContainer.styled';

const Main = () => {
  const loggedIn = useSelector(state => state.user.loggedIn);
  const error = useSelector(state => state.catalog.errors.loadingBooks);
  const [isOpen, setIsOpen] = useState(false);
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

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  window.flash = (message, type = 'success') =>
    Bus.emit('flash', { message, type });

  return (
    <>
      <MainContainer sidebarIsOpen={isOpen}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Flash />
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
      </MainContainer>
    </>
  );
};

export default Main;
