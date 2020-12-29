import { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Bus from '../utils/Bus';
import Home from './Home';
import BookDetails from './BookDetails';
import Books from './Books';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';
import Error from '../components/Error';
import Flash from '../components/Flash';
import Sidebar from '../components/Sidebar';
import { loginFromStorage } from '../features/user/userSlice';
import { getBooks } from '../features/catalog/catalogSlice';
import { MainContainer } from '../components/MainContainer.styled';

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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer sidebarIsOpen={isOpen}>
        <Navbar sidebarIsOpen={isOpen} toggle={toggle} />
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
