import { NavLink, Outlet } from "react-router-dom";

import { logout } from '../auth/auth';

import Button from "./Button";

export default function Navbar () {
  return (
    <div  className="py-40">
      <div className="fixed top-0 left-0 bg-white w-full  border border-slate-200">
        <div className="flex justify-center items-center gap-x-6 p-5">
          <NavLink to="/" className={({ isActive }) =>
              isActive ? 'underline' : ''
            }>
            Products
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
              isActive ? 'underline' : ''
            }>
            Contact
          </NavLink>
          <NavLink to="/wishlist" className={({ isActive }) =>
              isActive ? 'underline' : ''
            }>
            Wishlist
          </NavLink>

          <Button onClick={() => logout()}>
            Logout
          </Button>
        </div>
      </div>
      <Outlet />
    </div>
  )
}