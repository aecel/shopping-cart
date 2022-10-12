import { NavLink, Outlet } from "react-router-dom"
import kurowalogo from "../images/kurowa-san-white.svg"

const Root = () => {
  return (
    <div id="root">
      <header>
        <div className="header-left">
          <div className="logo-container">
            <img className="logo" src={kurowalogo} alt="Kurowa-san Logo" />
          </div>
          Kurowa-san
        </div>
        <div className="header-right">
          <NavLink
            to={"/home"}
            id="home"
            className={({ isActive, isPending }) =>
              isActive
                ? "header-tab chosen-tab"
                : isPending
                ? "header-tab"
                : "header-tab"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/menu"}
            id="menu"
            className={({ isActive, isPending }) =>
              isActive
                ? "header-tab chosen-tab"
                : isPending
                ? "header-tab"
                : "header-tab"
            }
          >
            Menu
          </NavLink>
          <NavLink
            to={"/contact"}
            id="contact"
            className={({ isActive, isPending }) =>
              isActive
                ? "header-tab chosen-tab"
                : isPending
                ? "header-tab"
                : "header-tab"
            }
          >
            Contact
          </NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Copyright © aecel 2022</footer>
    </div>
  )
}

export default Root
