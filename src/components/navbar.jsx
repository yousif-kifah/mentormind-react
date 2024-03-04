import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <div className="menu-bar-container">
      <div className="div">
        <span style={styling.title_span}>LuxChain {props.name}</span>
        <br />
        <span
          className="title-span-secondary"
          style={{
            fontWeight: 100,
            fontSize: "24px",
            color: "rgba(63,130,109,1)",
          }}>
          we secure your shopping bag !
        </span>
      </div>
      <div className="items">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </div>
  )
}

const styling = {
  title_span: {
    color: "rgba(63,130,109,1)",
    fontSize: "48px",
  },
  title_span_secondary: {
    fontWeight: 100,
    fontSize: "24px",
    color: "rgba(63,130,109,1)",
  },
}
