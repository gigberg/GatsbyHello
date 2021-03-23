// import React from "react"

// export default function Home() {
//   return React.createElement("div", null, "Hello world!")
// }

import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
  <div style={{ color: `purple`}}>
    <Link to="/contact/">Contact</Link>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <p>What a word!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
  );
}