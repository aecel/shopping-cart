import Homecss from "../styles/Home.css"
import { NavLink } from "react-router-dom"
import imageSlider from "../imageSlider.js"
import { useEffect, useRef } from "react"
import quoteIcon from "../images/quote.svg"

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

            <NavLink to={"/menu"} id="menu-button">
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
              <img style={{ height: "100px", width: "auto" }} src={quoteIcon} />
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
                justifyContent: "center",
                alignItems: "center",
                height: "400px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              I don't need an inspirational quote.<br></br> I need a croissant.
            </div>
          </div>
        </section>
        <section className="home-section" style={{ background: "#1A1A1A" }}>
          <div
            style={{
              height: "500px",
              width: "100%",
            }}
          ></div>
        </section>
      </div>
    </div>
  )
}

export default Home
