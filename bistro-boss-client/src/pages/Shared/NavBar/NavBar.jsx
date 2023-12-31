import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link to={"/"} className="hover:text-white">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/menu"} className="hover:text-white">
          Our Menu
        </Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to={"/order/salad"}>Order</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl bg-black text-white opacity-80">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Restaurant
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
