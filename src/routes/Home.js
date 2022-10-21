import "../styles/Home.css"
import { NavLink } from "react-router-dom"
import imageSlider from "../imageSlider.js"
import { useEffect, useRef } from "react"
import quoteIcon from "../images/quote.svg"
import menuItems from "../menuItems.js"

const Home = () => {
  const slideshowRef = useRef()
  useEffect(() => {
    const importAll = (r) => {
      return r.keys().map(r)
    }

    const slideshowImages = importAll(
      require.context("../images/slideshow/", false, /\.(png|jpe?g|svg)$/)
    )
    imageSlider(slideshowRef.current, slideshowImages)
  }, [])

  return (
    <div id="homepage">
      <div className="bg-mask" id="home-mask">
        <section
          className="home-section"
          style={{
            background: "#141004",
            display: "flex",
            gap: "50px",
            padding: "50px",
          }}
        >
          <div
            className="first-section"
            style={{ alignItems: "flex-start", gap: "20px", width: "500px" }}
          >
            <h1 style={{ margin: "0" }}>Welcome to Kurowa-san!</h1>
            <p>
              Sorry, this is not a real bakery. <br></br>It's nice to look at
              the pictures though.<br></br> Have a look around.
            </p>

            <NavLink to={"/menu"} className="menu-button">
              Look at the menu anyway
            </NavLink>
          </div>
          <div
            className="first-section"
            id="slideshow"
            style={{
              width: "700px",
              backgroundColor: "#141004",
              boxSizing: "border-box",
            }}
            ref={slideshowRef}
          ></div>
        </section>
        <section className="home-section" style={{ background: "none" }}>
          <div
            style={{
              height: "500px",
              width: "100%",
              fontSize: "x-large",
              borderBottom: "4px solid white",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <img
                style={{ height: "100px", width: "auto" }}
                src={quoteIcon}
                alt="Quotation marks"
              />
              <div
                style={{
                  borderBottom: "4px solid white",
                  width: "100%",
                  height: "50px",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "400px",
                fontWeight: "bold",
                textAlign: "center",
                gap: "20px",
              }}
            >
              <div>★ ★ ★ ★ ★</div>
              <div></div>
              <div>"Best croissant I have ever tasted in my life."</div>
              <br></br>- Paul Hollywood
            </div>
          </div>
        </section>
        <section className="home-section" style={{ background: "#141004" }}>
          <div
            style={{
              height: "550px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "100px",
            }}
          >
            <h1 style={{ margin: "0" }}>Try our best sellers!</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "80px",
              }}
            >
              {menuItems.map((item) => {
                if (menuItems.indexOf(item) <= 3) {
                  return (
                    <div className="home-circle-div">
                      <div className="home-circle">
                        <img
                          className="home-circle-img"
                          src={item.img}
                          alt={item.name}
                        ></img>
                      </div>
                      <div>{item.name}</div>
                    </div>
                  )
                } else {
                  return ""
                }
              })}
            </div>
          </div>
        </section>
        <section className="home-section" style={{ background: "#1A1A1A" }}>
          <div
            style={{
              height: "500px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                height: "80%",
                backgroundColor: "#141004",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "100px",
                paddingRight: "100px",
              }}
            >
              <div>
                <h1>Order a Kurowa-san (croissant) today!</h1>
                <p>(Again, this is not real. Sorry.)</p>
              </div>
              <NavLink to={"/menu"} className="menu-button">
                Take me to the menu
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
