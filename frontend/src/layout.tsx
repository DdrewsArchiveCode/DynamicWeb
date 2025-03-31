import { Outlet, Link } from "react-router-dom";
import './css/layout.css';
export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};