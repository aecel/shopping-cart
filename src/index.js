import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cart from "./routes/Cart"
import Contact from "./routes/Contact"
import Home from "./routes/Home"
import Menu from "./routes/Menu"
import Root from "./routes/Root"
import style from "./styles/style.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <></>,
    children: [
      {
        errorElement: <></>,
        children: [
          {
            index: true,
            // path: "home",
            element: <Home />,
          },
          {
            path: "menu",
            element: <Menu />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
