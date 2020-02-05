import "core-js/stable"
import "regenerator-runtime/runtime"

import React from "react"
import ReactDOM from "react-dom"
import Root from "./components/Root"

const App = () => {
  return <Root />
}

ReactDOM.render(<App />, document.getElementById("app"))
