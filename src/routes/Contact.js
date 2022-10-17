import style from "../styles/Contact.css"

const Contact = () => {
  return (
    <div id="contactpage">
      <div className="bg-mask" id="contact-mask">
        <h2 style={{ margin: "0" }}>We would love to hear from you.</h2>
        <p style={{ marginBottom: "50px", fontSize: "0.8rem" }}>
          (Clicking submit will not do anything.)
        </p>
        <form id="contact-form">
          <div className="form-div">
            <label htmlFor="your-name" className="form-label">
              Your Name
            </label>
            <input type="text" id="your-name" className="form-input"></input>
          </div>
          <div className="form-div">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="text" id="email" className="form-input"></input>
          </div>
          <div className="form-div">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <input type="textarea" id="message" className="form-input"></input>
          </div>
          <button
            id="contact-button"
            style={{
              alignSelf: "center",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
