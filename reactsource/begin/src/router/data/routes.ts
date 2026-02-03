import { createBrowserRouter } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Accout from './Accout';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import NotFound from './NotFound';
import Logout from './Logout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/contact',
    Component: Contact,
  },
  {
    path: '/accout',
    Component: Accout,
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: 'profile/:id', Component: Profile },
      { path: 'logout', Component: Logout },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

export default router;
