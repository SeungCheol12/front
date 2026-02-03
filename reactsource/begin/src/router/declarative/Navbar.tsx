import { Link, Route, Routes } from 'react-router-dom';
import Home from '../data/Home';
import About from './About';
import Contact from './Contact';

function Navbar() {
  return (
    <>
      <div className="bg-gray-200">
        <nav className="flex h-20 items-center p-3">
          <Link to={'/'} className="basis-3xs">
            HOME
          </Link>
          <Link to={'/about'} className="basis-3xs">
            ABOUT
          </Link>
          <Link to={'/contact'} className="basis-3xs">
            CONTACT
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
    </>
  );
}

export default Navbar;
